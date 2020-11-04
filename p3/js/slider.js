



let sliderImages = document.querySelectorAll(".slide") //henter ut alle elementer "slide" og legger de i en nodelist
let arrowLeft = document.querySelector("#arrow-left");
let arrowRight = document.querySelector("#arrow-right");
//henter ut elementene ^
let current = 0; //definerer en variabel current og setter den til 0 


// Close-button:
function goBack() {
    window.history.back();
  }

// Klarere alle bilder:
function reset(){
    for(let i = 0; i < sliderImages.length; i++){ //iterer gjennom sliderImages listen
        sliderImages[i].style.display = "none"; //setter hvert element i listen til å ha display: none
    }
}

function startSlide(){
    reset(); //kaller på funksjonen reset()
    sliderImages[0].style.display = "block"; //setter første element i listen til å ha display: block
}

//Vis forrige
function slideLeft(){
    reset(); 
    sliderImages[current-1].style.display = "block"; //setter elementet som er før current til å ha display: block
    current--; //gir current en ny verdi som er en mindre enn forrige
}

//Vis neste
function slideRight(){
    reset();
    sliderImages[current+1].style.display = "block"; //setter elementet som er etter current til å ha display: block
    current++; //gir current en ny verdi som er en større enn forrige 
}

//Venstre klikk
arrowLeft.addEventListener("click", function(){ //når man klikker på arrowLeft skal en funksjon skje
    if(current === 0){ //sjekker om current er lik 0
        current = sliderImages.length; //om det stemmer skal current få en ny verdi som er lik lengden av listen sliderImages
    }
    slideLeft(); //kaller på funksjonen slideLeft()
});

//Høyre klikk
arrowRight.addEventListener("click", function(){ //når man klikker på arrowRight skal en funksjon skje 
    if(current === sliderImages.length - 1){ //sjekker om current er lik lengden på listen sliderImages - 1
        current = -1; // setter current til -1
    }
    slideRight(); //kaller på funksjonen slideRight()
});

startSlide();