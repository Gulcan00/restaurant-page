import Outside from './images/outside.jpg';
import './style.css'

function imageCard(imgUrl) {
    const card = document.createElement('div');
    card.classList.add('image-card');

    const img = document.createElement('img');
    img.src = imgUrl;
    img.alt = "test";

    card.appendChild(img);

    return card;
}


export function createHome() {
    const home = document.createElement('div');
    home.classList.add('page-content');
    home.appendChild(imageCard(Outside));
    const contentDiv = document.getElementById('content');
    contentDiv.appendChild(home);
}
