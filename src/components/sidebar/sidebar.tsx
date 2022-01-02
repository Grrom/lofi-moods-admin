import SidebarItem from "./sidebar-item";
import "./sidebar.scss";
import { useState } from "react";
import { mood } from "../../types/types";
import { ApiHelper } from "../../App";
import { MiniLoader } from "../misc/loader";

import playlist from "../../assets/playlist.svg";
import add from "../../assets/add.svg";
import Helpers from "../../helpers/helpers";

interface _props {
  selected?: mood;
  select: (item: mood) => void;
  addMood: (item: mood) => void;
  hideSidebar?: () => void | null;
  gettingMoods: boolean;
  moods: Array<mood>;
}

export default function SideBar({
  selected,
  select,
  addMood,
  hideSidebar,
  gettingMoods,
  moods,
}: _props) {
  const [moodsShown, setMoodsShown] = useState(false);

  function _hideSidebar() {
    try {
      if (hideSidebar !== null) hideSidebar!();
    } catch {}
  }

  function moodsLister() {
    let _moodsList: Array<JSX.Element> = moods.map((mood) => (
      <SidebarContainer
        key={mood}
        select={select}
        _hideSidebar={_hideSidebar}
        selected={selected}
        mood={mood}
      />
    ));

    _moodsList.push(
      <span
        key="addMood"
        onClick={() => {
          Helpers.textInputAlert(
            "Enter the name of the mood",
            async (value) => {
              if (value !== "") {
                let addMoodRes = await ApiHelper.addMood(value);

                if (addMoodRes.success) {
                  Helpers.successAlert(addMoodRes.message);
                  addMood(addMoodRes.data);
                } else {
                  Helpers.errorAlert(addMoodRes.message);
                }
              }
            }
          );
        }}
      >
        <SidebarItem imagesrc={add} label="Add Mood" isSelected={false} />
      </span>
    );
    return _moodsList;
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
          <div className="moods-container">{moodsLister()}</div>
        )
      ) : (
        ""
      )}
    </div>
  );
}

interface SidebarContainerProps {
  select: (toSelect: mood) => void;
  _hideSidebar: () => void;
  selected?: mood;
  mood: mood;
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
        label={mood!}
        imagesrc={playlist}
        isSelected={selected === mood}
      />
    </span>
  );
}
