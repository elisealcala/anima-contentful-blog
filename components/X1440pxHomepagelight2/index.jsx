import React from "react";
import TopBar2 from "../TopBar2";
import Image2 from "../Image2";
import Text62 from "../Text62";
import BlogPost6 from "../BlogPost6";
import Stirpe2 from "../Stirpe2";
import BlogPosts42 from "../BlogPosts42";
import Button3 from "../Button3";
import Footer3 from "../Footer3";
import "./X1440pxHomepagelight2.css";

function X1440pxHomepagelight2(props) {
  const { footerData, articles } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x1440px-homepage-light-all-breakpoints screen">
        <TopBar2 />
        <div className="todays-pickes">
          <div className="title epilogue-medium-heavy-metal-24px">
            Today’s pickes
          </div>
          <div className="blog-posts">
            <Stirpe2 articles={articles.slice(0, 2)} />
            <Stirpe2 articles={articles.slice(2, 4)} />
          </div>
        </div>
        <Button3 />
        <Footer3
          divider={footerData.divider}
          blogs={footerData.blogs}
          place={footerData.place}
          quickLinks={footerData.quickLinks}
          followOnProps={footerData.followOnProps}
        />
      </div>
    </div>
  );
}

export default X1440pxHomepagelight2;
