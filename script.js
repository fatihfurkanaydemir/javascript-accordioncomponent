'use strict';

const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', function (e) {
  const item = e.target.closest('.item');

  if (!item) return;

  if (item.classList.contains('active'))
    item.style = 'animation: slideb 0.5s ease 0s forwards; overflow: hidden;';
  else item.style = 'animation: slide 0.5s ease 0s forwards; overflow: hidden;';
  item.classList.toggle('active');
});
