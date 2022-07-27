import React from "react";
import "./Socials.css";

function Socials(props) {
  const { group5367 } = props;

  return (
    <div className="socials">
      <div className="overlap-group-1">
        <img className="group-5367" src={group5367} />
        <a href="https://discord.com/invite/eQxkYTNxSp" target="_blank">
          <div className="discord valign-text-middle mulish-bold-sunset-orange-30px">A</div>
        </a>
        <a href="https://www.facebook.com/animaapp/" target="_blank">
          <div className="facebook valign-text-middle mulish-bold-sunset-orange-30px">A</div>
        </a>
        <a href="https://dribbble.com/animaapp" target="_blank">
          <div className="dribbble valign-text-middle mulish-bold-sunset-orange-30px">A</div>
        </a>
        <a href="https://www.instagram.com/animaapp/?hl=en" target="_blank">
          <div className="instagram valign-text-middle mulish-bold-sunset-orange-30px">A</div>
        </a>
        <a href="https://www.behance.net/Anima_design" target="_blank">
          <div className="behance valign-text-middle mulish-bold-sunset-orange-30px">A</div>
        </a>
      </div>
    </div>
  );
}

export default Socials;
