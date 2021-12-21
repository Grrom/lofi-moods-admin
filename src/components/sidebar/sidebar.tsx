import SidebarItem from "./sidebar-item";
import "./sidebar.scss";
import playlist from "../../assets/playlist.svg";
import { useEffect, useState } from "react";
import { mood } from "../../types/types";
import { ApiHelper } from "../../App";
import { MiniLoader } from "../misc/loader";

interface _props {
  selected: string;
  select: (item: string) => void;
  hideSidebar?: () => void | null;
}

export default function SideBar({ selected, select, hideSidebar }: _props) {
  const [moodsShown, setMoodsShown] = useState(false);
  const [moodss, setMoods] = useState([] as Array<mood>);

  const [gettingMoods, setGettingMoods] = useState(false);

  useEffect(() => {
    async function getMoods() {
      setGettingMoods(() => true);
      let _moods = await ApiHelper.getMoods();
      setGettingMoods(() => false);
      setMoods(() => _moods);
    }

    getMoods();
  }, []);

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
        gettingMoods ? (
          <MiniLoader />
        ) : (
          <div className="moods-container">
            {moodss.map((mood) => (
              <SidebarContainer
                key={mood.id}
                select={select}
                _hideSidebar={_hideSidebar}
                selected={selected}
                mood={mood.mood}
              />
            ))}
          </div>
        )
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
