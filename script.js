const mob = window.innerWidth <= 800 && window.innerHeight <= 600;

const modal = document.getElementById('modal');

modal.onclick = function(e){
    if(e.target == modal)
        modal.style.display='none'
}

const modalImg = document.getElementById("modalimg");
const images = document.getElementsByClassName("zoomer");
for(const img of images){
    if(!mob)
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}

const span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.display = "none";
}