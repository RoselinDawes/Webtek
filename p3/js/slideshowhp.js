let i = 0; 
let images1 = ["img/Bestemor.jpg", "img/beito.jpg", "img/flamme.jpg"];
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


window.onload = changeimg









