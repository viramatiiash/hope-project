const menuBtn = document.getElementById('js-menu');
const headerNav = document.getElementById('js-navigation');
console.log(headerNav);

menuBtn.addEventListener("click", () => {

  menuBtn.classList.toggle("open");
  headerNav.classList.toggle('navigation--show');

});
