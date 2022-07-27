import React from "react";
import BlogPost6 from "../BlogPost6";
import "./Stirpe2.css";

function Stirpe2(props) {
  const { blogPost61Props, blogPost62Props } = props;

  return (
    <div className="stirpe-1">
      <BlogPost6 image={blogPost61Props.image} className={blogPost61Props.className} />
      <BlogPost6 image={blogPost62Props.image} />
    </div>
  );
}

export default Stirpe2;
