// if (condition1) {
//     let sliderImages = document.querySelectorAll(".slide")
//   } else if (condition2) {
//     let sliderImages = document.querySelectorAll(".n_slide")
//   } else if (condition2) {
//     let sliderImages = document.querySelectorAll(".p_slide")
//   } else {
//     let sliderImages = document.querySelectorAll(".re_slide")
//   }



let sliderImages = document.querySelectorAll(".slide")

let arrowLeft = document.querySelector("#arrow-left");
let arrowRight = document.querySelector("#arrow-right");
let current = 0;

    // Klarere alle bilder:
function reset(){
    for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = "none";
    }
}

function startSlide(){
    reset();
    sliderImages[0].style.display = "block";
}

//Vis forrige
function slideLeft(){
    reset();
    sliderImages[current-1].style.display = "block";
    current--;
}

//Vis neste
function slideRight(){
    reset();
    sliderImages[current+1].style.display = "block";
    current++;
}

//Venstre klikk
arrowLeft.addEventListener("click", function(){
    if(current === 0){
        current = sliderImages.length;
    }
    slideLeft();
});

//Høyre klikk
arrowRight.addEventListener("click", function(){
    if(current === sliderImages.length - 1){
        current = -1;
    }
    slideRight();
});

startSlide();