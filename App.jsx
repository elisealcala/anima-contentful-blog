import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X1440pxHomepagelight2 from "./components/X1440pxHomepagelight2";
import { useArticles } from "./services/use-articles";

const footerData = {
  divider:
    "https://anima-uploads.s3.amazonaws.com/projects/62d6f3847c1e70ac9541ac14/releases/62d6f471b1ad02a2aa70027d/img/divider-87@1x.png",
  blogs: "Blogs",
  place: "Contact",
  quickLinks: "Quick Links",
  followOnProps: {
    socialsProps: {
      group5367:
        "https://anima-uploads.s3.amazonaws.com/projects/62d6f3847c1e70ac9541ac14/releases/62d6f471b1ad02a2aa70027d/img/group-5367-1@2x.png",
    },
  },
};

function App() {
  const { articles } = useArticles();

  return (
    <Router>
      <Switch>
        <Route path="/:path(|x1440px-homepage-light-all-breakpoints)">
          <X1440pxHomepagelight2 footerData={footerData} articles={articles} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
