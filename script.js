/*
//7.30.25
let number = 0;

if(number <0){
  console.log("The number is less than 0")
}
else if(number===0){
  console.log("The number is exactly 0")
}
else{
  console.log("The number is greater than 0")
}

//Prompting user for 3 numbers
let uNum1 = parseInt(prompt("enter a number"));
let uNum2 = parseInt(prompt("enter a number"));
let uNum3 = parseInt(prompt("enter a number"));
let biggest;
let result;
//Find the biggest using conditionals
if(uNum1>=uNum2 && uNum1>=uNum3){
  biggest = uNum1;
}
else if(uNum2>=uNum1 && uNum2>=uNum3){
  biggest = uNum2;
}
else if(uNum3>=uNum1 && uNum3>uNum2){
  biggest = uNum3;
}
result = biggest + " is the largest number entered by the user."
console.log(result);
*/

// 7.31.25
/*Prompt/Activity 1
const dayNumber = new Date().getDay();
let dayName;

if(dayNumber === 0){
  dayName = "Sunday";
}
else if(dayNumber === 1){
  dayName = "Monday";
}
else if(dayNumber === 2){
  dayName = "Tuesday";
}
else if(dayNumber === 3){
  dayName = "Wedndesday"
}
else if(dayNumber === 4){
  dayName = "Thursday"
}
else if(dayNumber ===5){
  dayName = "Friday"
}
else if(dayNumber === 6){
  dayName = "Saturday";
}
else{
  dayName = "Day is undefined";
}

//Another way to do this using switch statements
switch(dayNumber){
  case 0:
    dayName === "Sunday";
    break;
  case 1:
    dayName === "Monday";
    break;
  case 2: 
    dayName === "Tuesday";
    break;
  default:
    console.log("I don't know what day it is");
}

alert("Today is " + dayName +"!");
*/
//Prompt/Activity 2
/*
let userName = prompt("Enter Name");
document.getElementById("user-name").textContent = "Welcome " + userName + " to our website";
*/

//8.5.25
function randomizeColor(){
  let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}

let randomButton = document.getElementById('random-color');
randomButton.addEventListener('click', randomizeColor);


function lightMode() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
  let button = document.getElementById('mode');
  button.textContent = "Dark Mode";
}

function darkMode() {
  document.body.style.backgroundColor = 'black';
  document.body.style.color = 'white';
  let button = document.getElementById('mode');
  button.textContent = "Light Mode";
}

function toggleMode(){
  let button = document.getElementById('mode');
  if(button.textContent == "Dark Mode"){
    darkMode();
  } else{
    lightMode();
  }
}

let modeButton = document.getElementById('mode');
modeButton.addEventListener('click', toggleMode);

