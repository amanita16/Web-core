const active = document.querySelectorAll(".nav__btn");

function navBtn(active){
  active.forEach(function(item){
    item.classList.remove('active-btn')
    item.addEventListener("click",function(){
      let activeBtn = item;
   active.forEach(function(item){
     item.classList.remove('active-btn')
   })
   activeBtn.classList.add('active-btn')
    })
  })
}
navBtn(active)

const activeLang = document.querySelectorAll(".footer__lang-btn");
function footerBtn(activeLang){
  activeLang.forEach(function(item){
    item.classList.remove('active')
    item.addEventListener("click",function(){
      let activeBtnLang = item;
   activeLang.forEach(function(item){
     item.classList.remove('active')
   })
   activeBtnLang.classList.add('active')
    })
  })
}
footerBtn(activeLang)

