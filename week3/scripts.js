document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('nav');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      // Toggle X animation on button
      menuBtn.classList.toggle('change');
      
      // Toggle menu visibility
      nav.classList.toggle('hide');
    });
  }
});