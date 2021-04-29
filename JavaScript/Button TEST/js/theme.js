/* ------------------------- *\
        VARIABLE
\* ------------------------- */
/*-----------
    OPEN/CLOSE TOOLS
---------- */
let buttonT = document.getElementById('b-tools');
let wrapperT = document.getElementById('t-wrapper');
let menuT = document.getElementById('t-menu');
/*-----------
    SET THEME
---------- */
/* Menu */
let navMenu = document.getElementById('navigation');
/* Button */
let buttonTB = document.getElementById('b-base');
let buttonTL = document.getElementById('b-light');
let buttonTD = document.getElementById('b-dark');
/* Theme */
let themeB = document.getElementsByClassName("t-base");
let themeL = document.getElementsByClassName("t-light");
let themeD = document.getElementsByClassName("t-dark");


/* ------------------------- *\
        LISTENER
\* ------------------------- */
/*-----------
    OPEN/CLOSE TOOLS
---------- */
buttonT.onclick = openContent;
wrapperT.onclick = closeContent;
/*-----------
    SET THEME
---------- */
buttonTB.onclick = setThemeB;
buttonTL.onclick = setThemeL;
buttonTD.onclick = setThemeD;


/* ------------------------- *\
        FUNCTION
\* ------------------------- */
/*-----------
    OPEN/CLOSE TOOLS
---------- */
function openContent(){
    wrapperT.classList.toggle('d-tools');
    menuT.classList.toggle('d-tools');
};
function closeContent(){
    wrapperT.classList.toggle('d-tools');
    menuT.classList.toggle('d-tools');
};
// function tools(){
//     oMenu.classList.toggle('tools');
//     if (oMenu.style.display === "flex"){
//         oMenu.style.display = "flex";
//     } else (cMenu){
//         bye.style.display = "none";
//     }
// };
/*-----------
    SET THEME
---------- */
/* Base */
function setThemeB(){
    navMenu.classList.add('t-base');
    navMenu.classList.remove('t-light');
    navMenu.classList.remove('t-dark');
};
/* Light */
function setThemeL(){
    navMenu.classList.add('t-light');
    navMenu.classList.remove('t-base');
    navMenu.classList.remove('t-dark');
};
/* Dark */
function setThemeD(){
    navMenu.classList.add('t-dark');
    navMenu.classList.remove('t-base');
    navMenu.classList.remove('t-light');
};


