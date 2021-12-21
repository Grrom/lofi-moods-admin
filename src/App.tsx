import { useState } from "react";
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

  const select = (item: mood) => setSelected(() => item);

  return (
    <div id="app">
      <NavBar selected={selected} select={select} />
      <main>
        <SideBar selected={selected} select={select} />
        <Content selected={selected} />
      </main>
    </div>
  );
}
