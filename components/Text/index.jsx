import React from "react";
import Frame2 from "../Frame2";
import TextFrame from "../TextFrame";
import "./Text.css";

function Text({ title, description, fullName, jobTitle, date, duration, tag }) {
  return (
    <div className="text-2">
      <div className="frame-8">
        <Frame2
          fullName={fullName}
          jobTitle={jobTitle}
          date={date}
          duration={duration}
          tag={tag}
        />
        <TextFrame title={title} description={description} />
      </div>
    </div>
  );
}

export default Text;
