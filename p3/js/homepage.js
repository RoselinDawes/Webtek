let i = 0; 
let images1 = ["img/beito.jpg", "img/innerdalen/bilder36.jpg", "img/innerdalen/bilder1.jpg"];
let time = 3000;


function changeimg(){
    document.slide1.src = images1[i];

    if (i < images1.length - 1){
        i++;
    }else{
        i=0;
    }

    setTimeout("changeimg()", time);
}

let images2 = ["img/Bestemor.jpg", "img/Bestemor2.jpg"]
let j = 0;

function changeimg2(){
    document.slide2.src = images2[j];

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
    document.slide3.src = images3[l];

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
    document.slide4.src = images4[m];

    if (m < images4.length - 1){
        m++;
    }else{
        m=0;
    }

    setTimeout("changeimg4()", time);
}

window.onload = changeimg(), changeimg2(), changeimg3(), changeimg4()









