import "./navbar.scss";
import hamburger from "../../assets/hamburger.svg";
import SideBar from "../sidebar/sidebar";
import { getById } from "../../helpers";

interface _props{
  select: (item:string)=>void,
  selected:string ,
}

export default function NavBar({ select, selected }: _props) {
  function showSidebar() {
    getById("sidebar")!.style.width = "80vw";
    getById("overlay")!.style.width = "100vw";
  }

  function hideSidebar() {
    getById("sidebar")!.style.width = "0vw";
    getById("overlay")!.style.width = "0vw";
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
