import FrenchSoup from './images/french-soup.png';
import Ratatouille from './images/ratatouille.png';
import TartTatin from './images/tart-tatin.png';
import WineCheese from './images/wine-cheese.png';

export function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('page-content');
    menu.style.background = `url(${FrenchSoup}) top left / 50% 50% no-repeat, 
    url(${Ratatouille}) no-repeat top right / 50% 50%, 
    url(${TartTatin}) no-repeat bottom left / 50% 50%, 
    url(${WineCheese}) no-repeat bottom right / 50% 50%`;
    const mainContent = document.createElement('div');
    mainContent.style.backgroundColor = '#fff';
    mainContent.style.padding = '0px 80px';
    mainContent.style.width = '300px';
    mainContent.style.margin = 'auto';
    mainContent.style.marginTop = '-20px';

    const appetizerContainer = document.createElement('ul');
    appetizerContainer.classList.add('food-section');
    const appetizerTitle = document.createElement('p');
    appetizerTitle.classList.add('food-section-title');
    appetizerTitle.innerText = 'Appetizer';
    appetizerContainer.appendChild(appetizerTitle);

    const appetizer1 = document.createElement('li');
    appetizer1.innerText = `Soupe à l'oignon`;
    appetizerContainer.appendChild(appetizer1);

    const appetizer2 = document.createElement('li');
    appetizer2.innerText = `Escargots de Bourgogne`;
    appetizerContainer.appendChild(appetizer2);

    const appetizer3 = document.createElement('li');
    appetizer3.innerText = `Salade Niçoise`;
    appetizerContainer.appendChild(appetizer3);

    const mainCourseContainer = document.createElement('ul');
    mainCourseContainer.classList.add('food-section');
    const mainCourseTitle = document.createElement('p');
    mainCourseTitle.classList.add('food-section-title');
    mainCourseTitle.innerText = 'Main Course';
    mainCourseContainer.appendChild(mainCourseTitle);

    const mainCourse1 = document.createElement('li');
    mainCourse1.innerText = `Ratatouille`;
    mainCourseContainer.appendChild(mainCourse1);

    const mainCourse2 = document.createElement('li');
    mainCourse2.innerText = `Coq au Vin`;
    mainCourseContainer.appendChild(mainCourse2);

    const mainCourse3 = document.createElement('li');
    mainCourse3.innerText = `Bouillabaisse`;
    mainCourseContainer.appendChild(mainCourse3);

    const dessertContainer = document.createElement('ul');
    dessertContainer.classList.add('food-section');
    const dessertTitle = document.createElement('p');
    dessertTitle.classList.add('food-section-title');
    dessertTitle.innerText = 'Dessert';
    dessertContainer.appendChild(dessertTitle);

    const dessert1 = document.createElement('li');
    dessert1.innerText = `Crème Brûlée`;
    dessertContainer.appendChild(dessert1);

    const dessert2 = document.createElement('li');
    dessert2.innerText = `Tarte Tatin`;
    dessertContainer.appendChild(dessert2);

    const dessert3 = document.createElement('li');
    dessert3.innerText = `Mousse au Chocolat`;
    dessertContainer.appendChild(dessert3);

    const drinksContainer = document.createElement('ul');
    drinksContainer.classList.add('food-section');
    const drinksTitle = document.createElement('p');
    drinksTitle.classList.add('food-section-title');
    drinksTitle.innerText = 'Drinks';
    drinksContainer.appendChild(drinksTitle);

    const drinks = document.createElement('li');
    drinks.style.maxWidth = '25ch';
    drinks.innerText = `A selection of French wines, coffee, and soft drinks.`;
    drinksContainer.appendChild(drinks);

    mainContent.appendChild(appetizerContainer);
    mainContent.appendChild(mainCourseContainer);
    mainContent.appendChild(dessertContainer);
    mainContent.appendChild(drinksContainer);
    menu.appendChild(mainContent);

    const contentDiv = document.getElementById('content');
    contentDiv.appendChild(menu);
}