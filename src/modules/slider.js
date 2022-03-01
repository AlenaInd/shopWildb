
import Swiper, { Autoplay, Navigation } from 'swiper';

export const slider = () => {
    const swiper = new Swiper('.slider', {

        loop: true,
        modules: [Navigation, Autoplay],
      
        // Navigation arrows
        navigation: {
          nextEl: '.slider-button-next',
          prevEl: '.slider-button-prev',
        },

      });
};