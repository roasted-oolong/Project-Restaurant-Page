import "./styles.css";
import { greeting } from "./greeting.js"
import { loadHomepage } from "./homepage.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

console.log(greeting)

const content = document.getElementById('content');
const navs = document.querySelectorAll('header nav');

if (navs.length >= 3) {
  navs[0].addEventListener('click', () => {
    content.innerHTML = '';
    loadHomepage();
  });
  navs[1].addEventListener('click', () => {
    content.innerHTML = '';
    loadMenu();
  });
  navs[2].addEventListener('click', () => {
    content.innerHTML = '';
    loadAbout();
  });
}

// Load default tab
content.innerHTML = '';
loadHomepage();