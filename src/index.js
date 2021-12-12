import './style.css';
import './tab1.js';
import './tab2.js';
import './tab3.js';

function showHeader(){
    const content = document.getElementById('content');
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

    // liA.addEventListener('click', tab1.js());
    // liB.addEventListener('click', tab2.js());
    // liC.addEventListener('click', tab3.js());

    content.appendChild(navIt);

    navIt.appendChild(liA);
    navIt.appendChild(liB);
    navIt.appendChild(liC);
}


showHeader();
// document.addEventListener('DOMContentLoaded', showTab1());