import { music } from "../../types/types";
import trash from "../../assets/trash.svg";

interface _props {
  music: music;
}

export default function ContentItem({ music }: _props) {
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
          src={`https://i.ytimg.com/vi/${music.link}/1.jpg`}
          alt="thumbnail"
        />
        <div className="icons-container">
          <div className="bg-red icon-button">
            <img className="icon " src={trash} alt="delete" />
          </div>
        </div>
      </div>
      {/* {Object.keys(music).map((k: string, index: number) => (
          <ContentDetail k={k} v={music[k as musicProps]} key={k} />
        ))} */}
      {/* <ContentDetail k="sdf" v="dfas" /> */}
    </div>
  );
}
