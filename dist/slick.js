"use strict";
// Para poder utilizar o método do slick sem erro tive que extender a interface do Jquery
const swiperEl = $("#mySwiper");
swiperEl.slick({ autoplay: true, slidesToShow: 3, arrows: true });
