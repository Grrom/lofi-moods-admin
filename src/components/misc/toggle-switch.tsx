import "./toggle-switch.scss";

export default function ToggleSwitch() {
  return (
    <label className="switch">
      <input
        type="checkbox"
        onChange={(value) => {
        }}
      />
      <span className="slider round"></span>
    </label>
  );
}
