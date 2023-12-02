import createAbout from "./about";
import { createHome } from "./home";
import { createMenu } from "./menu";

function createNavbar() {
    const contentDiv = document.getElementById('content');
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');

    const navDiv = document.createElement('div');
    //Home
    const homeBtn = document.createElement('button');
    homeBtn.innerText = 'Home';
    homeBtn.addEventListener('click', () => {
        const pageContent = document.querySelector('div.page-content');
        contentDiv.removeChild(pageContent);
        createHome();
    })
    navDiv.appendChild(homeBtn);

    //Menu
    const menuBtn = document.createElement('button');
    menuBtn.innerText = 'Menu';
    menuBtn.addEventListener('click', () => {
        const pageContent = document.querySelector('div.page-content');
        contentDiv.removeChild(pageContent);
        createMenu();
    })
    navDiv.appendChild(menuBtn);

    //About
    const aboutBtn = document.createElement('button');
    aboutBtn.innerText = 'About';
    aboutBtn.addEventListener('click', () => {
        const pageContent = document.querySelector('div.page-content');
        contentDiv.removeChild(pageContent);
        createAbout();
    })
    navDiv.appendChild(aboutBtn);

    navbar.appendChild(navDiv);

    contentDiv.appendChild(navbar);
}

createNavbar();
createHome();