import React from "react";
import Logo4 from "../Logo4";
import SearchOutlinedIcon from "../SearchOutlinedIcon";
import "./Frame5.css";

function Frame5() {
  return (
    <div className="frame">
      <Logo4 />
      <div className="frame-1">
        <div className="all">
          <div className="overlap-group">
            <div className="hover"></div>
            <div className="all-1 valign-text-middle epilogue-normal-white-18px">All</div>
          </div>
        </div>
        <div className="business">
          <div className="business-1 valign-text-middle epilogue-normal-white-18px">Business</div>
        </div>
        <div className="culture">
          <div className="culture-1 valign-text-middle epilogue-normal-white-18px">Culture</div>
        </div>
        <div className="ideas">
          <div className="ideas-1 valign-text-middle epilogue-normal-white-18px">Ideas</div>
        </div>
        <div className="science">
          <div className="science-1 valign-text-middle epilogue-normal-white-18px">Science</div>
        </div>
        <SearchOutlinedIcon />
      </div>
    </div>
  );
}

export default Frame5;
