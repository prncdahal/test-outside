gsap.registerPlugin(ScrollTrigger);

// Global variable declaration


function initNavigation(){
    const mainNavLinks = gsap.utils.toArray('.main-nav a');
    const mainNavLinksRev = mainNavLinks.reverse();

    function navAnimation(direction){
        const scrollingDown = direction === 1;
        const links = scrollingDown ? mainNavLinks:mainNavLinksRev;
        return gsap.to(links,
            { 
              duration:0.3, 
              stagger:0.3, 
              autoAlpha:()=> scrollingDown? 0: 1, 
              y: ()=> scrollingDown ? 20: 0,
              ease: 'Power4.out'
             });
    }

    ScrollTrigger.create({
        start: 100,
        end: 'botom bottom-=120',
        toggleClass:{
            targets:'body',
            className:'has-scrolled'
        },
        onEnter: ({direction})=> navAnimation(direction),
        onLeaveBack:({direction}) => navAnimation(direction),
        // markers:true
    });

}


// Animate banner
function animateBanner(){
   const tl= gsap.timeline();
    tl
     .to(".header",0.1,{autoAlpha:1})
    .to(".bg-overlay",{duration:0.7,css: {width: "100%"}})
    .from(".logo",{duration:0.5,autoAlpha:0,y:-40, ease:"Power4.out"})
    .from(".main-nav",{duration:0.5,autoAlpha:0,x:100, ease:"Power4.out"})
    .from([".home .billboard h1"],{ duration:0.5, x:-70, autoAlpha:0 })
    .from(".home .billboard .lead",{ y:-70, autoAlpha:0, })
    .from(".home .billboard  .button1",{ x:-70, autoAlpha:0, })
    .from(" .decor__circle",{ x:70, autoAlpha:0, })
     
}


const select = (e) => document.querySelector(e);
function initHeaderTilt() {

    select('header').addEventListener('mousemove', moveImages);

}

function moveImages(e){
    
    const { offsetX, offsetY, target } = e;
    const { clientWidth, clientHeight } = target;

    // console.log(offsetX, offsetY, clientWidth, clientHeight);
    // get 0 0 in the center
    const xPos = (offsetX/clientWidth) - 0.5;
    const yPos = (offsetY/clientHeight) - 0.5;



    
  


    gsap.to('.decor__circle', {
        duration: 1.7, 
        x:100*xPos, 
        y:120*yPos, 
        ease:'power4.out'
    });

}


function init(){
    animateBanner();
    initNavigation();
    initHeaderTilt();

}
// project scroll animation

window.addEventListener('load', function(){
    init();
});

let tl=gsap.timeline();

gsap.set(".project-list .details", { yPercent: 5});
gsap.set(".project-list .media-img", { yPercent: -10});

tl.to(".project-list .details",{
    yPercent:-5,
    ease: "none",
   scrollTrigger:{
       trigger:".project-list .row",
       
       scrub:1,
   },
   duration:0.5
}).to(".project-list .media-img",{
    yPercent:10,
    ease: "none",
   scrollTrigger:{
       trigger:".project-list .row",
       scrub:1,
   },
   duration:0.2
});

gsap.from(".fadetoText",{
    scrollTrigger:{
        trigger:'.fadetoText',
       start:"-200px center",
       end: "+=400",

        scrub:1,
        
    },
    autoAlpha:0,
    x:-20,
    duration:0.2
 })


