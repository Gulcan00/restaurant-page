import { home } from "./home";

const contentDiv = document.getElementById('content');
const homeElement = home();
contentDiv.appendChild(homeElement);