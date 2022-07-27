import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X1440pxHomepagelight2 from "./components/X1440pxHomepagelight2";
import { useArticles } from "./services/use-articles";

function App() {
  const { articles } = useArticles();

  return (
    <Router>
      <Switch>
        <Route path="/:path(|x1440px-homepage-light-all-breakpoints)">
          <X1440pxHomepagelight2 {...x1440pxHomepagelight2Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const blogPost61Data = {
  image:
    "https://anima-uploads.s3.amazonaws.com/projects/62d6f3847c1e70ac9541ac14/releases/62d6f471b1ad02a2aa70027d/img/image-26@2x.png",
};

const blogPost62Data = {
  image:
    "https://anima-uploads.s3.amazonaws.com/projects/62d6f3847c1e70ac9541ac14/releases/62d6f471b1ad02a2aa70027d/img/image-27@2x.png",
  className: "",
};

const blogPost63Data = {
  image:
    "https://anima-uploads.s3.amazonaws.com/projects/62d6f3847c1e70ac9541ac14/releases/62d6f471b1ad02a2aa70027d/img/image-60@2x.png",
};

const stirpe21Data = {
  blogPost61Props: blogPost62Data,
  blogPost62Props: blogPost63Data,
};

const blogPost64Data = {
  image:
    "https://anima-uploads.s3.amazonaws.com/projects/62d6f3847c1e70ac9541ac14/releases/62d6f471b1ad02a2aa70027d/img/image-14@2x.png",
  className: "blog-post-2",
};

const blogPost65Data = {
  image:
    "https://anima-uploads.s3.amazonaws.com/projects/62d6f3847c1e70ac9541ac14/releases/62d6f471b1ad02a2aa70027d/img/image-15@2x.png",
};

const stirpe22Data = {
  blogPost61Props: blogPost64Data,
  blogPost62Props: blogPost65Data,
};

const blogPost66Data = {
  image:
    "https://anima-uploads.s3.amazonaws.com/projects/62d6f3847c1e70ac9541ac14/releases/62d6f471b1ad02a2aa70027d/img/image-16@2x.png",
  className: "",
};

const blogPost67Data = {
  image:
    "https://anima-uploads.s3.amazonaws.com/projects/62d6f3847c1e70ac9541ac14/releases/62d6f471b1ad02a2aa70027d/img/image-17@2x.png",
};

const stirpe23Data = {
  blogPost61Props: blogPost66Data,
  blogPost62Props: blogPost67Data,
};

const blogPost68Data = {
  image:
    "https://anima-uploads.s3.amazonaws.com/projects/62d6f3847c1e70ac9541ac14/releases/62d6f471b1ad02a2aa70027d/img/image-18@2x.png",
  className: "",
};

const blogPost69Data = {
  image:
    "https://anima-uploads.s3.amazonaws.com/projects/62d6f3847c1e70ac9541ac14/releases/62d6f471b1ad02a2aa70027d/img/image-19@2x.png",
};

const stirpe24Data = {
  blogPost61Props: blogPost68Data,
  blogPost62Props: blogPost69Data,
};

const blogPosts421Data = {
  stirpe21Props: stirpe22Data,
  stirpe22Props: stirpe23Data,
  stirpe23Props: stirpe24Data,
};

const blogPost610Data = {
  image:
    "https://anima-uploads.s3.amazonaws.com/projects/62d6f3847c1e70ac9541ac14/releases/62d6f471b1ad02a2aa70027d/img/image-20@2x.png",
  className: "",
};

const blogPost611Data = {
  image:
    "https://anima-uploads.s3.amazonaws.com/projects/62d6f3847c1e70ac9541ac14/releases/62d6f471b1ad02a2aa70027d/img/image-21@2x.png",
};

const stirpe25Data = {
  blogPost61Props: blogPost610Data,
  blogPost62Props: blogPost611Data,
};

const blogPost612Data = {
  image:
    "https://anima-uploads.s3.amazonaws.com/projects/62d6f3847c1e70ac9541ac14/releases/62d6f471b1ad02a2aa70027d/img/image-22@2x.png",
  className: "",
};

const blogPost613Data = {
  image:
    "https://anima-uploads.s3.amazonaws.com/projects/62d6f3847c1e70ac9541ac14/releases/62d6f471b1ad02a2aa70027d/img/image-23@2x.png",
};

const stirpe26Data = {
  blogPost61Props: blogPost612Data,
  blogPost62Props: blogPost613Data,
};

const blogPost614Data = {
  image:
    "https://anima-uploads.s3.amazonaws.com/projects/62d6f3847c1e70ac9541ac14/releases/62d6f471b1ad02a2aa70027d/img/image-24@2x.png",
  className: "",
};

const blogPost615Data = {
  image:
    "https://anima-uploads.s3.amazonaws.com/projects/62d6f3847c1e70ac9541ac14/releases/62d6f471b1ad02a2aa70027d/img/image-25@2x.png",
};

const stirpe27Data = {
  blogPost61Props: blogPost614Data,
  blogPost62Props: blogPost615Data,
};

const blogPosts422Data = {
  stirpe21Props: stirpe25Data,
  stirpe22Props: stirpe26Data,
  stirpe23Props: stirpe27Data,
};

const socialsData = {
  group5367:
    "https://anima-uploads.s3.amazonaws.com/projects/62d6f3847c1e70ac9541ac14/releases/62d6f471b1ad02a2aa70027d/img/group-5367-1@2x.png",
};

const followOnData = {
  socialsProps: socialsData,
};

const footer3Data = {
  divider:
    "https://anima-uploads.s3.amazonaws.com/projects/62d6f3847c1e70ac9541ac14/releases/62d6f471b1ad02a2aa70027d/img/divider-87@1x.png",
  blogs: "Blogs",
  place: "Contact",
  quickLinks: "Quick Links",
  followOnProps: followOnData,
};

const x1440pxHomepagelight2Data = {
  title1: "Today’s pickes",
  divider1:
    "https://anima-uploads.s3.amazonaws.com/projects/62d6f3847c1e70ac9541ac14/releases/62d6f471b1ad02a2aa70027d/img/divider-82@1x.png",
  title2: "Trending topics",
  divider2:
    "https://anima-uploads.s3.amazonaws.com/projects/62d6f3847c1e70ac9541ac14/releases/62d6f471b1ad02a2aa70027d/img/divider-82@1x.png",
  title3: "Longreads",
  blogPost6Props: blogPost61Data,
  stirpe2Props: stirpe21Data,
  blogPosts41Props: blogPosts421Data,
  blogPosts42Props: blogPosts422Data,
  footer3Props: footer3Data,
};
