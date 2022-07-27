import React from "react";
import BlogPost6 from "../BlogPost6";
import "./Stirpe2.css";

function Stirpe2(props) {
  const { articles } = props;

  return (
    <div className="stirpe-1">
      {articles.map((article) => (
        <BlogPost6
          key={article.title}
          image={`https:${article.postImage.fields.file.url}`}
          className="blog-post-2"
          title={article.title}
          description={article.description}
          fullName={article.fullName}
          jobTitle={article.jobTitle}
          date={article.date}
          duration={article.duration}
          tag={article.tag}
        />
      ))}
    </div>
  );
}

export default Stirpe2;
