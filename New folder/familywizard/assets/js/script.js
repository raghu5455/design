document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("home");

  setTimeout(() => {
    preloader.style.display = "none";  
    content.classList.add("show");
  }, 2500);  
});
