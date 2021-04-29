/* ------------------------- *\
        VARIABLE
\* ------------------------- */
/*-----------
    TEST
---------- */
/* "Test" */
// let Test = document.getElementsByClassName('boxed');
// let Test = document.getElementById('text');
// let TableauC = ['bleu', 'vert', 'rouge'];


/* ------------------------- *\
        LISTENER
\* ------------------------- */
/*-----------
    ALL
---------- */
// text.onclick = aurevoir;


/* ------------------------- *\
        FUNCTION
\* ------------------------- */
/*-----------
    TEST
---------- */
/* "Test" */


/* ------------------------- *\
        OTHER
\* ------------------------- */
/*-----------
    HIDDE html-element
---------- */

// let call = document.getElementById("boxed");

// let bye = document.getElementById("burger");

// call.onclick = aurevoir;

// function aurevoir(){
//     if (bye.style.display === "none") {
//         bye.style.display = "flex";
//     } else {
//         bye.style.display = "none";
//     }
// };

/*-----------
    TEST v4
---------- */

// let bMessage = document.getElementById('boxed');

// let nav = document.getElementById('navigation');

// bMessage.onclick = aurevoir;

// function aurevoir(){
//     if (nav.style.display === "none"){
//         nav.style.display = "flex";
//     } else{
//         nav.style.display = "none";
//     }
// };


let bMessage = document.getElementById('boxed');

let nav = document.getElementById('navigation');

bMessage.onclick = diplaySH;

function diplaySH(){
    if (nav.style.display === "none"){
        nav.style.display = "flex";
    } else{
        nav.style.display = "none";
    }
};



let initial = document.getElementById("b-initial");

initial.onclick = reset;

function reset(){
    document.getElementById(nav).reset();
};