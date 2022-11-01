const toggleButton = document.querySelector(".toggle-icon");

toggleButton.addEventListener("click", () => {
  const navBody = document.querySelector("nav");

  navBody.classList.toggle("active");
});
