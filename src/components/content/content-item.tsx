import { apiResponse, music } from "../../types/types";
import trash from "../../assets/trash.svg";
import { ApiHelper } from "../../App";
import Helpers from "../../helpers";
import { useState } from "react";
import { MiniLoader } from "../misc/loader";

interface _props {
  music: music;
  deleteMe: (id: number) => void;
}

export default function ContentItem({ music, deleteMe }: _props) {
  const [deleting, setDeleting] = useState(false);

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

  return (
    <div className="content-item">
      <div>
        <h3>{music.title}</h3>
        <h4>{music.owner}</h4>
        <small>
          <h5>{music.link}</h5>
        </small>
      </div>
      <div className="thumb-icon">
        <img
          className="thumbnail"
          src={`https://i.ytimg.com/vi/${music.link}/mqdefault.jpg`}
          alt="thumbnail"
        />
        <div className="icon-container">
          <div
            className="bg-red icon-button"
            onClick={() => deleteMusic(music.id!)}
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
