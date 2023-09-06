let score=0;
let scoreHTML= document.getElementsById('score');
function increase(){
    score =score +1 ;
    scoreHTML.innerHTML= score;
};

function welcome(){
    let name = prompt('enter your name');
    document.getElementById('tittle').innerText = `Welcome ${name} to COOOKIEE CLICKEEERRR!!!!`;

};
welcome();
