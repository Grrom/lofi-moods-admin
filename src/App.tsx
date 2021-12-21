import { useEffect, useState } from "react";
import LofiMoodsApiHelper from "./api/lofi-moods-api-helper";
import "./App.scss";
import Content from "./components/content/content";
import NavBar from "./components/navbar/navbar";
import SideBar from "./components/sidebar/sidebar";
import { initializeApp } from "firebase/app";
import FireBaseHelper from "./api/firebase-helper";
import { mood } from "./types/types";

initializeApp({
  apiKey: "AIzaSyDl1rXG54RQlR7FnxPct8oLKYNkurrwNMY",
  authDomain: "lofi-moods.firebaseapp.com",
  projectId: "lofi-moods",
  storageBucket: "lofi-moods.appspot.com",
  messagingSenderId: "474872717326",
  appId: "1:474872717326:web:50bfa76cd2dcf9164f5c5f",
  measurementId: "G-Q75WDCCK7V",
});

export const fireBaseHelper = new FireBaseHelper();
export const ApiHelper = new LofiMoodsApiHelper();

export default function App() {
  const [selected, setSelected] = useState(undefined as mood | undefined);
  const [moods, setMoods] = useState([] as Array<mood>);

  const [gettingMoods, setGettingMoods] = useState(false);

  const select = (item: mood) => setSelected(() => item);
  const addMood = (item: mood) => setMoods((current) => current.concat(item));
  const deleteMood = (item: mood) => {
    setMoods(() => moods.filter((obj) => obj !== item));
    select(undefined);
  };

  useEffect(() => {
    async function getMoods() {
      setGettingMoods(() => true);
      let _moods = await ApiHelper.getMoods();
      setGettingMoods(() => false);
      setMoods(() => _moods);
    }

    getMoods();
  }, []);

  return (
    <div id="app">
      <NavBar
        selected={selected}
        select={select}
        moods={moods}
        addMood={addMood}
        gettingMoods={gettingMoods}
      />
      <main>
        <SideBar
          selected={selected}
          select={select}
          moods={moods}
          addMood={addMood}
          gettingMoods={gettingMoods}
        />
        <Content selected={selected} deleteMoodFromState={deleteMood} />
      </main>
    </div>
  );
}
