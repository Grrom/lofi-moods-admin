import "./navbar.scss";
import hamburger from "../../assets/hamburger.svg";
import SideBar from "../sidebar/sidebar";
import Helpers from "../../helpers/helpers";
import { mood } from "../../types/types";

interface _props {
  select: (item: mood) => void;
  selected?: mood;
}

export default function NavBar({ select, selected }: _props) {
  function showSidebar() {
    Helpers.getById("sidebar")!.style.width = "80vw";
    Helpers.getById("overlay")!.style.width = "100vw";
  }

  function hideSidebar() {
    Helpers.getById("sidebar")!.style.width = "0vw";
    Helpers.getById("overlay")!.style.width = "0vw";
  }

  return (
    <div id="navbar">
      <h2>Lofi Moods Dashboard</h2>
      <img
        src={hamburger}
        title="nav"
        alt="nav"
        className="icon clickable hamburger"
        onClick={() => showSidebar()}
      />
      <div id="overlay" onClick={() => hideSidebar()}></div>
      <SideBar selected={selected} select={select} hideSidebar={hideSidebar} />
    </div>
  );
}
