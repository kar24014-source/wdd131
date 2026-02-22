const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

const gallery = document.querySelector('.gallery');
const modal = document.getElementById('viewer');
const modalImg = document.getElementById('viewer-img');
const closeBtn = document.querySelector('.close-viewer');


// Mobile menu toggle
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show');
});


// Open modal
gallery.addEventListener('click', (e) => {
    if (e.target.tagName !== 'IMG') return;

    modalImg.src = e.target.src;
    modal.showModal();
});


// Close methods
closeBtn.addEventListener('click', () => modal.close());

modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') modal.close();
});
