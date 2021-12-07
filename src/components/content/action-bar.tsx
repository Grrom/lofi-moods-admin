
interface _props{
  show:boolean
}
export default function ActionBar({show}:_props) {
  return  show?(
    <div className="action-bar">
      action bar
    </div>
  ) :<span></span>;
}
