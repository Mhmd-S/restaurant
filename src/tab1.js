// Menu Tab
import './menu.css';

function showTab1(){
    // ---------- ELEMENT ASSIGNMENT SECTION (START)-------------
    // Assign an id for the main content section
    const divContent = document.getElementById('content');

    // ---------- ELEMENT ASSIGNMENT SECTION (END)-------------


    // ---------- ELEMENT CREATION SECTION (START)------------------
    // Left and right section of the menu
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');

    // Left section top and bottom
    const div1Min1 = document.createElement('div');
    const div1Min2 = document.createElement('div');

    // Right section top and bottom
    const div2Min1 = document.createElement('div');
    const div2Min2 = document.createElement('div');
    
    // ---------- ELEMENT CREATION SECTION (END)------------------

    // ---------- APPEND SECTION (START) ---------------
    // Appending two divs to the main section forming the left and right side.
    divContent.appendChild(div1);
    divContent.appendChild(div2);

    // Appending two subsection to the right and two to the left.
    // Right section
    div1.appendChild(div1Min1);
    div1.appendChild(div1Min2);

    // Left section
    div2.appendChild(div2Min1);
    div2.appendChild(div2Min2);

    // ---------- APPEND SECTION (END) ---------------

};