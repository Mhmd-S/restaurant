import './contact.css';
import Map from './map1.png';


const showTab2 = () => {
    
    
    // ---------- ELEMENT TO SCRIPT ASSIGNMENT SECTION (START)-------------
    // Assign an id for the main content section
    const divContent = document.getElementById('content');
    const myMap = new Image();
    myMap.src = Map;
    // ---------- ELEMENT ASSIGNMENT SECTION (END) -----------

    // ------------ Page Cleanup function ------------------
    const removeChilds = (parent) => {
        while (parent.lastChild) {
            parent.removeChild(parent.lastChild);
        }
    };  
    // remove all child nodes
    removeChilds(divContent);

    // -----------------------------------------------


    // ---------- ELEMENT CREATION SECTION (START) ---------------
    const mainContent = document.createElement('div');
    const seperatorM = document.createElement('div');
    const titleM = document.createElement('h1');
    const contactSub = document.createElement('p');

    // ---------- ELEMENT CREATION SECTION (END) ---------------

    // ---------- innerText/Html SECTION (START) ----------------
    titleM.innerText = "Contact Us";
    seperatorM.innerText = ". . .";
    contactSub.innerHTML = "Number: 1231231231<br>Email: fakeEmail@fake.com";

    // ---------- innerText/Html SECTION (END) ------------------

    // ---------- SCRIPT TO ELEMENT ASSIGNMENT (START) --------------
    mainContent.setAttribute('id', 'mainContent');
    titleM.setAttribute('id', 'titleC');
    seperatorM.setAttribute('id', 'seperatorM');
    contactSub.setAttribute('id', 'contactSub');

    myMap.setAttribute('id', 'map');

    // ---------- SCRIPT TO ELEMENT ASSIGNMENT (END) ----------------

    // ---------- APPEND SECTION (START) ----------------
    divContent.appendChild(mainContent);
    mainContent.appendChild(titleM);
    mainContent.appendChild(seperatorM);
    mainContent.appendChild(contactSub);
    mainContent.appendChild(myMap);
    // ---------- APPEND SECTION (END) ------------------
};

export {
    showTab2
}