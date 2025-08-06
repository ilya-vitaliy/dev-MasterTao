const selects = document.querySelectorAll('select');
selects.forEach((item) => NiceSelect.bind(item));

const btnBurger = document.querySelector('.hamburger');
btnBurger.addEventListener('click', () => btnBurger.classList.toggle('is-active'));

const swiperBanner = new Swiper('.swiper-banner', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 24,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    clickable: true,
    el: '.swiper-pagination',
  },
});

const header = document.querySelector('header');
const banner = document.querySelector('.swiper-banner');
const headerHeight = header.offsetHeight;

banner.setAttribute('style', '--header-height: ' + headerHeight + 'px');

const inputCheckbox = document.querySelectorAll('input[type="checkbox"]');

inputCheckbox.forEach((item) => {
  item.closest('.input-box').classList.add('input-box_checkbox');
});

const fileInput = document.querySelectorAll('[type="file"]');

fileInput.forEach((item) => {
  item.addEventListener('change', function () {
    let fileName = item.closest('.input-box').querySelector('.file-name');
    fileName.innerHTML = item.files[0].name;
  });
});

const buttons = document.querySelectorAll('button');
console.log(buttons);

const advantagesSlideLength = document.querySelectorAll('.advantages .swiper-slide').length;

const swiperAdvantages = new Swiper('#advantages', {
  spaceBetween: 12,
  loop: true,
  simulateTouch: true,
  slidesPerView: 1,
  roundLengths: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    enabled: true,
  },

  breakpoints: {
    992: {
      spaceBetween: 0,
      slidesPerView: 'auto',
      slidesPerGroup: advantagesSlideLength,
      loop: false,
      simulateTouch: false,
      pagination: {
        enabled: false,
        el: '.swiper-pagination',
      },
    },
  },
});
