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
    const sepeCon = document.createElement('div');
    const sepeCon1 = document.createElement('div');
    const descCon = document.createElement('div');
    const detailCon = document.createElement('div');
    const detailCon1 = document.createElement('div');

    mContent.setAttribute('id', 'mContent');
    navIt.setAttribute('id','navi');
    mainIntro.setAttribute('id','mainIntro');
    myPic.setAttribute('id','mainPic');
    
    liA.classList.add('navItem')
    liB.classList.add('navItem')
    liC.classList.add('navItem')
    sepeCon.classList.add('sepeCon');
    sepeCon1.classList.add('sepeCon');
    descCon.classList.add('descCon')
    detailCon.classList.add('descCon')


    sepeCon.innerText = ". . .";
    sepeCon1.innerText = ". . .";
    mainIntro.innerText = 'Saraw Restaurant & Lounge';
    liA.innerHTML = "Home";
    liB.innerHTML = "Menu";
    liC.innerHTML = "Contact";
    descCon.innerText = "Saraw is located in New York, and features a bright eclectic stylish decor. When the weather permits, large automatic windows overlook a blooming and spacious outdoor garden with chairs and a bar, landscaped with Mediterranean foliage. The cuisine provides a one-of-a-kind gourmet dining experience, with a seasonal menu including top-notch handcrafted and organic ingredients for exceptional flavor."
    detailCon.innerHTML = "Opening Hours: <br>Sat to Fri: 1pm to 12am";

    // liA.addEventListener('click', tab1.js());
    // liB.addEventListener('click', tab2.js());
    // liC.addEventListener('click', tab3.js());

    content.appendChild(navIt);
    content.appendChild(mainIntro);
    content.appendChild(mContent);
    
    
    mContent.appendChild(myPic);
    mContent.appendChild(sepeCon);
    mContent.appendChild(descCon);
    mContent.appendChild(sepeCon1);
    mContent.appendChild(detailCon);
    navIt.appendChild(liA);
    navIt.appendChild(liB);
    navIt.appendChild(liC);
}


showHeader();
// document.addEventListener('DOMContentLoaded', showTab1());