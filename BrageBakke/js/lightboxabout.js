const lightbox = document.createElement("div"); //lager et div-element som kalles lightbox
lightbox.id = "lightbox"; //gir elementet en id
document.body.appendChild(lightbox); //legger til elementet i body i htmlen

function makeLightbox(){
    const images = document.querySelectorAll("img"); //henter ut alle img elementene og legger de i en nodelist 
    images.forEach(image => { //forEach-funksjonen går gjennom alle img elementene i images 
        image.addEventListener("click", e =>{ //dersom man klikker på et image skal et event skje 
            if (image.id != "brage"){ //funksjonen skal ikke skje på bilde av brage, og utelukker derfor det med en if-setning som sier at hvis id'en til image er ulik brage så skal funksjonen kjøre videre
                lightbox.classList.add("active")//bruker classlist for å manipulere css, her addes en css class kalt "active" til lightbox elementet 
                const img = document.createElement("img"); //lager et img-element 
                img.src = image.src; //setter src, altså url'en, til det nye img-elementet lik det gamle
                while (lightbox.firstChild){ //så lenge det er et firstChild i lightbox 
                    lightbox.removeChild(lightbox.firstChild); //fjerner firstchild elementet 
                };
                lightbox.appendChild(img); //legger til det nye img-elemntet
            };
        });
    });

    lightbox.addEventListener("click", e => { //når man klikker på lightboxen skal et event skje
        if (e.target !== e.currentTarget) return //sører for at lightboxen kun avsluttes om man trykker utenfor bilde
            lightbox.classList.remove("active"); //fjerner css class "active" som ble lagd i stad
    })
};

makeLightbox();


//brukt denne youtube-videoen som inspirasjon til koden https://www.youtube.com/watch?v=uKVVSwXdLr0
