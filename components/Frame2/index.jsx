import React from "react";
import Chip3 from "../Chip3";
import Frame1 from "../Frame1";
import "./Frame2.css";

function Frame2() {
  return (
    <div className="frame-4">
      <Chip3 />
      <div className="frame-5 epilogue-normal-heavy-metal-16px">
        <div className="frame-6">
          <div className="full-name valign-text-middle">Full name</div>
          <img
            className="divider-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/62d6f3847c1e70ac9541ac14/releases/62d6f471b1ad02a2aa70027d/img/divider-3@2x.png"
          />
          <div className="job-title valign-text-middle">Job title</div>
          <img
            className="divider-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/62d6f3847c1e70ac9541ac14/releases/62d6f471b1ad02a2aa70027d/img/divider-3@2x.png"
          />
          <Frame1 />
        </div>
        <div className="date valign-text-middle">May 24,2022</div>
      </div>
    </div>
  );
}

export default Frame2;
