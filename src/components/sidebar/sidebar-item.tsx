interface _props{
  imagesrc: string,
  label: string,
  isSelected: boolean,
}

export default function SidebarItem({ imagesrc, label, isSelected }:_props) {
  return (
    <div className={`sidebar-item ${isSelected ? "active" : ""}`}>
      <img src={imagesrc} alt="icon" className="icon" />
      <div>{label}</div>
    </div>
  );
}
