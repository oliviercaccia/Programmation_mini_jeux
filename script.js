// ESPACE DU JEUX
let gameZone = document.getElementById("gameZone");
gameZone.style.width="1000px";
gameZone.style.height="800px";
gameZone.style.backgroundColor="grey";
gameZone.style.borderRadius="10px";

// VITESSE DE DEPLACEMENT
let speed=10;


// FOND D'ÉCRAN
let fondEcran=document.getElementById('fondEcran');
fondEcran.style.width="1000px";
fondEcran.style.height="800px";
fondEcran.style.borderRadius="10px";



// !!!!!!!!!!!!!!!!!!TIMER!!!!!!!!!!!!!!!!!!!!!!!!
let timer=0;
window.setInterval(updatetime,1000);
function updatetime(){
    timer++;
}

// !!!!!!!! SQUARE PLAYER!!!!!!!!!!!!!!!!!!!!
let square = document.getElementById('square');
let positionSquareX = 0;
let positionSquareY = 0;
let squareheight = 100;
let squarewidth = 100;

square.style.borderTop = "1px solid pink";
square.style.borderRight = "1px solid yellow";
square.style.borderBottom = "1px solid green";
square.style.borderLeft = "1px solid blue";
square.style.borderRadius = "10px";

square.style.height = squareheight + "px";
square.style.width = squarewidth + "px";
square.style.backgroundColor = "black";
square.style.position = "absolute";

// SQUARE FINISH
let finish = document.getElementById('squareWins');
let positionFinishX = 1005;
let positionFinishY = 300;
let finishHeight = 200;
let finishWidth = 20;

squareWins.style.writingMode='vertical-lr';
squareWins.style.textAlign='center';
squareWins.style.color='white';

finish.style.height = finishHeight + "px";
finish.style.width = finishWidth + "px";
finish.style.backgroundColor = "blue";
finish.style.position = " absolute";
finish.style.left = positionFinishX + "px";
finish.style.top = positionFinishY + "px";
//  SQUARE ENEMI RED
let squareEnemiRed = document.getElementById('squareEnemiRed');
let positionEnemiRedX = 475;
let positionEnemiRedY = 400;
let enemiRedHeight = 150;
let enemiRedWidth = 150;


// !!!!!!!!!!!! SQUARE enemi red !!!!!!!!!!!!!!
let demonRed=document.getElementById('demonRed');
demonRed.style.width='100%';

squareEnemiRed.style.height = enemiRedHeight + "px";
squareEnemiRed.style.width = enemiRedWidth + "px";
squareEnemiRed.style.backgroundColor = "red";
squareEnemiRed.style.position = " absolute";
squareEnemiRed.style.left = positionEnemiRedX + "px";
squareEnemiRed.style.top = positionEnemiRedY + "px";

function contactEnemired(){ 

    if (!(positionSquareX + squarewidth < positionEnemiRedX || 
        positionSquareY + squareheight < positionEnemiRedY || 
        positionSquareX > positionEnemiRedX + enemiRedWidth || 
        positionSquareY > positionEnemiRedY + enemiRedHeight)) {
            window.alert('YOU LOOSE\rVotre temps es de '+timer+' s');
            document.location.reload();
  x=0;
  y=0;

    }}
//  SQUARE ENEMI YELLOW
let squareEnemiYellow = document.getElementById('squareEnemiYellow');
let demonYellow=document.getElementById('demonYellow');
demonYellow.style.width='100%';
let positionEnemiYellowX = 300;
let positionEnemiYellowY = 10;
let positionEnemiYellowMax = 650;
let enemiYellowHeight = 150;
let enemiYellowWidth = 150;
let positionMaxYellow = false;



squareEnemiYellow.style.height = enemiYellowHeight + "px";
squareEnemiYellow.style.width = enemiYellowWidth + "px";
squareEnemiYellow.style.backgroundColor = "yellow";
squareEnemiYellow.style.position = " absolute";
squareEnemiYellow.style.left = positionEnemiYellowX + "px";
squareEnemiYellow.style.top = positionEnemiYellowY + "px";


 setInterval(() => {
    
        if( positionEnemiYellowY >= positionEnemiYellowMax){
            positionMaxYellow = true;
          }
        if( positionEnemiYellowY == 10){
            positionMaxYellow = false;
        }
      
        if(positionMaxYellow == false){
            positionEnemiYellowY = positionEnemiYellowY+50;
        }else{
            positionEnemiYellowY = positionEnemiYellowY-50;
        }
        squareEnemiYellow.style.top = positionEnemiYellowY+"px";
        contactEnemiYellow();
}
, 500);

function contactEnemiYellow(){ 

    if (!(positionSquareX + squarewidth < positionEnemiYellowX || 
        positionSquareY + squareheight < positionEnemiYellowY || 
        positionSquareX > positionEnemiYellowX + enemiYellowWidth || 
        positionSquareY > positionEnemiYellowY + enemiYellowHeight)) {
            window.alert('YOU LOOSE\rVotre temps es de '+timer+' s');
            document.location.reload();
  x=0;
  y=0;

    }}
//   SQUARE ORANGE 
let squareEnemiOrange = document.getElementById('squareEnemiOrange');
let demonOrange=document.getElementById('demonOrange');
demonOrange.style.width='100%';
let positionEnemiOrangeX = 650;
let positionEnemiOrangeY = 10;
let positionEnemiOrangeMax = 650;
let enemiOrangeHeight = 150;
let enemiOrangeWidth = 150;
let positionMaxOrange = false;


squareEnemiOrange.style.height = enemiOrangeHeight + "px";
squareEnemiOrange.style.width = enemiOrangeWidth + "px";
squareEnemiOrange.style.backgroundColor = "orange";
squareEnemiOrange.style.position = " absolute";
squareEnemiOrange.style.left = positionEnemiOrangeX + "px";
squareEnemiOrange.style.top = positionEnemiOrangeY + "px";


setInterval(() => {
    
    if( positionEnemiOrangeY >= positionEnemiYellowMax){
        positionMaxOrange = true;
      }
    if( positionEnemiOrangeY == 10){
        positionMaxOrange = false;
    }
  
    if(positionMaxOrange == false){
        positionEnemiOrangeY = positionEnemiOrangeY+50;
    }else{
        positionEnemiOrangeY = positionEnemiOrangeY= 10;
    }
    squareEnemiOrange.style.top = positionEnemiOrangeY+"px";
    contactEnemiOrange();
}
, 500);

function contactEnemiOrange(){ 

if (!(positionSquareX + squarewidth < positionEnemiOrangeX || 
    positionSquareY + squareheight < positionEnemiOrangeY || 
    positionSquareX > positionEnemiOrangeX + enemiOrangeWidth || 
    positionSquareY > positionEnemiOrangeY + enemiOrangeHeight)) {
        window.alert('YOU LOOSE\rVotre temps es de '+timer+' s');
        document.location.reload();
x=0;
y=0;

}}

//  SQUARE ENEMI Purple
let squareEnemiPurple = document.getElementById('squareEnemiPurple');
let demonPurple=document.getElementById('demonPurple');
demonPurple.style.width='100%';
let positionEnemiPurpleX = 120;
let positionEnemiPurpleY = 10;
let positionEnemiPurpleMax = 650;
let positionEnemiPurpleMaxX = 1000;

let enemiPurpleHeight = 150;
let enemiPurpleWidth = 150;
let positionMaxPurple = false;
let positionMinPurple = false;



squareEnemiPurple.style.height = enemiPurpleHeight + "px";
squareEnemiPurple.style.width = enemiPurpleWidth + "px";
squareEnemiPurple.style.backgroundColor = "Purple";
squareEnemiPurple.style.position = " absolute";
squareEnemiPurple.style.left = positionEnemiPurpleX + "px";
squareEnemiPurple.style.top = positionEnemiPurpleY + "px";


 setInterval(() => {
    
        if( positionEnemiPurpleY >= positionEnemiPurpleMax){
            positionMaxPurple = true;
          }
        if( positionEnemiPurpleY == 10){
            positionMaxPurple = false;
        }
      
        if(positionMaxPurple == false){
            positionEnemiPurpleY = positionEnemiPurpleY+50;
        }else{
            positionEnemiPurpleY = positionEnemiPurpleY-50;
        }
        squareEnemiPurple.style.top = positionEnemiPurpleY+"px";
        contactEnemiPurple();
}
, 500);
setInterval(() => {
    
    if( positionEnemiPurpleX >= positionEnemiPurpleMaxX){
        positionMaxPurple = true;
      }
    if( positionEnemiPurpleX == 10){
        positionMaxPurple = false;
    }
  
    if(positionMaxPurple == false){
        positionEnemiPurpleX = positionEnemiPurpleX+50;
    }else{
        positionEnemiPurpleX = positionEnemiPurpleX-50;
    }
    squareEnemiPurple.style.left = positionEnemiPurpleX+"px";
    contactEnemiPurple();
}
, 500);

function contactEnemiPurple(){ 

    if (!(positionSquareX + squarewidth < positionEnemiPurpleX || 
        positionSquareY + squareheight < positionEnemiPurpleY || 
        positionSquareX > positionEnemiPurpleX + enemiPurpleWidth || 
        positionSquareY > positionEnemiPurpleY + enemiPurpleHeight)) {
            window.alert('YOU LOOSE\rVotre temps es de '+timer+' s');
            document.location.reload();
  x=0;
  y=0;

    }}

let arrow = document.getElementById('arrow');
let span = document.getElementById("span");

//  !!!!!!!!!!!! SQUARE ARROW!!!!!!!!!!!!!!
arrow.style.color = "red";
arrow.style.fontSize = "5rem";
arrow.style.textAlign = "center";

// move arrow
function moveRight() {
    if(positionSquareX <=900){ 
    positionSquareX = positionSquareX+speed;
    square.style.left = positionSquareX + "px";
    arrow.textContent = "→"
    console.log(square.style.left)}

}

function moveLeft() {
    if(positionSquareX >=10){ 
    positionSquareX = positionSquareX-speed;
    square.style.left = positionSquareX + "px";
    arrow.textContent = "←"
    console.log(square.style.left)}
}

function moveDown() {
    if(positionSquareY <=690){ 
    positionSquareY = positionSquareY + speed;
    square.style.top = positionSquareY + "px";
    arrow.textContent = "↓"
    console.log(square.style.top)}

}

function moveUp() {
    if(positionSquareY >=10){ 
    positionSquareY = positionSquareY - speed;
    square.style.top = positionSquareY + "px";
    arrow.textContent = "↑"
    console.log(square.style.top)}

}
function winner(){ 

    if (!(positionSquareX + squarewidth < positionFinishX || 
        positionSquareY + squareheight < positionFinishY || 
        positionSquareX > positionFinishX + finishWidth || 
        positionSquareY > positionFinishY + finishHeight)) {
            window.alert('YOU WIN\rVotre temps es de '+timer+' s');
            document.location.reload();
      x=0;
      y=0;
    }}

 
       
document.addEventListener('keydown', function (e) {
    console.log(e);
    if (e.key == "ArrowLeft") {
        moveLeft();

    } else if (e.key == "ArrowRight") {
        moveRight();

    } else if (e.key == "ArrowUp") {
        moveUp();

    } else if (e.key == 'ArrowDown') {
        moveDown();

    }
    winner();
    contactEnemired();
 
});




var x = 0;
var max = 500;
var set = null
function bouge(){
    var balle = document.getElementById("balle");
    if(x <= max) {
    x++;
    balle.style.left = x+'px';
    } else {
    clearInterval(set);
    }
}      
 
function start() {
    set = setInterval('bouge()',10);
}