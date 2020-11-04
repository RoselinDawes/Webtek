const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

function makeLightbox(){
    const images = document.querySelectorAll("img");
    images.forEach(image => {
        image.addEventListener("click", e =>{
            if (image.id != "brage"){
                lightbox.classList.add("active")
                const img = document.createElement("img");
                img.src = image.src;
                while (lightbox.firstChild){
                    lightbox.removeChild(lightbox.firstChild);
                }
                lightbox.appendChild(img); 
            }
        
        })
    })

    lightbox.addEventListener("click", e => {
        if (e.target !== e.currentTarget) return
        lightbox.classList.remove("active");
    })
}

makeLightbox();
