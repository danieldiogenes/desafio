function openPopup() {
  document.getElementById("popupModal").style.display = "flex";
  document.body.style.overflow = "hidden";
  document.querySelector(".popup-button").classList.add("active");
}

function closePopup() {
  document.getElementById("popupModal").style.display = "none";
  document.body.style.overflow = "auto";
  document.querySelector(".popup-button").classList.remove("active");
}

function outsideClick(event) {
  const modal = document.getElementById("popupModal");
  if (event.target === modal) {
    closePopup();
  }
}

window.addEventListener("click", outsideClick);

async function updateImage() {
  const timestamp = new Date().getTime();
  const imageUrl = `https://picsum.photos/200?random=${timestamp}`;
  document.getElementById("randomImage").src = imageUrl;
}

updateImage();
