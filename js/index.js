document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// uporer ta mtamti shb kisuir jnne common


// image slider


// Auto slide images in "Attività Surf & Extra Surf" Section
// const slides = document.querySelectorAll('.slider');
// let currentSlide = 0;

// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         slide.style.display = i === index ? 'block' : 'none';
//     });
// }

// function nextSlide() {
//     currentSlide = (currentSlide + 1) % slides.length;
//     showSlide(currentSlide);
// }

// showSlide(currentSlide);
// setInterval(nextSlide, 3000); // Change slide every 3 seconds




// <!-- LINKING CUSTOM SCRIPT -->

        // Initialize Swiper
        const swiper = new swiper('.slider-wrapper', {
         loop: true,
         autoplay: {
         delay: 4000,
       
 },
       
       

//  to add coverflow effect run this code 
//  effect: 'coverflow',
//   coverflowEffect: {
//     rotate: 30,
//     slideShadows: false,
//   },

//  to add creative card effect run this code
// effect: 'creative',
//   creativeEffect: {
//     prev: {
//       // will set `translateZ(-400px)` on previous slides
//       translate: [0, 0, -400],
//     },
//     next: {
//       // will set `translateX(100%)` on next slides
//       translate: ['100%', 0, 0],
//     },
//   },


// to use Cube-effect run this code

// effect: 'cube',
//   cubeEffect: {
//     slideShadows: false,
//   },

// to use Fade-effect run this code
// effect: 'fade',
//   fadeEffect: {
//     crossFade: true
//   },

// to use Flip-effect run this code
// effect: 'flip',
//   flipEffect: {
//     slideShadows: false,
//   },

// to use free mode functionality run this code
// freeMode: {
//     enabled: true,
//     sticky: true,
//   },

// Object with grid parameters to enable "multirow" slider. 
// grid: {
//     rows: 2,
//   },




// Enables hash url navigation to for slides.
// Setting this parameter will make Swiper not responsive
// eta korle slider er slide gulo hash url e thakbe
// hashNavigation: {
//     replaceState: true,
//   }, 
// 

// Enables history push state where every slide will have its own url. In this parameter you have to specify main slides url like "slides" and specify every slide url using data-history attribute.
// eta use korle nicher kaj tao korte hobe
// <!-- will produce "slides/slide1" url in browser history -->
// <div class="swiper-slide" data-history="slide1"></div>
// history: {
//     replaceState: true,
//   },

// mousewheel use kore slider er slide gulo up down korbe
// mousewheel: {
//     invert: true,
//   },
// When enabled, will swipe slides only forward (one-way) regardless of swipe direction mane slider er slide gulo one way swipe korbe / left theke right e swipe kora jabena tokhn
        //   oneWayMovement:true,

// Set to true to prevent accidental unwanted clicks on links during swiping mane slider er slide gulo click korle kono problem hoi na
        //   preventClicks:true,


        // When enabled it won't allow to change slides by swiping or navigation/pagination buttons during transition mane slider er slide gulo transition korte thakle kono slide change hoi na
        // preventInteractionOnTransition: true/false,


        // Enables zooming functionality. Object with zoom parameters or boolean true to enable with default settings
//         zoom: {
//     maxRatio: 5,
//   },



// Disable / enable ability move slider by grabbing it with mouse or by touching it with finger (on touch screens) by assigning false / true to this property
// swiper.animating: true,

// swiper.isLocked: true,

          grabCursor: true,
          spaceBetween:30,



  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets:true
  },



  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

//   Responsive breakpoints
breakpoints:{
    0:{
        slidesPerView:1
    },
    768:{
        slidesPerView:2.2
    },
    1024:{
        slidesPerView:2
    }
    
    
}
});

