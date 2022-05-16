const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

// Pricing accordion

const accordion = (e) => {
  e.target.closest('.accordion-item').lastChild.classList.toggle('accordion-item__text--active');
  if (e.target.closest('.accordion-item').querySelector('.js-icon-toggle').classList.contains('icon-plus')) {
    e.target.closest('.accordion-item').querySelector('.js-icon-toggle').classList.remove('icon-plus');
    e.target.closest('.accordion-item').querySelector('.js-icon-toggle').classList.add('icon-minus');
    e.target.closest('.accordion-item').querySelector('.js-icon-toggle').firstChild.outerHTML = '<use xlink:href="#icon-minus"></use>';
  } else if (e.target.closest('.accordion-item').querySelector('.js-icon-toggle').classList.contains('icon-minus')) {
    e.target.closest('.accordion-item').querySelector('.js-icon-toggle').classList.remove('icon-minus');
    e.target.closest('.accordion-item').querySelector('.js-icon-toggle').classList.add('icon-plus');
    e.target.closest('.accordion-item').querySelector('.js-icon-toggle').firstChild.outerHTML = '<use xlink:href="#icon-plus"></use>';
  }
};

document.getElementById('js-dv-faq-accordion').addEventListener('click', accordion);
