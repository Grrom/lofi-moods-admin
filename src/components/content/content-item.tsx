import { apiResponse, music, musicProps } from "../../types/types";
import { ApiHelper } from "../../App";
import { MiniLoader } from "../misc/loader";
import Helpers from "../../helpers/helpers";
import { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

import trash from "../../assets/trash.svg";
import play from "../../assets/play.svg";
import pause from "../../assets/pause.svg";
import ReactPlayer from "react-player/youtube";

interface _props {
  music: music;
  deleteMe: (id: number) => void;
}

export default function ContentItem({ music, deleteMe }: _props) {
  const [deleting, setDeleting] = useState(false);
  const [musicItem, setMusicItem] = useState(music);
  const [playIcon, setPlayIcon] = useState(play);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [played, setPlayed] = useState(0);

  async function deleteMusic(id: number) {
    Helpers.confirmDialog({
      question: "Are you sure you want to delete this music?",
      onConfirm: async () => {
        setDeleting(() => true);
        let deleteMusic: apiResponse<any> = await ApiHelper.deleteMusic(id);
        setDeleting(() => false);
        if (deleteMusic.success) {
          Helpers.successAlert(deleteMusic.message);
          deleteMe(id);
        } else {
          Helpers.errorAlert(deleteMusic.message);
        }
      },
      confirmButtonColor: "red",
    });
  }

  function playMusic() {
    setIsPlaying((current) => !current);
  }

  function setProgress(progress: number) {}

  async function editData(id: number, column: string, value: string) {
    let updateResponse: apiResponse<any> = await ApiHelper.updateMusic(
      id,
      column,
      value
    );
    let idInDom = `${column}-${musicItem[column as musicProps]}`;

    value = value.trim();

    function fail() {
      Helpers.getById(idInDom)!.textContent =
        musicItem[column as musicProps]!.toString();
    }

    if (musicItem[column as musicProps] === value) {
      fail();
    } else {
      if (value.length <= 0) {
        Helpers.errorAlert("Invalid input", 1000);
        fail();
      } else {
        if (updateResponse.success) {
          Helpers.successAlert("Edited successfully", 1000);
          setMusicItem((current) => {
            let newMusicItem = { ...current };
            (newMusicItem[column as musicProps] as string) = value;
            return newMusicItem;
          });
        } else {
          Helpers.errorAlert("Failed to edit value", 1000);
          fail();
        }
      }
    }
  }

  return (
    <div className="content-item">
      <div className="content-item-container">
        <div>
          <h3
            id={`title-${musicItem.title}`}
            contentEditable
            className="break-word"
            suppressContentEditableWarning
            spellCheck={false}
            onBlur={(value) => {
              editData(musicItem.id!, "title", value.target.textContent!);
            }}
          >
            {musicItem.title}
          </h3>
          <h4
            id={`owner-${musicItem.owner}`}
            contentEditable
            className="break-word"
            suppressContentEditableWarning
            spellCheck={false}
            onBlur={(value) => {
              editData(musicItem.id!, "owner", value.target.textContent!);
            }}
          >
            {musicItem.owner}
          </h4>
          <small>
            <h5
              id={`link-${musicItem.link}`}
              contentEditable
              className="break-word"
              suppressContentEditableWarning
              spellCheck={false}
              onBlur={(value) => {
                editData(musicItem.id!, "link", value.target.textContent!);
              }}
            >
              {musicItem.link}
            </h5>
          </small>
        </div>
        <div className="thumb-icon">
          <img
            className="thumbnail"
            src={`https://i.ytimg.com/vi/${musicItem.link}/mqdefault.jpg`}
            alt="thumbnail"
          />
          <div className="icon-container">
            <div
              className="bg-red icon-button"
              onClick={() => deleteMusic(musicItem.id!)}
            >
              {deleting ? (
                <MiniLoader />
              ) : (
                <img className="icon " src={trash} alt="delete" />
              )}
            </div>
            <div className="bg-green icon-button" onClick={() => playMusic()}>
              {deleting ? (
                <MiniLoader />
              ) : (
                <img className="icon " src={playIcon} alt="play" />
              )}
            </div>
          </div>
        </div>
        <ReactPlayer
          className="react-player"
          url={`https://www.youtube.com/watch?v=${musicItem.link}`}
          onStart={() => {
            // setBottomPreview('Now Playing: '+selectedTrack.title);
            // checkAndSetBg(sauce);
          }}
          onError={() =>
            Helpers.errorAlert(
              "something went wrong while fetching music make sure you added a valid link to the resource"
            )
          }
          onPlay={() => setPlayIcon(() => pause)}
          onPause={() => setPlayIcon(() => play)}
          controls={false}
          playing={isPlaying}
          loop={true}
          onProgress={(progress) =>
            setPlayed(() => (progress.playedSeconds / duration) * 100)
          }
          onDuration={(duration) => setDuration(() => duration)}
          config={{
            playerVars: {
              height: "144px",
              width: "256px",
              vq: "small",
            },
          }}
        />
      </div>
      {isPlaying ? (
        <div className="progress-bar-container">
          <ProgressBar
            borderRadius="0 24px 24px 0"
            height="8px"
            bgColor="#11496c"
            className="progress-bar"
            completed={played}
            customLabel=" "
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
