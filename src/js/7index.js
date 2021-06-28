// Card slider
$('.card-slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  arrows:false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
  });


  // Loader Animation
  var animation = bodymovin.loadAnimation({
    container:document.getElementById('loader'),
    renderer:'svg',
    loop:true,
    autoplay: true,
    path: 'https://assets6.lottiefiles.com/packages/lf20_sqsvypyl.json'
  });

  setTimeout(function () {
    document.getElementById('loader').classList.add("loader-close");
 }, 2900);


 TweenMax.from('.logo', 1, {
  delay: 3.2,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut
})
 TweenMax.staggerFrom('.main-nav__link ', 1, {
  delay: 3.2,
  opacity: 0,
  x: -20,
  ease: Power4.easeInOut
}, 0.08)

TweenMax.from('.header__lead__text', 1, {
  delay: 3.3,
  x: -20,
  opacity:0
})

TweenMax.to('.header__main_img', 1, {
  delay: 3.2,
  x: 0,
  left:0,
  duration: 2.5,
  ease: "Power1.out"
 
})


gsap.registerPlugin(ScrollTrigger);
let speed = 100;

/*  SCENE 1 */
let scene1 = gsap.timeline();

ScrollTrigger.create({
    animation: scene1,
    trigger: ".header",
    ease: "none",
    start: "120 top",
    end: "75% 100%",
    scrub: 3,
   
});

// header animation 
scene1.fromTo(".header", { opacity: 1}, { opacity: 0.4,yPercent:-1}, 0.2)



// header animation 
gsap.to(".news-callout", {

  yPercent: -5,
  ease: "none",
  scrollTrigger: {
    trigger: ".news-callout",
    scrub: 1
  }, 
});



gsap.to(".media-block--1", {

  yPercent: -3,
  ease: "none",
  scrollTrigger: {
    trigger: ".media-block--1",
    scrub: 1
  }, 
});

gsap.to(".media-block--2", {

  yPercent: -3,
  ease: "none",
  scrollTrigger: {
    trigger: ".media-block--2",
    scrub: 1
  }, 
});