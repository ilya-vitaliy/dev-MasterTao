const selects = document.querySelectorAll('select');
selects.forEach((item) => NiceSelect.bind(item));

const btnBurger = document.querySelector('.hamburger');
btnBurger.addEventListener('click', () => btnBurger.classList.toggle('is-active'));

const swiperBanner = new Swiper('.swiper-banner', {
  loop: true,
  speed: 1600,

  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  resistanceRatio: 0.8,
  freeMode: false,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
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

document.querySelectorAll('.template-carousel').forEach((carouselEl, index) => {
  const swiper = new Swiper(carouselEl.querySelector('.swiper'), {
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,

    navigation: {
      nextEl: carouselEl.querySelector('.swiper-button-next'),
      prevEl: carouselEl.querySelector('.swiper-button-prev'),
    },

    pagination: {
      el: carouselEl.querySelector('.swiper-pagination'),
      clickable: true,
    },

    breakpoints: {
      830: {
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
          enabled: false,
          el: carouselEl.querySelector('.swiper-pagination'),
        },
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          enabled: false,
          el: carouselEl.querySelector('.swiper-pagination'),
        },
      },
    },
  });
});

document.querySelectorAll('.accordion-item').forEach((item) => {
  item.addEventListener('show.bs.collapse', () => {
    item.classList.add('active');
  });
  item.addEventListener('hide.bs.collapse', () => {
    item.classList.remove('active');
  });
});
