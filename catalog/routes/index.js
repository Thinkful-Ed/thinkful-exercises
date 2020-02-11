import { Catalog, pageLoader } from "catalog";
import jsBasics from "./js-basics.routes.js";
import jsAssesmentPrep from "./js-assesment-prep.routes.js";

function Page (path, title, loader) {
  this.path = path;
  this.title = title;
  this.content = loader;
}

function Group (title, pages) {
  this.title = title;
  this.pages = pages;
}


const home =  new Page("/", "Welcome",
                       pageLoader(() => import("./../WELCOME.md")));
const basics =  new Group( "JS Basics", jsBasics.map((i) => new Page(...i)));
const assesmentPrep =  new Group( "JS Assesment Prep", jsAssesmentPrep.map((i) => new Page(...i)));

export default [home, basics, assesmentPrep];