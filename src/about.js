/**
 * WHo we are
 * ## Who We Are

- **Remy**: Head Chef - The mastermind behind our exquisite dishes, Remy brings passion and innovation to our kitchen.
  
- **Linguini**: Sous Chef - Linguini assists Remy in the kitchen, his enthusiasm and dedication are key to our culinary success.

- **Colette**: Chef de Partie - Colette's expertise and attention to detail ensure that every dish is prepared to perfection.

- **Gusteau**: Inspirational Guide - Although not with us in person, the spirit of the great Chef Gusteau guides us in our culinary journey, reminding us that "anyone can cook".

- **Skinner**: Restaurant Manager - Skinner ensures the smooth operation of La Ratatouille, overseeing everything from service to logistics.

- **Anton Ego**: Loyal Patron - Our harshest critic turned biggest supporter, Anton Ego's reviews have helped shape La Ratatouille into the culinary gem it is today.
 */

import Remy from './images/Remy.jpg';
import Linguini from './images/Linguini.jpg';
import Colette from './images/Colette.jpg';
import Gusteau from './images/Gusteau.jpg';

const staff = [
    {
        name: 'Remy',
        title: 'Head Chef',
        image: Remy
    },
    {
        name: 'Linguini',
        title: 'Sous Chef',
        image: Linguini
    },
    {
        name: 'Colette',
        title: 'Chef de Partie',
        image: Colette
    },
    {
        name: 'Gusteau',
        title: 'Inspirational Guide',
        image: Gusteau
    },
];


function createProfile(name, title, image) {
    const profileContainer = document.createElement('div');
    profileContainer.classList.add('profile-container');

    const profileImage = document.createElement('img');
    profileImage.classList.add('profile-pic');
    profileImage.src = image;
    profileContainer.appendChild(profileImage);

    const staffName = document.createElement('p');
    staffName.style.fontWeight = '600';
    staffName.style.margin = '0px';
    staffName.style.alignSelf = 'end';
    staffName.innerText = name;
    profileContainer.appendChild(staffName);

    const jobTitle = document.createElement('p');
    jobTitle.innerText = title;
    jobTitle.style.marginTop = '4px';
    profileContainer.appendChild(jobTitle);

    return profileContainer;
}

export default function createAbout() {
    const about = document.createElement('div');
    about.classList.add('page-content');

    const staffContainer = document.createElement('div');
    staffContainer.style.display = 'flex';
    staffContainer.style.flexDirection = 'column';
    staffContainer.style.gap = '20px';
    // staffContainer.style.backgroundColor = 'var(--ecru)';

    for (let staffMember of staff) {
        staffContainer.appendChild(createProfile(staffMember.name, staffMember.title, staffMember.image));
    }

    about.appendChild(staffContainer);

    const contentDiv = document.getElementById('content');
    contentDiv.appendChild(about);
}