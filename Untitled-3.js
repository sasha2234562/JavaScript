
const images = [
  'crab.png',
  'dog.png',
  'frog.png',
  'giraffe.png',
  'mouse.png',
  'pinguin.png',
  'ryno.png',
  'seastar.png',
  'snake.png',
  'worm.png',
]
const one = document.querySelector('.one');
const img = document.querySelector('.img');
const input = document.querySelector('.input');
input.value = 0;
img = img + images[0];




const buttonTwo = document.querySelector('.buttonTwo');

document.addEventListener('click', (event) =>{
  if(event.target.closest('.button')){
  buttonTwo.style.display = "block";
}
  else if(!event.target.closest('.button')){
    buttonTwo.style.display = "none"
  }
})

const inpurButton = document.querySelector('.inpurButton');
const buttonTreeA = document.querySelector('.buttonTreeA');

document.addEventListener('click', dasha)

function dasha (event) {
  if(event.target.closest('.inpurButton')){
  buttonTreeA.style.display = "block";
}
else if(!event.target.closest('.inpurButton')){
 buttonTreeA.style.display = "none";
}}


let mashka = 'hello, hi, mahai';
let dashka = mashka.split(',');
console.log(dashka);


const clients = [
  {"Petrov" : "user", "debt" : 42},
  {"Ivanov" : "user", "debt"  : 113},
  {"Sidorov" : "user", "debt"  : 5},
  {"Begynec" : "user", "debt"  : 74},
  {"Kalitsenya" : "user", "debt"  : 0},
];

let debts = clients.filter(item => (item.debt >= 5)).sort((a,b) =>(b.debt - a.debt));

const text = document.querySelector('.text');
const inputButton = document.querySelector('.inputButton')
const divInput = document.querySelector('.divInput')
document.addEventListener('click', textInput )

function textInput (event){
  if(event.target.closest('.inputButton')){
    
    divInput.innerHTML = `<img src="./images/snake.png" type="png">`;

    //divInput.innerHTML = text.value;

  } else if (!event.target.closest('.inputButton')){
    divInput.innerHTML = text.value
  }
    }

  
    const button = document.querySelector('.button');

    const form = document.querySelector('#form');

    document.addEventListener('click', sasha)
    function sasha(event){
      if(event.target.closest('button')){
         if(form.elements.inputOne.value.length < 4){
        console.log('sasha')}
      }
      event.preventDefault();
    }
     
    