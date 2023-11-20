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


export function home() {
    const element = document.createElement('div');
    element.appendChild(imageCard(Outside));
    return element;
}
