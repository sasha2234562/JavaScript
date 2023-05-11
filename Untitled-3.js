
const one = document.querySelector('.one')

document.addEventListener('click', fankRaione )

function fankRaione(event){
  if(event.target.closest('.spanRayon')){
   one.classList.remove('one');
  }
  else  if(!event.target.closest('.spanRayon')){
    one.classList.add('one')
   }
}

const two = document.querySelector('.two');
document.addEventListener('click', fankMetro )

function fankMetro(event){
  if(event.target.closest('.spanRayonTwo')){
   two.classList.remove('two')
  }
  else  if(!event.target.closest('.spanRayonTwo')){
    two.classList.add('two')
   }
}

const three = document.querySelector('.three');

document.addEventListener('click', function(event){
  if(event.target.closest('.spanRayonThree')){
    three.classList.remove('three');
   three.style.transition = "1s"
  }
  else if(!event.target.closest('.spanRayonThree')){
    three.classList.add('three');
  }
})

const sdorove = document.querySelector('.menu__list');


document.addEventListener('click', menu)

function menu (event){
    if(event.target.closest('.menu__button')){
        sdorove.classList.remove('_none');
        sdorove.classList.toggle('_active');
        sdorove.classList.remove('menu__list')
    }
    if(!event.target.closest('.menu__button')){
        sdorove.classList.remove('_active');
        sdorove.classList.toggle('_none');
        sdorove.classList.add('menu__list')
    }
}
