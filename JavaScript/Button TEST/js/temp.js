/* ------------------------- *\
        FUNCTION
\* ------------------------- */
let buttonT = document.getElementById('b-tools');
let wrapperT = document.getElementById('t-wrapper');
let menuT = document.getElementById('t-menu');

let navMenu = document.getElementById('navigation');

buttonT.onclick = openContent;
wrapperT.onclick = closeContent;

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


/*------------------------------ *\
    TABLE
\*------------------------------ */

/* All theme */

// let lenom = document.getElementById(''),

let allTheme = ['base', 'light', 'dark'];

let base = document.getElementsByClassName("t-base");
let light = document.getElementsByClassName("t-light");
let dark = document.getElementsByClassName("t-dark");

for(i=0; i < allTheme.clientHeight; i++){
    navMenu[i].addEventListener('click', function(){
        const allTheme = this.querySelector('i');
        base.classList.toggle(base);
        light.classList.toggle(light);
        dark.classList.toggle(dark);
    });
}