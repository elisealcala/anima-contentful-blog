import React from "react";
import Stirpe2 from "../Stirpe2";
import "./BlogPosts42.css";

function BlogPosts42(props) {
  const { stirpe21Props, stirpe22Props, stirpe23Props } = props;

  return (
    <div className="blog-posts-1">
      <Stirpe2 blogPost61Props={stirpe21Props.blogPost61Props} blogPost62Props={stirpe21Props.blogPost62Props} />
      <Stirpe2 blogPost61Props={stirpe22Props.blogPost61Props} blogPost62Props={stirpe22Props.blogPost62Props} />
      <Stirpe2 blogPost61Props={stirpe23Props.blogPost61Props} blogPost62Props={stirpe23Props.blogPost62Props} />
    </div>
  );
}

export default BlogPosts42;
