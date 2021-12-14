// Menu Tab
import './menu.css';

function showTab1(){
    // ---------- ELEMENT TO SCRIPT ASSIGNMENT SECTION (START)-------------
    // Assign an id for the main content section
    const divContent = document.getElementById('content');
    // ---------- ELEMENT ASSIGNMENT SECTION (END)-------------

    // ---------- ELEMENT CREATION SECTION (START)------------------
    // Div the houses all the elements
    const mainContainer = document.createElement('div');
    // Title creation
    const titleM = document.createElement('h1');
    const titleSub = document.createElement('h2');

    // Header creation
    const navIt = document.createElement('ul');
    const liA = document.createElement('li');
    const liB = document.createElement('li');
    const liC = document.createElement('li');

    // A vertical seperator
    const verticalSep = document.createElement('div');
    // two horizontal seperators
    const horiSep1 = document.createElement('div')
    const horiSep2 = document.createElement('div')

    // div that that will house the left and right div
    const mainDiv = document.createElement('div');
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

    // ---------- ELEMENT INNERTEXT/HTML SECTION (START) ----------------
    titleM.innerText = "SARAW";
    titleSub.innerText = "DINE-IN MENU";
    liA.innerHTML = "Home";
    liB.innerHTML = "Menu";
    liC.innerHTML = "Contact";
    div1Min1.innerHTML = "<h2>Main Dishes</h2><h3>Lorem</h3> lorem lorem lorem loreml orem lorem lorem lorem lorem<h3>Lorem</h3> lorem lorem lorem loreml orem lorem lorem lorem lorem<h3>Lorem</h3> lorem lorem lorem loreml orem lorem lorem lorem lorem<h3>Lorem</h3> lorem lorem lorem loreml orem lorem lorem lorem lorem"
    div1Min2.innerHTML = "<h2>Side Dishes</h2><h3>Lorem</h3> lorem lorem lorem loreml orem lorem lorem lorem lorem<h3>Lorem</h3> lorem lorem lorem loreml orem lorem lorem lorem lorem<h3>Lorem</h3> lorem lorem lorem loreml orem lorem lorem lorem lorem<h3>Lorem</h3> lorem lorem lorem loreml orem lorem lorem lorem lorem<h3>Lorem</h3> lorem lorem lorem loreml orem lorem lorem lorem lorem"
    div2Min1.innerHTML = "<h2>Appetisers</h2><h3>Lorem</h3> lorem lorem lorem loreml orem lorem lorem lorem lorem<h3>Lorem</h3> lorem lorem lorem loreml orem lorem lorem lorem lorem<h3>Lorem</h3> lorem lorem lorem loreml orem lorem lorem lorem lorem<h3>Lorem</h3> lorem lorem lorem loreml orem lorem lorem lorem lorem<h3>Lorem</h3> lorem lorem lorem loreml orem lorem lorem lorem lorem"
    div2Min2.innerHTML = "<h2>Drinks</h2><h3>Lorem</h3> lorem lorem lorem loreml orem lorem lorem lorem lorem<h3>Lorem</h3> lorem lorem lorem loreml orem lorem lorem lorem lorem<h3>Lorem</h3> lorem lorem lorem loreml orem lorem lorem lorem lorem<h3>Lorem</h3> lorem lorem lorem loreml orem lorem lorem lorem lorem<h3>Lorem</h3> lorem lorem lorem loreml orem lorem lorem lorem lorem"
    // ---------- ELEMENT INNERTEXT/HTML SECTION (END) ----------------

    // ---------- SCRIPT TO ELEMENT ASSIGNMENT (START) ---------------
    mainContainer.setAttribute('id', 'mainContainer');
    verticalSep.setAttribute('id', 'verticalSep');
    titleSub.setAttribute('id', 'titleSub');
    titleM.setAttribute('id', 'titleM');
    navIt.setAttribute('id','navi');
    mainDiv.setAttribute('id', 'mainDiv');
    div1.setAttribute('id', 'div1');
    div2.setAttribute('id', 'div2');
    div1.classList.add('subMain');
    div2.classList.add('subMain');
    liA.classList.add('navItem');
    liB.classList.add('navItem');
    liC.classList.add('navItem');
    horiSep1.classList.add('horiSep');
    horiSep2.classList.add('horiSep');
    div1Min1.classList.add('miniDiv')
    div1Min2.classList.add('miniDiv')
    div2Min1.classList.add('miniDiv')
    div2Min2.classList.add('miniDiv')
    
    // ---------- SCRIPT TO ELEMENT ASSIGNMENT (END) -----------------


    // ---------- APPEND SECTION (START) ---------------
    document.body.appendChild(mainContainer);
    mainContainer.appendChild(navIt);
    mainContainer.appendChild(divContent);
    
    // Append the list items to the list itself
    navIt.appendChild(liA);
    navIt.appendChild(liB);
    navIt.appendChild(liC);

    // Append title to the content section
    divContent.appendChild(titleM);
    divContent.appendChild(titleSub);
    // append mainDiv to its parent content
    divContent.appendChild(mainDiv)

    // Appending two divs to the main section forming the left and right side.
    mainDiv.appendChild(div1);
    mainDiv.appendChild(verticalSep);
    mainDiv.appendChild(div2);

    // Appending two subsection to the right and two to the left.
    // Right section
    div1.appendChild(div1Min1);
    div1.appendChild(horiSep1);
    div1.appendChild(div1Min2);

    // Left section
    div2.appendChild(div2Min1);
    div2.appendChild(horiSep2);
    div2.appendChild(div2Min2);

    // ---------- APPEND SECTION (END) ---------------

};

showTab1();