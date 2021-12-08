import SidebarItem from "./sidebar-item";
import "./sidebar.scss";
import playlist from "../../assets/playlist.svg";
import { useState } from "react";
import { moods } from "../../helpers/constants";

interface _props {
  selected: string;
  select: (item: string) => void;
  hideSidebar?: () => void | null;
}

export default function SideBar({ selected, select, hideSidebar }: _props) {
  const [moodsShown, setMoodsShown] = useState(false);

  function _hideSidebar() {
    try {
      if (hideSidebar !== null) hideSidebar!();
    } catch {}
  }
  return (
    <div id="sidebar">
      <span
        onClick={() => setMoodsShown((currentValue) => !currentValue)}
        className="sidebar-item-container"
      >
        <SidebarItem
          label="Music"
          imagesrc={playlist}
          isSelected={moodsShown}
        />
      </span>
      {moodsShown ? (
        <div className="moods-container">
          {moods.map((mood) => (
            <SidebarContainer
              select={select}
              _hideSidebar={_hideSidebar}
              selected={selected}
              mood={mood}
            />
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

interface SidebarContainerProps {
  select: (toSelect: string) => void;
  _hideSidebar: () => void;
  selected: string;
  mood: string;
}

function SidebarContainer({
  select,
  _hideSidebar,
  selected,
  mood,
}: SidebarContainerProps) {
  return (
    <span
      onClick={() => {
        select(mood);
        _hideSidebar();
      }}
      className="sidebar-item-container"
    >
      <SidebarItem
        label={mood}
        imagesrc={playlist}
        isSelected={selected === mood}
      />
    </span>
  );
}
