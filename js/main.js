const toggleButton = document.querySelector(".toggle-icon");

toggleButton.addEventListener("click", () => {
  const classList = document.querySelector(".nav-section").classList;

  classList.toggle("hidden");
  classList.toggle("block");
});
