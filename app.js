const drop = document.querySelector('#right-menu');
const icon = document.querySelector('#icon');

icon.addEventListener('click', ()=>{
    if(drop.classList.contains("none")){
        drop.classList.remove("none");
        drop.classList.add("hamburger");
    }
    else{
        drop.classList.remove("hamburger");
        drop.classList.add("none");
    }
})

lightBoxClose = function() {
    document.querySelector(".lightbox").classList.add("closed");
  }