let numberTweet = 32;

const pathNumber = document.querySelector('.shares__now')
const pathNumberBefore = document.querySelector('.shares__before')

//remplir les champs par défaut
pathNumberBefore.innerHTML= numberTweet + 1
pathNumber.innerHTML= numberTweet


//CLICK
// let btn = document.querySelector('.btn')
// btn.addEventListener('click', (e)=>{
//
//   pathNumber.classList.add('shares__now--animate')
//   pathNumberBefore.classList.add('shares__before--animate')
// });


//ANIMATION END
pathNumber.addEventListener('animationend', (e)=>{
  pathNumber.innerHTML= numberTweet + 1
  pathNumberBefore.innerHTML= numberTweet + 2
  numberTweet++

  pathNumber.classList.remove('shares__now--animate')
  pathNumberBefore.classList.remove('shares__before--animate')
});








//UNIT PER UNIT - BETA - NO FINISH


// let numberTweet = 24;
// let numberTweetBefore = numberTweet++
// let unitNumber;
// let decadeNumber;
// //let hundredNumber;
//
// let unitNumberBefore;
// let decadeNumberBefore;
// //let hundredNumberBefore;
//
// numberUnit(numberTweet, numberTweetBefore)
//
//
// //afficher les nombre de base NOW
// const unitNow = document.querySelector('.shares__unit')
// const decadeNow = document.querySelector('.shares__decade')
//
// unitNow.innerHTML = unitNumber
// decadeNow.innerHTML = decadeNumber
//
// //nombre BEFORE
// const unitBefore = document.querySelector('.shares__unitBefore')
// const decadeBefore = document.querySelector('.shares__decadeBefore')
//
// unitBefore.innerHTML = unitNumberBefore
// decadeBefore.innerHTML = decadeNumber
//
//
//
// //BTN
// let btn = document.querySelector('.btn')
// btn.addEventListener('click', (e)=>{
//   unitNow.classList.add('shares__unit--animate')
//   unitBefore.classList.add('shares__unitBefore--animate')
// });
//
//
// //ANIMATION END
// unitNow.addEventListener('animationend', (e)=>{
//   unitNow.classList.remove('shares__unit--animate')
// });
//
//
// function numberUnit(number, numberBefore){
//   let numberString = number.toString()
//   let numberStringBefore = numberBefore.toString()
//
//   let numberLength = numberString.length
//
//   unitNumber = numberString[numberLength - 1]
//   decadeNumber = numberString[numberLength - 2]
//   //hundred = numberString[numberLength - 3]
//
//   unitNumberBefore = numberStringBefore[numberLength - 1]
//   decadeNumberBefore = numberStringBefore[numberLength - 2]
//   //hundredBefore = numberStringBefore[numberLength - 3]
// }


//HTML
// <!--  UNIT PER UNIT - BETA - NO FINISH
//
// <p class="shares">
//   <ul class="shares__content">
//     <li class="shares__el">
//       <span class="shares__decadeBefore"></span>
//       <span class="shares__unitBefore"></span>
//     </li>
//     <li class="shares__el">
//       <span class="shares__decade"></span>
//       <span class="shares__unit"></span>
//     </li>
//   </ul>
//   <span class="shares__block">tweets</span>
//   aujourd'hui
// </p> -->
