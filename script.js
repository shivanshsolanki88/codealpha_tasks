const images = document.querySelectorAll('.gallery img');
const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlay-img');
const closeBtn = document.getElementById('close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;

function openOverlay(index) {
  currentIndex = index;
  overlayImg.src = images[currentIndex].src;
  overlay.style.display = 'flex';
}

images.forEach((img, index) => {
  img.addEventListener('click', () => openOverlay(index));
});

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  overlayImg.src = images[currentIndex].src;
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  overlayImg.src = images[currentIndex].src;
});
