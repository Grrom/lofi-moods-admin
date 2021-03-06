import { useState } from "react";
import { MiniLoader } from "../misc/loader";
import Swal from "sweetalert2";
import Helpers from "../../helpers/helpers";
import { apiResponse, mood, music } from "../../types/types";

import add from "../../assets/add.svg";
import trash from "../../assets/trash.svg";
import { fireBaseHelper } from "../../App";
import { Timestamp } from "@firebase/firestore";

interface _props {
  show: boolean;
  selected?: mood;
  addMusic: (music: music) => void;
  deleteMoodFromState: (mood: mood) => void;
  search: (input: string) => void;
  playList: Array<music>;
}
export default function ActionBar({
  show,
  selected,
  addMusic,
  search,
  deleteMoodFromState,
}: _props) {
  const [addingMusic, setAddingMusic] = useState(false);
  const [deletingMood, setDeletingMood] = useState(false);

  async function submit(music: music) {
    setAddingMusic(() => true);
    let addResponse: apiResponse<music> = await fireBaseHelper.addMusic(music);
    setAddingMusic(() => false);

    if (addResponse.success) {
      addMusic(addResponse.data!);
      Helpers.successAlert(addResponse.message, 1000);
    } else {
      Helpers.errorAlert(addResponse.message, 1000);
    }
  }

  async function deleteMood() {
    setDeletingMood(() => true);

    let deleteMood = await fireBaseHelper.deleteMood(selected);

    if (deleteMood.success) {
      deleteMoodFromState(selected);
      Helpers.successAlert(deleteMood.message);
    } else Helpers.errorAlert(deleteMood.message);

    setDeletingMood(() => false);
  }

  function addMusicDialog() {
    //TODO: support mobile view
    Swal.fire({
      title: "Enter Details",
      html:
        '<span class="swal2-input-label">Title</span>' +
        '<input id="musicTitle" class="swal2-input">' +
        '<span class="swal2-input-label">Owner</span>' +
        '<input id="musicOwner" class="swal2-input">' +
        '<span class="swal2-input-label">link</span>' +
        '<input id="musicLink" class="swal2-input"/>' +
        '<div id="empty" class="error-text"> </div>',
      showCancelButton: true,
      preConfirm: () => {
        let title = Helpers.inputGetter("musicTitle").trim();
        let owner = Helpers.inputGetter("musicOwner").trim();
        let link = Helpers.inputGetter("musicLink").trim();

        (Helpers.getById("musicTitle") as HTMLInputElement).value = title;
        (Helpers.getById("musicOwner") as HTMLInputElement).value = owner;
        (Helpers.getById("musicLink") as HTMLInputElement).value = link;

        title = title.trim();
        owner = owner.trim();
        link = link.trim();

        let noempty = title.length > 0 && owner.length > 0 && link.length > 0;

        if (!noempty)
          Helpers.getById("empty")!.innerHTML = "Complete all fields";
        else Helpers.getById("empty")!.innerHTML = " ";

        return noempty;
      },
    }).then((value) => {
      if (value.isConfirmed) {
        submit({
          title: Helpers.inputGetter("musicTitle"),
          owner: Helpers.inputGetter("musicOwner"),
          link: Helpers.inputGetter("musicLink"),
          mood: selected,
          dateAdded: Timestamp.now(),
        });
      }
    });
  }

  return show ? (
    <div className="action-bar">
      <span className="search-bar">
        <input
          type="text"
          className="search-field"
          id="search-field"
          onChange={(event) => {
            search(event.target.value);
          }}
        />
        <div
          className="action-button"
          title="Search"
          onClick={() =>
            search(
              (document.getElementById("search-field") as HTMLInputElement)
                .value
            )
          }
        >
          <h4>Search</h4>
        </div>
      </span>
      <div className="action-button-container">
        <ActionButton
          onClick={deleteMood}
          isLoading={deletingMood}
          text="Delete Mood"
          icon={trash}
        />
        <ActionButton
          onClick={addMusicDialog}
          isLoading={addingMusic}
          text="Add"
          icon={add}
        />
      </div>
    </div>
  ) : (
    <span></span>
  );
}

interface _actionButtonProps {
  onClick: () => any;
  isLoading: boolean;
  text: string;
  icon: string;
}
function ActionButton({ onClick, isLoading, text, icon }: _actionButtonProps) {
  return (
    <span
      className="action-button"
      title={text}
      onClick={() => {
        onClick();
      }}
    >
      {isLoading ? (
        <MiniLoader />
      ) : (
        <img src={icon} alt={text} className="icon" />
      )}
      <h4>{text} </h4>
    </span>
  );
}
