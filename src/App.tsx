import { useState } from "react";
import LofiMoodsApiHelper from "./api/lofi-moods-api-helper";
import "./App.scss";
import Content from "./components/content/content";
import NavBar from "./components/navbar/navbar";
import SideBar from "./components/sidebar/sidebar";

export const ApiHelper = new LofiMoodsApiHelper();

export default function App() {
  const [selected, setSelected] = useState("");

  const select = (item: string) => setSelected(() => item);

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
