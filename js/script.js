
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide')
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');
        }
        if (slider.classList.contains('_gallery')) {
            //slider.data('lightGallery').destroy(true);
        }
    }
}
//sliders_bild_callback();
let main_slider = new Swiper('.main-slider__body', {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: true,
    speed: 800,
    loop: true,
    navigation: {
        nextEl: '.control-main-slider__arrow_next',
        prevEl: '.control-main-slider__arrow_prev',
    },
});
let lots__lot = new Swiper('.lots__lot-body', {
    observer: true,
    observeParents: true,
    slidesPerView: 3,
    spaceBetween: 0,
    autoHeight: true,
    speed: 800,
    //loop: true,
    navigation: {
        nextEl: '.control-lots__arrow_next',
        prevEl: '.control-lots__arrow_prev',
    },
    on: {
        lazyImgeReady: function () {
            ibg()
        }
    },
});

;



let user_icon = document.querySelector('.user-header__icon')
user_icon.addEventListener("click", function (e) {
  let user_menu = document.querySelector('.user-header__menu');
  user_menu.classList.toggle('_active');
});

let iconMenu = document.querySelector(".header__burger");
if (iconMenu != null) {
  let delay = 500;
  let body = document.querySelector("body");
  let menuBody = document.querySelector(".menu__body");
  iconMenu.addEventListener("click", (e) => {
    if (!body.classList.contains('_wait')) {
      //body_lock(delay);
      iconMenu.classList.toggle("active");
      menuBody.classList.toggle("active");
    }
  })
};


function menu_Close() {
  let iconMenu = document.querySelector("icon-menu");
  let menuBody = document.querySelector("menu__body");
  iconMenu.classList.remove("active");
  menuBody.classList.remove("active");
};
function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}

ibg();
