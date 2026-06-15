/* ============================================
   ANNAFIU.COM — lightbox.js
   Simple image lightbox
   Usage: <img onclick="openLightbox(this.src)">
   ============================================ */

function openLightbox(src) {
  var lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.querySelector('img').src = src;
  lb.classList.add('open');
}

function closeLightbox() {
  var lb = document.getElementById('lightbox');
  if (lb) lb.classList.remove('open');
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeLightbox();
});

// close when clicking backdrop
document.addEventListener('click', function (e) {
  var lb = document.getElementById('lightbox');
  if (lb && e.target === lb) closeLightbox();
});
