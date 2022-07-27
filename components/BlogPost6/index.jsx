import React from "react";
import Text from "../Text";
import "./BlogPost6.css";

function BlogPost6(props) {
  const { image, className } = props;

  return (
    <div className={`blog-post-1-1 ${className || ""}`}>
      <img className="image" src={image} />
      <Text />
    </div>
  );
}

export default BlogPost6;
