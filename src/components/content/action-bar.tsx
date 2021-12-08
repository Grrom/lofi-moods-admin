import { useState } from "react";
import { MiniLoader } from "../misc/loader";
import add from "../../assets/add.svg";
import Swal from "sweetalert2";
import Helpers from "../../helpers/helpers";
import { apiResponse, music } from "../../types/types";
import { ApiHelper } from "../../App";

interface _props {
  show: boolean;
  selected: string;
  addMusic: (music: music) => void;
}
export default function ActionBar({ show, selected, addMusic }: _props) {
  const [addingMusic, setAddingMusic] = useState(false);

  async function submit(music: music) {
    setAddingMusic(() => true);
    let addResponse: apiResponse<music> = await ApiHelper.addMusic(music);
    setAddingMusic(() => false);

    if (addResponse.success) {
      addMusic(addResponse.data);
      Helpers.successAlert(addResponse.message, 1000);
    } else {
      Helpers.errorAlert(addResponse.message, 1000);
    }
  }

  function addMusicDialog() {
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
        (Helpers.getById("musicOwner") as HTMLInputElement).value = link;
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
        });
      }
    });
  }

  return show ? (
    <div className="action-bar">
      <span
        className="action-button add-record"
        title="Add"
        onClick={() => {
          addMusicDialog();
        }} // setAddingMusic((current) => !current)}
      >
        {addingMusic ? (
          <MiniLoader />
        ) : (
          <img src={add} alt="add" className="icon" />
        )}
        <h4>Add </h4>
      </span>
    </div>
  ) : (
    <span></span>
  );
}
