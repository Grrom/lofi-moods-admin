interface _props {
  imagesrc: string;
  label: string;
  isSelected: boolean;
  onClick?: () => any;
}

export default function SidebarItem({
  imagesrc,
  label,
  isSelected,
  onClick,
}: _props) {
  return (
    <div
      className={`sidebar-item ${isSelected ? "active" : ""}`}
      onClick={() => (onClick ? onClick() : () => {})}
    >
      <img src={imagesrc} alt="icon" className="icon" />
      <div className="label">{label}</div>
    </div>
  );
}
