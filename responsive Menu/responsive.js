const menuButton = document.querySelector(".menu-btn");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.classList.toggle("change");

  navigation.classList.toggle("open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
