import { createHome } from "./home";

function createNavbar() {
    const contentDiv = document.getElementById('content');
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');

    const logo = document.createElement('h2');
    logo.innerText = 'La Ratatouille';
    navbar.appendChild(logo);

    const navDiv = document.createElement('div');
    //Home
    const homeBtn = document.createElement('button');
    homeBtn.innerText = 'Home';
    homeBtn.addEventListener('click', () => {
        const pageContent = document.querySelector('div.page-content');
        contentDiv.removeChild(pageContent);
        contentDiv.appendChild(createHome());
    })
    navDiv.appendChild(homeBtn);

     //Menu
     const menuBtn = document.createElement('button');
     menuBtn.innerText = 'Menu';
     menuBtn.addEventListener('click', () => {
         const pageContent = document.querySelector('div.page-content');
         contentDiv.removeChild(pageContent);
         //contentDiv.appendChild(createMenu());
     })

     navbar.appendChild(navDiv);

     contentDiv.appendChild(navbar);
}

createNavbar();