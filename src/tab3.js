import './style.css';
import MainPic from './mainPhoto.jpg'

const showTab3 = () => {
    
    const content = document.getElementById('content');
    const removeChilds = (parent) => {
        while (parent.lastChild) {
            parent.removeChild(parent.lastChild);
        }
    };  
    // remove all child nodes
    removeChilds(content);
    
    const myPic = new Image();
    myPic.src = MainPic;
    const mainIntro = document.createElement('div');
    const mContent = document.createElement('div');
    const sepeCon = document.createElement('div');
    const sepeCon1 = document.createElement('div');
    const descCon = document.createElement('div');
    const detailCon = document.createElement('div');
    const detailCon1 = document.createElement('div');

    mContent.setAttribute('id', 'mContent');
    mainIntro.setAttribute('id','mainIntro');
    myPic.setAttribute('id','mainPic');
    
    sepeCon.classList.add('sepeCon');
    sepeCon1.classList.add('sepeCon');
    descCon.classList.add('descCon')
    detailCon.classList.add('descCon')


    sepeCon.innerText = ". . .";
    sepeCon1.innerText = ". . .";
    mainIntro.innerText = 'Saraw Restaurant & Lounge';
    descCon.innerText = "Saraw is located in New York, and features a bright eclectic stylish decor. When the weather permits, large automatic windows overlook a blooming and spacious outdoor garden with chairs and a bar, landscaped with Mediterranean foliage. The cuisine provides a one-of-a-kind gourmet dining experience, with a seasonal menu including top-notch handcrafted and organic ingredients for exceptional flavor."
    detailCon.innerHTML = "Opening Hours: <br>Sat to Fri: 1pm to 12am";


    content.appendChild(mainIntro);
    content.appendChild(mContent);
    
    
    mContent.appendChild(myPic);
    mContent.appendChild(sepeCon);
    mContent.appendChild(descCon);
    mContent.appendChild(sepeCon1);
    mContent.appendChild(detailCon);
};

export {
    showTab3
}