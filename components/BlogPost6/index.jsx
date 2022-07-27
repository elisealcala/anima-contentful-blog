import React from "react";
import Text from "../Text";
import "./BlogPost6.css";

function BlogPost6(props) {
  const {
    image,
    className,
    title,
    description,
    fullName,
    jobTitle,
    date,
    duration,
    tag,
  } = props;

  return (
    <div className={`blog-post-1-1 ${className || ""}`}>
      <img className="image" src={image} />
      <Text
        title={title}
        description={description}
        fullName={fullName}
        jobTitle={jobTitle}
        date={date}
        duration={duration}
        tag={tag}
      />
    </div>
  );
}

export default BlogPost6;
