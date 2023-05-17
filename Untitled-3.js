
let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.Left').addEventListener('click', function() {
  if(offset == 768){
    offset = -256;
  }
  offset = offset + 256;
  sliderLine.style.left = -offset + 'px';
})

document.querySelector('.raite').addEventListener('click', function() {
  if(offset == 0){
    offset = 1024;
  }
  offset = offset - 256;
  sliderLine.style.left = -offset + 'px';
})
/*
const range = document.querySelector('input[type="range"]');
const number = document.querySelector('.number');
range.value = 0;
range.max = images.length - 1;

img.src = './images/' + images[0];

range.oninput = () =>{
  img.src = './images/' + images[range.value];
  number.innerHTML = range.value;
}

/*
const images = [
  'IMG_8418.jpg',
  'IMG_8424.jpg',
  'IMG_8604.jpg',
  'IMG_20201010_182811.jpg'
]
const img = document.querySelector('.img');
const raite = document.querySelector('.raite');
const left = document.querySelector('.Left');

//img.src = './images/' + images[i];
//img.src = './images' + images[0];
const imagesArr = images.length;

raite.addEventListener('click', ()=>{
  for (let i = 0; i < images.length; i++) {
    img.src = './images/' + images[i];
    
  }
  

})
*/