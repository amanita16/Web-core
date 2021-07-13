const active = document.querySelectorAll(".services__btn");
active.forEach(function(item){
  item.classList.remove('active')
  item.addEventListener("click",function(){
    let activeBtn = item;
 active.forEach(function(item){
   item.classList.remove('active')
 })
 activeBtn.classList.add('active')
  })
});