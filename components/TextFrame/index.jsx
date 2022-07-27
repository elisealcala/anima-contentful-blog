import React from "react";
import "./TextFrame.css";

function TextFrame({ title, description }) {
  return (
    <div className="text-1">
      <div className="lorem-ipsum-dolor-si epilogue-medium-heavy-metal-24px">
        {title}
      </div>
      <div className="text-1">
        <p className="ut-enim-ad-minim-ven epilogue-normal-heavy-metal-16px">
          {description}
        </p>
      </div>
    </div>
  );
}

export default TextFrame;
