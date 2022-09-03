const mob = window.innerWidth <= 800 && window.innerHeight <= 600;

const modal = document.getElementById('modal')!;

modal.addEventListener("click", event => {
    if(event.target == modal)
        modal.style.display='none'
})

const modalImg = document.getElementById("modalimg")! as HTMLImageElement;
const images = document.getElementsByClassName("zoomer") as HTMLCollectionOf<HTMLImageElement>;

for (const img of images) {
    if(!mob) {
        img.addEventListener("click", () => {
            modal.style.display = "block";
            modalImg.src = img.src;
            modalImg.alt = img.alt;
        })
    }
}

const span = document.getElementsByClassName("close")[0];

span.addEventListener("click", () => { 
    modal.style.display = "none";
})