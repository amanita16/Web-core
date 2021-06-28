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

let p = [{"name":"Васька","goals":5,"passes":5},{"name":"Байт","goals":12,"passes":2},{"name":"Снежок","goals":2,"passes":7}]

let getStatistics = function (players) {
  let sum =  0;
for(let j = 0; j < players.length;j++){
  sum += players[j].goals
}
for(let i = 0; i < players.length;i++){
  players[i].coefficient = players[i].goals * 2 + players[i].passes;
  players[i].percent =Math.round(players[i].goals / sum * 100)
};
 return players
}
console.log(getStatistics (p))