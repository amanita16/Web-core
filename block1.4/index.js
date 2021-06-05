const active = document.querySelectorAll(".nav__btns");
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

const activeLang = document.querySelectorAll(".footer__lang-btns");
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