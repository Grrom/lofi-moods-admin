import "./content.scss";
import ActionBar from "./action-bar";
import ContentItem from "./content-item";

interface _props{
  selected: string
}

export default function Content({ selected }: _props) {

  function contentSwitch(){
    switch(selected){
      case "music":
      return (
          <div className="content-container">
            <ContentItem />
            <ContentItem />
            <ContentItem />
            <ContentItem />
          </div>
        );
        default:
          return <h3 className="content-message">None selected</h3>
    }
  }

  return (
    <div id="content">
      <ActionBar
        show={selected !== ""}
      />
      {

      contentSwitch()
      }
    </div>
  );
}
