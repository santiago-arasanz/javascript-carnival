  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")

let unicornBoxes = document.getElementsByClassName("inflate-an-image") 

for (let i = 0; i < unicornBoxes.length; i++) {
  unicornBoxes[i].onclick = unicornClicked
}

let firstUnicornCount, secondUnicornCount, thirdUnicornCount = 0;
//Variable that will count how many times an unicorn was clicked

function unicornClicked (e) {

let unicorn = e.target

// console.log('entro a la funcion')
// console.log("i clicked on: " + unicornBoxes)
// console.log(unicornBoxes)
// console.log(unicorn)

if (unicorn.getAttribute('src') == './images/unicorn-0.png') {
   unicorn.src = './images/unicorn-1.png'
   increaseCount()
} else {
   if (unicorn.getAttribute('src') == './images/unicorn-1.png') {
     unicorn.src = './images/unicorn-2.png'
     increaseCount()
   } else {
      if (unicorn.getAttribute('src') == './images/unicorn-2.png') {
        unicorn.src = './images/unicorn-3.png'
        increaseCount()
      } else {
          alert (`Thank you soo much to helped me ${unicorn.getAttribute('id')} `)
       }
   }
   }
}

function increaseCount(){
//function to increase the clicks for each unicorn
}