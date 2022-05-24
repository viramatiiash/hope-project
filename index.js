const menuBtn = document.getElementById('js-menu');
const headerNav = document.getElementById('js-navigation');
console.log(headerNav);

menuBtn.addEventListener("click", () => {

  menuBtn.classList.toggle("open");
  headerNav.classList.toggle('navigation--show');

});


// Pricing accordion

const accordion = (e) => {
  e.target.closest('.accordion-item').lastChild.classList.toggle('accordion-item__text--active');
  if (e.target.closest('.accordion-item').querySelector('.js-icon-toggle').classList.contains('icon-expander-1')) {
    e.target.closest('.accordion-item').querySelector('.js-icon-toggle').classList.remove('icon-expander-1');
    e.target.closest('.accordion-item').querySelector('.js-icon-toggle').classList.add('icon-expander');
    e.target.closest('.accordion-item').querySelector('.js-icon-toggle').firstChild.outerHTML = '<use xlink:href="#icon-expander"></use>';
  } else if (e.target.closest('.accordion-item').querySelector('.js-icon-toggle').classList.contains('icon-expander')) {
    e.target.closest('.accordion-item').querySelector('.js-icon-toggle').classList.remove('icon-expander');
    e.target.closest('.accordion-item').querySelector('.js-icon-toggle').classList.add('icon-expander-1');
    e.target.closest('.accordion-item').querySelector('.js-icon-toggle').firstChild.outerHTML = '<use xlink:href="#icon-expander-1"></use>';
  }
};

document.getElementById('js-dv-faq-accordion').addEventListener('click', accordion);