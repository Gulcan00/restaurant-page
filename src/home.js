import Outside from './images/outside.jpg';
import Inside1 from './images/inside1.jpg';
import AntonEgo from './images/Ego.jpg';
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

function createReviewSection() {
    const review = document.createElement('div');
    const profilePic = document.createElement('img');
    profilePic.src = AntonEgo;
    profilePic.alt = 'An image of food critic Anton Ego';
    profilePic.classList.add('profile-pic');
    const criticName = document.createElement('p');
    criticName.innerText = 'Anton Ego';
    review.appendChild(criticName);
    const jobTitle = document.createElement('p');
    jobTitle.innerText = 'Food Critic';
    review.appendChild(jobTitle);

    review.appendChild(profilePic);

    const reviewText = document.createElement('p');
    reviewText.innerText = "In the realm of culinary arts, La Ratatouille stands as a testament to the extraordinary. The Little Chef, Remy, has breathed new life into traditional French cuisine, creating dishes that are both familiar and innovative. The ambiance, reminiscent of a cozy Parisian café, adds to the charm. Despite initial reservations, I found myself captivated by the magic that is La Ratatouille.";

    review.appendChild(reviewText);
    return review;
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
    homepageCopy.classList.add('textContainer');
    const text = document.createElement('p');
    text.classList.add('text');
    text.style.maxWidth = '75ch';
    text.style.margin = 'auto';
    text.innerText =   `La Ratatouille: A Taste of Paris in the Heart of the City

    Embark on a culinary journey at La Ratatouille, a charming bistro nestled in the heart of Paris. Our restaurant is a testament to the belief that anyone can cook, and we strive to bring this philosophy to life with every dish we serve.

    Our menu, meticulously crafted by our very own Little Chef, Remy, is a tribute to the timeless traditions of French gastronomy. From the classic Ratatouille to the indulgent Crème Brûlée, each dish is a celebration of flavor, made with love and the freshest ingredients.
    
    At La Ratatouille, we're not just serving meals, we're creating memories. So come, join us for an unforgettable dining experience. Bon Appétit!
    `;
    homepageCopy.appendChild(text);
    home.appendChild(homepageCopy);

    home.appendChild(createReviewSection());


    const contentDiv = document.getElementById('content');
    contentDiv.appendChild(home);
}
