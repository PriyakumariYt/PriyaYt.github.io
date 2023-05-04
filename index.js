
//<!-- MOBILE Toggle -->
let Menubtn = document.getElementById("Menubtn");
Menubtn.addEventListener("click", function (e) {
  document.querySelector("body").classList.toggle("mobile-nav-active");
  this.classList.toggle("fa-times");
});

 // toggle theme
let themeToggle = document.getElementById("theme-toggler");
themeToggle.addEventListener("click", function (el) {
  document.querySelector("body").classList.toggle("active");
  this.classList.toggle("fa-sun");
});


