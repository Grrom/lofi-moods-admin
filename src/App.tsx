import { useEffect, useState } from "react";
import "./App.scss";
import Content from "./components/content/content";
import NavBar from "./components/navbar/navbar";
import SideBar from "./components/sidebar/sidebar";
import { initializeApp } from "firebase/app";
import FireBaseHelper from "./api/firebase-helper";
import { mood } from "./types/types";
import Helpers from "./helpers/helpers";
import AuthenticationHelper from "./api/authentication-helper";
import Login from "./components/login/login";
import { Loader } from "./components/misc/loader";

initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
});

export const authenticationHelper = new AuthenticationHelper(
  initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  })
);

export const fireBaseHelper = new FireBaseHelper();

export default function App() {
  const [selected, setSelected] = useState(undefined as mood | undefined);
  const [moods, setMoods] = useState([] as Array<mood>);

  const [gettingMoods, setGettingMoods] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingLogin, setCheckingLogin] = useState(true);

  const select = (item: mood) => setSelected(() => item);
  const addMood = (item: mood) => setMoods((current) => current.concat(item));
  const deleteMood = (item: mood) => {
    setMoods(() => moods.filter((obj) => obj !== item));
    select(undefined);
  };

  useEffect(() => {
    async function getMoods() {
      setGettingMoods(() => true);
      let moodsResponse = await fireBaseHelper.fetchMoods();
      if (moodsResponse.success) {
        setMoods(() => moodsResponse.data!);
      } else {
        Helpers.errorAlert(moodsResponse.message);
      }
      setGettingMoods(() => false);
    }

    if (loggedIn) getMoods();
  }, [loggedIn]);

  useEffect(() => {
    async function checkLoggedIn() {
      authenticationHelper.auth.onAuthStateChanged(async () => {
        let isLoggedIn = await authenticationHelper.isAdmin();
        setLoggedIn(() => isLoggedIn);
        setCheckingLogin(() => false);
      });
    }

    checkLoggedIn();
  }, []);

  if (checkingLogin) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (loggedIn) {
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
  } else {
    return <Login updateAuth={() => setLoggedIn(() => true)} />;
  }
}
