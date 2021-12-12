import './style.css';
import './tab1.js';
import './tab2.js';
import './tab3.js';
import MainPic from './mainPhoto.jpg'

function showHeader(){
    const myPic = new Image();
    myPic.src = MainPic;
    const content = document.getElementById('content');
    const navIt = document.createElement('ul');
    const mainIntro = document.createElement('div');
    const liA = document.createElement('li');
    const liB = document.createElement('li');
    const liC = document.createElement('li');
    const mContent = document.createElement('div');

    mContent.setAttribute('id', 'mContent');
    navIt.setAttribute('id','navi');
    mainIntro.setAttribute('id','mainIntro');
    myPic.setAttribute('id','mainPic');
    
    liA.classList.add('navItem')
    liB.classList.add('navItem')
    liC.classList.add('navItem')

    mainIntro.innerText = 'Saraw Restaurant & Lounge';
    liA.innerHTML = "Home";
    liB.innerHTML = "Menu";
    liC.innerHTML = "Contact";

    // liA.addEventListener('click', tab1.js());
    // liB.addEventListener('click', tab2.js());
    // liC.addEventListener('click', tab3.js());

    content.appendChild(navIt);
    content.appendChild(mainIntro);
    content.appendChild(mContent);
    
    mContent.appendChild(myPic)

    navIt.appendChild(liA);
    navIt.appendChild(liB);
    navIt.appendChild(liC);
}


showHeader();
// document.addEventListener('DOMContentLoaded', showTab1());