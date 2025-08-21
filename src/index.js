import "./styles.css";
import { greeting } from "./greeting.js"
import { loadHomepage } from "./homepage.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

console.log(greeting)
loadHomepage();
loadMenu();
loadAbout();