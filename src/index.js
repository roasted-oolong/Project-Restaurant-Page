import "./styles.css";
import { greeting } from "./greeting.js"
import { loadHomepage } from "./homepage.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

console.log(greeting)

function setupTabNavigation() {
    const content = document.getElementById('content');
    const navs = document.querySelectorAll('header nav');
    const loaders = [loadHomepage, loadMenu, loadAbout];

    navs.forEach((nav, idx) => {
        if (loaders[idx]) {
            nav.addEventListener('click', () => {
                content.innerHTML = '';
                loaders[idx]();
            });
        }
    });

    // Load default tab
    content.innerHTML = '';
    loadHomepage();
}

setupTabNavigation();