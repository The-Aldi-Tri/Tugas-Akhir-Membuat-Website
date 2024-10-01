document.addEventListener("DOMContentLoaded", () => {
  const thumbnails = document.querySelectorAll(".featured-image");
  const modal = document.getElementById("modal");
  const fullImage = document.getElementById("fullImage");
  const close = document.getElementById("close");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      fullImage.src = thumbnail.src.replace("thumbnail", "full");
      modal.style.display = "block"; // Show modal
    });
  });

  close.addEventListener("click", () => {
    modal.style.display = "none"; // Hide modal on close
  });

  // Hide modal when clicking anywhere outside the image
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none"; // Hide modal
    }
  });
});
