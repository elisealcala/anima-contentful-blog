import React from "react";
import Socials from "../Socials";
import "./FollowOn.css";

function FollowOn(props) {
  const { socialsProps } = props;

  return (
    <div className="follow-on">
      <div className="follow-on-1 valign-text-middle epilogue-semi-bold-heavy-metal-20px">Follow on</div>
      <Socials group5367={socialsProps.group5367} />
    </div>
  );
}

export default FollowOn;
