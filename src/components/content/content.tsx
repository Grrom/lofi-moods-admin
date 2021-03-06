import "./content.scss";
import ActionBar from "./action-bar";
import ContentItem from "./content-item";
import { useEffect, useState } from "react";
import { apiResponse, mood, music } from "../../types/types";
import { Loader } from "../misc/loader";
import { id } from "../../types/types";
import { fireBaseHelper } from "../../App";
import Helpers from "../../helpers/helpers";

interface _props {
  selected?: mood;
  deleteMoodFromState: (mood: mood) => void;
}

export default function Content({ selected, deleteMoodFromState }: _props) {
  const [musicList, setMusicList] = useState([] as Array<music>);
  const [gettingMusic, setGettingMusic] = useState(true);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    async function getMusic() {
      setGettingMusic(() => true);
      let musicResponse: apiResponse<Array<music>> =
        await fireBaseHelper.fetchMusic(selected);

      if (musicResponse.success) {
        setMusicList(() => musicResponse.data!);
      } else {
        Helpers.errorAlert(musicResponse.message);
      }
      setGettingMusic(() => false);
    }

    if (selected !== undefined) {
      getMusic();
    }
  }, [selected]);

  function deleteMusic(id: id) {
    setMusicList(() => musicList.filter((obj) => obj.id !== id));
  }

  function addMusic(music: music) {
    setMusicList((current) => [music, ...current]);
  }

  const search = (input: string) => setSearchString(() => input);
  function getList() {
    let arr: JSX.Element[] = [];

    if (searchString !== "") {
      musicList.forEach((music) => {
        if (
          music.title
            .trim()
            .toLowerCase()
            .includes(searchString.trim().toLowerCase())
        ) {
          arr.push(createItem(music));
        }
      });
    } else {
      arr = musicList.map((music) => createItem(music));
    }
    return arr;
  }

  function createItem(music: music) {
    return <ContentItem key={music.id} music={music} deleteMe={deleteMusic} />;
  }

  function contentSwitch() {
    if (selected !== undefined) {
      return (
        <div className="content-container">
          {gettingMusic ? (
            <Loader />
          ) : musicList.length > 0 ? (
            getList().map((item: JSX.Element) => item)
          ) : (
            <h3 className="content-message">There are no items in this list</h3>
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
        show={selected !== undefined}
        selected={selected}
        addMusic={addMusic}
        playList={musicList}
        search={search}
        deleteMoodFromState={deleteMoodFromState}
      />
      {contentSwitch()}
    </div>
  );
}
