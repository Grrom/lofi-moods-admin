import "./content.scss";
import ActionBar from "./action-bar";
import ContentItem from "./content-item";
import { useEffect, useState } from "react";
import { music } from "../../types/types";
import { Loader } from "../misc/loader";
import { ApiHelper } from "../../App";
import { moods } from "../../helpers/constants";

interface _props {
  selected: string;
}

export default function Content({ selected }: _props) {
  const [musicList, setMusicList] = useState([] as Array<music>);
  const [gettingMusic, setGettingMusic] = useState(true);

  useEffect(() => {
    console.log("haha");
    async function getMusic() {
      setGettingMusic(() => true);
      let _musicList: Array<music> = await ApiHelper.getMusic(selected);
      setGettingMusic(() => false);
      setMusicList(() => _musicList);
    }

    getMusic();
  }, [selected]);

  function deleteMusic(id: number) {
    setMusicList(() => musicList.filter((obj) => obj.id !== id));
  }

  function addMusic(music: music) {
    setMusicList((current) => [music, ...current]);
  }

  function contentSwitch() {
    if (moods.includes(selected)) {
      return (
        <div className="content-container">
          {gettingMusic ? (
            <Loader />
          ) : (
            musicList.map((music: music) => (
              <ContentItem
                key={music.id}
                music={music}
                deleteMe={deleteMusic}
              />
            ))
          )}
        </div>
      );
    } else {
      return <h3 className="content-message">None selected</h3>;
    }
  }

  return (
    <div id="content">
      <ActionBar
        show={selected !== ""}
        selected={selected}
        addMusic={addMusic}
      />
      {contentSwitch()}
    </div>
  );
}
