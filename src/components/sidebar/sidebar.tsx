import SidebarItem from "./sidebar-item";
import "./sidebar.scss";
import playlist from "../../assets/playlist.svg";

interface _props {
  selected: String;
  select: (item:string) => void;
  hideSidebar?: () => void | null;
}

export default function SideBar({ selected, select, hideSidebar }:_props) {
  function _hideSidebar() {
    try {
      if(hideSidebar!==null) hideSidebar!();
      
    } catch {}
  }
  return (
    <div id="sidebar">
        <span
          onClick={() => {
            select("music");
            _hideSidebar();
          }}
          className="sidebar-item-container"
        >
          <SidebarItem
            label="music"
            imagesrc={playlist}
            isSelected={selected === "music"}
          />
      </span>
    </div>
  );
}
