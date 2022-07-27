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
  const {
    title1,
    divider1,
    title2,
    divider2,
    title3,
    blogPost6Props,
    stirpe2Props,
    blogPosts41Props,
    blogPosts42Props,
    footer3Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x1440px-homepage-light-all-breakpoints screen">
        <TopBar2 />
        <div className="todays-pickes">
          <div className="title epilogue-medium-heavy-metal-24px">{title1}</div>
          <div className="blog-posts">
            <div className="stirpe">
              <div className="blog-post">
                <Image2 />
                <Text62 />
              </div>
              <BlogPost6 image={blogPost6Props.image} />
            </div>
            <Stirpe2 blogPost61Props={stirpe2Props.blogPost61Props} blogPost62Props={stirpe2Props.blogPost62Props} />
          </div>
        </div>
        <img className="divider" src={divider1} />
        <div className="x1440px-homepage-light-all-breakpoints-item">
          <div className="title epilogue-medium-heavy-metal-24px">{title2}</div>
          <BlogPosts42
            stirpe21Props={blogPosts41Props.stirpe21Props}
            stirpe22Props={blogPosts41Props.stirpe22Props}
            stirpe23Props={blogPosts41Props.stirpe23Props}
          />
        </div>
        <img className="divider" src={divider2} />
        <div className="x1440px-homepage-light-all-breakpoints-item">
          <div className="title-1 epilogue-medium-heavy-metal-24px">{title3}</div>
          <BlogPosts42
            stirpe21Props={blogPosts42Props.stirpe21Props}
            stirpe22Props={blogPosts42Props.stirpe22Props}
            stirpe23Props={blogPosts42Props.stirpe23Props}
          />
        </div>
        <Button3 />
        <Footer3
          divider={footer3Props.divider}
          blogs={footer3Props.blogs}
          place={footer3Props.place}
          quickLinks={footer3Props.quickLinks}
          followOnProps={footer3Props.followOnProps}
        />
      </div>
    </div>
  );
}

export default X1440pxHomepagelight2;
