import React from "react";
import Switch from "../Switch";
import "./LightDarkMode.css";

function LightDarkMode() {
  return (
    <div className="light-dark-mode">
      <div className="light-dark-mode-1 valign-text-middle epilogue-normal-heavy-metal-20px">Light/Dark mode</div>
      <Switch />
    </div>
  );
}

export default LightDarkMode;
