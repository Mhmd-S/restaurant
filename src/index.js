import './style.css';
import {showTab1} from './tab1.js';
import {showTab2} from './tab2.js';
import {showTab3} from './tab3.js';

const showHeader = () => {
    const contentDiv = document.getElementById('content')

    const navIt = document.createElement('ul');
    const liA = document.createElement('li');
    const liB = document.createElement('li');
    const liC = document.createElement('li');

    navIt.setAttribute('id','navi');
    
    liA.classList.add('navItem')
    liB.classList.add('navItem')
    liC.classList.add('navItem')

    liA.innerHTML = "Home";
    liB.innerHTML = "Menu";
    liC.innerHTML = "Contact";


    liA.addEventListener('click', showTab3);
    liB.addEventListener('click', showTab1);
    liC.addEventListener('click', showTab2);

    contentDiv.before(navIt);
    navIt.appendChild(liA);
    navIt.appendChild(liB);
    navIt.appendChild(liC);
}


showHeader();
document.addEventListener('DOMContentLoaded', showTab3);