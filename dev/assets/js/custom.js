document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('select').forEach((select) => {
    NiceSelect.bind(select);
  });

  const btnBurger = document.querySelector('.hamburger');
  if (btnBurger) {
    btnBurger.addEventListener('click', () => {
      btnBurger.classList.toggle('is-active');
    });
  }

  const header = document.querySelector('header');
  const banner = document.querySelector('.swiper-banner');

  if (header && banner) {
    banner.style.setProperty('--header-height', `${header.offsetHeight}px`);
  }

  document.querySelectorAll('input[type="checkbox"]').forEach((input) => {
    const box = input.closest('.input-box');
    if (box) box.classList.add('input-box_checkbox');
  });

  document.querySelectorAll('[type="file"]').forEach((input) => {
    input.addEventListener('change', () => {
      const fileNameEl = input.closest('.input-box')?.querySelector('.file-name');
      if (fileNameEl && input.files.length) {
        fileNameEl.textContent = input.files[0].name;
      }
    });
  });

  const bannerSwiper = new Swiper('.swiper-banner', {
    loop: true,
    speed: 800,
    slidesPerView: 1,
    roundLengths: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  function toggleAutoplay() {
    if (window.innerWidth >= 992) {
      bannerSwiper.params.autoplay = {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      };
      bannerSwiper.autoplay.start();
    } else {
      if (bannerSwiper.autoplay.running) {
        bannerSwiper.autoplay.stop();
      }
    }
  }

  toggleAutoplay();

  window.addEventListener('resize', toggleAutoplay);

  const advantagesSlides = document.querySelectorAll('.advantages .swiper-slide').length;

  new Swiper('#advantages', {
    spaceBetween: 12,
    loop: true,
    slidesPerView: 1,
    roundLengths: true,
    simulateTouch: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      992: {
        spaceBetween: 0,
        slidesPerView: 'auto',
        slidesPerGroup: advantagesSlides,
        loop: false,
        simulateTouch: false,
        pagination: {
          enabled: false,
        },
      },
    },
  });

  document.querySelectorAll('.template-carousel').forEach((carousel) => {
    new Swiper(carousel.querySelector('.swiper'), {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 30,
      roundLengths: true,

      navigation: {
        nextEl: carousel.querySelector('.swiper-button-next'),
        prevEl: carousel.querySelector('.swiper-button-prev'),
      },

      pagination: {
        el: carousel.querySelector('.swiper-pagination'),
        clickable: true,
      },

      breakpoints: {
        830: {
          slidesPerView: 2,
          pagination: { enabled: false },
        },
        1400: {
          slidesPerView: 3,
          pagination: { enabled: false },
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
});
