const imageOut = document.querySelector('.image-out');
for (let key in images) {
  let img = document.createElement('img');
  img.setAttribute('data-key', key);
  img.src = 'images/' + key + '.png';
  imageOut.append(img);
}

const film = document.querySelector('.film');
const name = document.querySelector('.name');
const planet = document.querySelector('.planet');

imageOut.addEventListener('click', showInfo);
function showInfo(event) {
  const key = event.target.dataset['key'];
  if (key === undefined){
    return true;
  }
  name.textContent = images[key]['name'];
  film.textContent = images[key]['film'];
  planet.textContent = images[key]['palnet'];
  document.querySelectorAll('.image-out img').forEach(item =>
    { item.classList.remove('ackive')});

  event.target.classList.add('ackive');
}
