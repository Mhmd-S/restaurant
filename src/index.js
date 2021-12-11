import './style.css';


const title1 = document.createElement('h1');
const div1 = document.getElementById('content');
title1.innerHTML = "HI";
div1.appendChild(title1);
title1.classList.add('titleA');