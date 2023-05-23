
function abc() {
  this.style.background = 'blue';
  this.style.color = 'white'
  }


//document.querySelectorAll('p').onclick = abc;

let p = document.querySelectorAll('p');
p.forEach(function (element){
  element.onclick = abc;
 
})

