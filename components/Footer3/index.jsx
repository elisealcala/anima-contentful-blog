import React from "react";
import Logo from "../Logo";
import LightDarkMode from "../LightDarkMode";
import SuscribeForNewsletter from "../SuscribeForNewsletter";
import FollowOn from "../FollowOn";
import "./Footer3.css";

function Footer3(props) {
  const { divider, blogs, place, quickLinks, followOnProps } = props;

  return (
    <div className="footer">
      <img className="divider-2" src={divider} />
      <div className="group">
        <div className="flex-col">
          <Logo />
          <div className="list">
            <div className="blogs">
              <div className="blogs-1 valign-text-middle epilogue-semi-bold-heavy-metal-20px">{blogs}</div>
            </div>
            <div className="contact">
              <div className="place valign-text-middle epilogue-semi-bold-heavy-metal-20px">{place}</div>
            </div>
            <div className="quick-links">
              <div className="quick-links-1 valign-text-middle epilogue-semi-bold-heavy-metal-20px">{quickLinks}</div>
            </div>
          </div>
          <LightDarkMode />
        </div>
        <div className="flex-col-1">
          <SuscribeForNewsletter />
          <FollowOn socialsProps={followOnProps.socialsProps} />
        </div>
      </div>
    </div>
  );
}

export default Footer3;
