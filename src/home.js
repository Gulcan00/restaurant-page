import Outside from './images/outside.jpg';
import Inside1 from './images/inside1.jpg';
import './style.css'

function imageCard(imgUrl, altText) {
    const card = document.createElement('div');
    card.classList.add('img-card');

    const img = document.createElement('img');
    img.src = imgUrl;
    img.alt = altText

    card.appendChild(img);

    return card;
}


export function createHome() {
    const home = document.createElement('div');
    home.classList.add('page-content');

    const imagesContainer = document.createElement('div');
    imagesContainer.classList.add('images-container');
    imagesContainer.appendChild(imageCard(Outside, 'Photo of the front of La Ratatouille'));
    imagesContainer.appendChild(imageCard(Inside1, 'Photo of inside of La Ratatouille'));

    home.appendChild(imagesContainer);

    const homepageCopy = document.createElement('div');
    homepageCopy.classList.add('textContent');
    homepageCopy.innerText = 'Bla bla come and enjoy this amazing res...';
    home.appendChild(homepageCopy);

    const contentDiv = document.getElementById('content');
    contentDiv.appendChild(home);
}
