import React from "react";

import "./../css/header.css";
import "./../css/Apps.css";
import "./../css/footer.css";

import Header from "./Header";

import BlogList from "./BlogList";
import Footer from "./Footer"

function Appjs() {
  return (
    <div id="wrapper">
      <Header className="Header" />

      <BlogList className="Bloglist" />
      <hr id="lasthr" />
      <Footer className="Footer" />
    </div>
  );
}

export default BlogList;
          