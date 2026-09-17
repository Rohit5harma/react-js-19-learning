import { useState } from "react";
import "./ToggleSwitch.css";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      className={`toggle-switch ${isOn ? "on" : "off"}`}
      onClick={handleToggleSwitch}
    >
      <div className="switch">
        <span className="switch-state">
          {isOn ? "ON" : "OFF"}
        </span>
      </div>
    </div>
  );
};