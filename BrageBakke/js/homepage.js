let i = 0; //definerer en variabel i som settes til å være 0
let images1 = ["img/beito.jpg", "img/innerdalen/bilder36.jpg", "img/innerdalen/bilder1.jpg"]; //lager et array bestående av tre bilder
const time = 3000; //definerer en variabel som settes til å være 3000


function changeimg(){
    document.querySelector("#slide1").src = images1[i]; //henter ut elementet "slide1" og gir det en ny src verdi som er lik arrayets i'te plass

    if (i < images1.length - 1){ // sjekker om man er på slutten av arrayet 
        i++; //dersom man ikke er det enda så blir variabelen i én større 
    }else{
        i=0; //dersom man er på slutten av arrayet blir i satt til 0 igjen 
    }

    setTimeout("changeimg()", time); //settimeout funksjonen kaller på funksjonen etter et spesifisert antall millisekunder, som her er satt til 3000 gjennom variablen time
}

//det samme gjentas i de 3 neste funksjonene bare med ulike bilder, og dermed ulike arrays 


let images2 = ["img/Bestemor.jpg", "img/Bestemor2.jpg"]
let j = 0;

function changeimg2(){
    document.querySelector("#slide2").src = images2[j];

    if (j < images2.length - 1){
        j++;
    }else{
        j=0;
    }

    setTimeout("changeimg2()", time);
}



let images3 = ["img/innerdalen/bilder20.jpg", "img/innerdalen/bilder3.jpg", "img/flamme.jpg"]
let l = 0;

function changeimg3(){
    document.querySelector("#slide3").src = images3[l];

    if (l < images3.length - 1){
        l++;
    }else{
        l=0;
    }

    setTimeout("changeimg3()", time);
}

let images4 = ["img/innerdalen/bilder11.jpg", "img/innerdalen/bilder31.jpg", "img/innerdalen/bilder7.jpg"]
let m = 0;

function changeimg4(){
    document.querySelector("#slide4").src = images4[m];

    if (m < images4.length - 1){
        m++;
    }else{
        m=0;
    }

    setTimeout("changeimg4()", time);
}

window.onload = changeimg(), changeimg2(), changeimg3(), changeimg4()









