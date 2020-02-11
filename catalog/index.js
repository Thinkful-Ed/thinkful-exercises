import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";
import routes from "./routes/";

const pages = routes;

const configTheme = {
  textColor: "#211e1e",
  brandColor: "#211e1e",
  navBarTextColor: "#211e1e",
  sidebarColorText: "#211e1e",
  sidebarColorHeading: "#211e1e",
  pageHeadingBackground: "#000000",
  pageHeadingTextColor: "#fff",
};

ReactDOM.render(
  <Catalog title="Thinkful Exercises" theme={configTheme} pages={pages} />,
  document.getElementById("catalog")
);
