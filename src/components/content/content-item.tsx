import { apiResponse, music, musicProps } from "../../types/types";
import trash from "../../assets/trash.svg";
import { ApiHelper } from "../../App";
import { MiniLoader } from "../misc/loader";
import Helpers from "../../helpers/helpers";
import { useState } from "react";

interface _props {
  music: music;
  deleteMe: (id: number) => void;
}

//suppres
export default function ContentItem({ music, deleteMe }: _props) {
  const [deleting, setDeleting] = useState(false);
  const [musicItem, setMusicItem] = useState(music);

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

  async function editData(id: number, column: string, value: string) {
    let updateResponse: apiResponse<any> = await ApiHelper.updateMusic(
      id,
      column,
      value
    );

    value = value.trim();

    if (musicItem[column as musicProps] === value) {
      Helpers.getById(column)!.textContent =
        musicItem[column as musicProps]!.toString();
    } else {
      if (value.length <= 0) {
        Helpers.errorAlert("Invalid input", 1000);
        Helpers.getById(column)!.textContent =
          musicItem[column as musicProps]!.toString();
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
          Helpers.getById(column)!.textContent =
            musicItem[column as musicProps]!.toString();
        }
      }
    }
  }

  return (
    <div className="content-item">
      <div>
        <h3
          id="title"
          contentEditable
          className="break-word"
          suppressContentEditableWarning
          spellCheck={false}
          onBlur={(value) => {
            editData(music.id!, "title", value.target.textContent!);
          }}
        >
          {musicItem.title}
        </h3>
        <h4
          id="owner"
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
            id="link"
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
        </div>
      </div>
    </div>
  );
}
