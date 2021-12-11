import './style.css';
import './tab1.js';
import './tab2.js';
import './tab3.js';

function showHeader(){
    const content = document.getElementById('content');
    const nav = document.createElement('div');
    const navIt = document.createElement('ul');
    
    const liA = document.createElement('li');
    const liB = document.createElement('li');
    const liC = document.createElement('li');
    
    liA.innerHTML = "Home";
    liB.innerHTML = "Menu";
    liC.innerHTML = "Contact";

    // liA.addEventListener('click', tab1.js());
    // liB.addEventListener('click', tab2.js());
    // liC.addEventListener('click', tab3.js());

    content.appendChild(nav);

    nav.appendChild(liA);
    nav.appendChild(liB);
    nav.appendChild(liC);
}

document.addEventListener('DOMContentLoaded', showTab1());