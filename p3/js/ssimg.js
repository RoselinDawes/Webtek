/*const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);


const images = document.querySelectorAll("img");
images.forEach(image => {
    image.addEventListener("click", e =>{
        lightbox.classList.add("active")
        const img = document.createElement("img");
        img.src = image.src;
        while (lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);

    })
})

lightbox.addEventListener("click", e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove("active");
})*/


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.querySelectorAll("img");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";  
}
