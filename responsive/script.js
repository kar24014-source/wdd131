const gallery = document.querySelector('.gallery');
const modal = document.querySelector('#viewer');
const modalImage = document.querySelector('#viewer-img');
const closeBtn = document.querySelector('.close-viewer');

gallery.addEventListener('click', (e) => {

    const img = e.target.closest('img');
    if (!img) return;

    // show SAME image (no rename needed)
    modalImage.src = img.src;

    modal.showModal();
});

closeBtn.addEventListener('click', () => modal.close());

modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') modal.close();
});
