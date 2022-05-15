  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!")

let squares = document.getElementsByTagName("TD")
//create an array of 'TD'

//------------------------------------------------------------//
// create mole image
let imageMole = document.createElement('img');
imageMole.src = './mole.PNG';
imageMole.id = 'mole';

//--------------------------------------------------------------//

function getRandomNumber() {
//function that return a random number between 1 and 25 

let number = Math.floor(Math.random() * squares.length);
return number;
}

//-------------------------------------------------------------//

function randomMole(){

// let randomIndex = getRandomNumber();           //changed this lines
// let randomCell = squares[randomIndex];         //to make it in one line
let randomCell = squares[getRandomNumber()];
randomCell.appendChild(imageMole);
console.log(randomCell)         //I wanted to chech the content

}

//-----------------------------------------------------------------//

function randomMoleClick(e) {

  let spot = e.target;
  let sound = new Audio();
  sound.src = 'whack-audio.wav';
  if (spot.id == 'mole') {
    spot.parentNode.removeChild(imageMole);
    randomMole();
    sound.play();
  }
}
//------------------------------------------------------------------//
for (let i = 0; i < squares.length; i++) {
  squares[i].onclick = randomMoleClick
}

//-------------------------------------------------------------------//

 randomMole();
