const slider = document.querySelector('.slider-container');
const sliderItem = document.querySelector('.swiper-slide')



function mobileSlider() {
  if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
   let mySwiper = new Swiper(slider, {
      pagination: {
        el: '.swiper-pagination',
         clickable: true,
        //  type: 'bullets',
           },
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
       slideClass: '.card',
    
           
    });

    slider.dataset.mobile = 'true';
  }

  if (window.innerWidth > 768) {
    slider.dataset.mobile = 'false';
     if (slider.classList.contains('swiper-container-initialized')) {
      mySwiper.destroy();
     }
  }
}

mobileSlider()

window.addEventListener('resize', () => {
  mobileSlider();
});

function showMore() {
const sliderVisible = document.querySelector('.swiper-slide__visible')
const sliderHidden = document.querySelectorAll('.hidden')
const image = document.querySelector('.swiper-slide__visible-img')

sliderHidden.forEach((item) => {
 
  if (item.style.display === "none"){
    item.style.display = "flex"
    sliderVisible.innerHTML = "Cкрыть";
    sliderVisible.style.marginTop = '40px'
      image.style.transform = "rotate(180deg)"
  }
 else{
    item.style.display = "none";
    sliderVisible.innerHTML = "Показать все";
    image.style.transform = "rotate(0deg)"
  }
})
}
showMore()