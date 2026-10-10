const menuButton = document.querySelector(".menu-btn");
const navigation = document.querySelector(".nav");
const gallery = document.querySelector(".gallery");
const imageModal = document.querySelector(".image-modal");
const modalImage = document.querySelector(".modal-image");
const closeButton = document.querySelector(".modal-close");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") !== "true";

  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu",
  );
  menuButton.classList.toggle("is-open", isOpen);
  navigation.classList.toggle("is-open", isOpen);
});

function openImageModal(image) {
  modalImage.src = image.currentSrc || image.src;
  modalImage.alt = image.alt;
  imageModal.showModal();
  closeButton.focus();
}

gallery.addEventListener("click", (event) => {
  const image = event.target.closest("img");

  if (image) {
    openImageModal(image);
  }
});

gallery.addEventListener("keydown", (event) => {
  if (
    (event.key === "Enter" || event.key === " ") &&
    event.target.matches("img")
  ) {
    event.preventDefault();
    openImageModal(event.target);
  }
});

closeButton.addEventListener("click", () => {
  imageModal.close();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && imageModal.open) {
    imageModal.close();
  }
});

imageModal.addEventListener("click", (event) => {
  if (event.target === imageModal) {
    imageModal.close();
  }
});
