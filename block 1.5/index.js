
new Swiper('.swiper-container',{

          slidesPerView: 1,
          spaceBetween: 10,
          loop: true,
          //  slideClass: '.swiper-slide',
           pagination: {
            el: '.swiper-pagination',
             clickable: true,
             type: 'bullets',
               },
})

function showMore() {
  const sliderVisible = document.querySelector(".brends__visible");
  const sliderHidden = document.querySelectorAll(".hidden");
  const image = document.querySelector(".brends__visible-img");

  sliderHidden.forEach((item) => {
    if (item.style.display === "none") {
      item.style.display = "flex";
      sliderVisible.innerHTML = "Cкрыть";
      sliderVisible.style.marginTop = "40px";
      image.style.transform = "rotate(180deg)";
    } else {
      item.style.display = "none";
      sliderVisible.innerHTML = "Показать все";
      image.style.transform = "rotate(0deg)";
    }
  });
}
showMore();
