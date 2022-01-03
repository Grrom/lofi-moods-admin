import { apiResponse, music, musicProps, id } from "../../types/types";
import { fireBaseHelper } from "../../App";
import { MiniLoader } from "../misc/loader";
import Helpers from "../../helpers/helpers";
import { useRef, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

import trash from "../../assets/trash.svg";
import play from "../../assets/play.svg";
import pause from "../../assets/pause.svg";
import ReactPlayer from "react-player/youtube";

interface _props {
  music: music;
  deleteMe: (id: id) => void;
}

export default function ContentItem({ music, deleteMe }: _props) {
  const [deleting, setDeleting] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [buffering, setBuffering] = useState(false);

  const [musicItem, setMusicItem] = useState(music);
  const [playIcon, setPlayIcon] = useState(play);

  const [duration, setDuration] = useState(0);
  const [played, setPlayed] = useState(0);

  const reactPlayer = useRef(null);
  const progressBarContainer = useRef(null);

  async function deleteMusic() {
    Helpers.confirmDialog({
      question: "Are you sure you want to delete this music?",
      onConfirm: async () => {
        setDeleting(() => true);
        let deleteMusic: apiResponse<any> = await fireBaseHelper.deleteMusic(
          music
        );
        setDeleting(() => false);
        if (deleteMusic.success) {
          Helpers.successAlert(deleteMusic.message);
          deleteMe(musicItem.id!);
        } else {
          Helpers.errorAlert(deleteMusic.message);
        }
      },
      confirmButtonColor: "red",
    });
  }

  async function editData(id: id, key: musicProps, value: string) {
    let updateResponse: apiResponse<any> = await fireBaseHelper.updateMusic(
      musicItem,
      key,
      value
    );
    let idInDom = `${key}-${musicItem[key as musicProps]}`;

    value = value.trim();

    function fail() {
      Helpers.getById(idInDom)!.textContent =
        musicItem[key as musicProps]!.toString();
    }

    if (musicItem[key as musicProps] === value) {
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
            (newMusicItem[key as musicProps] as string) = value;
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
            className="break-word subtle-hover-grow"
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
            className="break-word subtle-hover-grow"
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
              className="break-word subtle-hover-grow"
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
            <div className="bg-red icon-button" onClick={() => deleteMusic()}>
              {deleting ? (
                <MiniLoader />
              ) : (
                <img className="icon " src={trash} alt="delete" />
              )}
            </div>
            <div
              className="bg-green icon-button"
              onClick={() =>
                buffering ? () => {} : setIsPlaying((current) => !current)
              }
            >
              {buffering ? (
                <MiniLoader />
              ) : (
                <img className="icon" src={playIcon} alt="play" />
              )}
            </div>
          </div>
        </div>
        <ReactPlayer
          ref={reactPlayer}
          onBuffer={() => setBuffering(() => true)}
          onBufferEnd={() => setBuffering(() => false)}
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
      {played > 0 ? (
        <div
          ref={progressBarContainer}
          className="progress-bar-container"
          onClick={(event) => {
            let boundingClientRect = (
              progressBarContainer.current! as HTMLElement
            ).getBoundingClientRect();

            let width = boundingClientRect.width;

            let currentLocation = event.pageX - boundingClientRect.x;

            if (!buffering) {
              (reactPlayer.current as any).seekTo(currentLocation / width);
            }
          }}
        >
          <ProgressBar
            borderRadius="0 0 24px 0"
            transitionDuration="200"
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
