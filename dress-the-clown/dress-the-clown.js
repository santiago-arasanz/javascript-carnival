  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")

//-----------------------------------------------------------------------------//
//variables to each part of the body//
let head = document.getElementById('head');
let body = document.getElementById('body');
let shoes = document.getElementById('shoes');

let arrayIndex = [0, 0, 0];                     //array that represents body part's indexes

let indexMain = 0;                              //It is the variable that tell us what part of the body we are dressing

let imgs = [head, body, shoes];                //array that constains parts of the body variables
let strings= ["head", "body", "shoes"];        //array with strings
 
//----------------------------------------------------------------------------//
document.onkeydown = key;

function key (e) {
//function that is going to do something when we press a key
  
  switch (e.keyCode) {
     case 37:
        console.log("Left key is pressed.");
        changeItems(-1);
        break;
     case 38:
        console.log("Up key is pressed.");
        changePart(-1);
        break;
     case 39:
        console.log("Right key is pressed.");
        changeItems(1);
        break;
     case 40:
        console.log("Down key is pressed.");
        changePart(1);
        break;
  }
}

//----------------------------------------------------------------------------------------//
function changeItems(position) {
//function that is going to change image while we push arrows left or right


  let index = arrayIndex[indexMain];
  let image = imgs[indexMain];
  let string = strings[indexMain];

  index = index + position;

  if (index < 0) {
    index = 5;
  } 
  if (index > 5) {
    index = 0;
  } 

  arrayIndex[indexMain] = index;

  image.src = "./images/" + string + index + ".png";
  
}

//--------------------------------------------------------------------------//
function changePart(position) {
//This function is going to keep indexMain inside a range

  indexMain = indexMain + position;

  if (indexMain < 0) {
    indexMain = 2;
  } 
  if (indexMain > 2) {
    indexMain= 0;
  } 

}

//-----I was working in my own version, but It had 9 different functions. After a while I started to code
//-----along the video and it was a bit better, but I still have to work in my pseudo-code. With this one,
//-----was hard to get it done with my code.



