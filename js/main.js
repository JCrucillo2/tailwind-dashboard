const toggleButton = document.querySelector(".toggle-icon");

toggleButton.addEventListener("click", () => {
  let classList = document.querySelector("nav").classList;

  classList.toggle("hidden");
  classList.toggle("block");
});
