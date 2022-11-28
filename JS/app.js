$( document ).ready(function() {
    "Use strict"

    $(".bannerSection").ripples({
        dropRadius: 30,
        perturbance: 0.008,
        
      });
  });

  
$(document).ready(function(){
  $('.your-class').slick({
    slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  centerPadding: '60px',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
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
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 80,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


let navbarWrapper = document.querySelector(".navbar-wrapper")


window.addEventListener("scroll",()=>{
    let scrollY = window.scrollY
    console.log(scrollY);
    if(scrollY > 120){
         navbarWrapper.setAttribute("style", "background-color: #C7C8CC;");
         navLinks.setAttribute("style", "color : blue");
    }else{
        navbarWrapper.setAttribute("style", "background-color: transparent;");
        
    }
})

AOS.init();



