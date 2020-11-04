const topnav = document.getElementById("topnav"); //henter ut elemntet "topnav"
topnav.className = "topnav" //gir topnav et className 
const navbar = document.createElement("div"); //lager et div-element som kalles navbar
navbar.id = "navbar"; //gir elementet en id 
navbar.className = "navbar"; //gir elementet et className 
topnav.appendChild(navbar); //legger til navbar-elementet i topnav

function red_logo(){
    document.getElementById("logo").src="icons/logo_red3.png"; //henter ut elementet "logo" og legger til en src til elementet 
    document.getElementById("logo").addEventListener("mouseout", normal_logo); //henter ut elementet "logo" og legger til at når man tar musa ut av elementet skal funksjonen normal_logo kjøre
}
function normal_logo(){
    document.getElementById("logo").src="icons/logo.png"; //henter ut elementet "logo" og legger til en src til elementet 
    document.getElementById("logo").addEventListener("mouseover", red_logo); //henter ut elementet "insta" og legger til at når man hovrer over elementet skal funksjonen red_logo kjøre 
}



function menubar(){
    const contact = document.createElement("a"); //lager en lenke-element som kalles contact
    const contact_tekst = document.createTextNode("Contact"); //lager en textnode 
    contact.id = "contact"; //gir contact en id
    contact.href= "contact.html"; //spesifiserer url'en til siden som linken lenker til 
    contact.appendChild(contact_tekst); //legger til textnoden i contact-elementet
    navbar.appendChild(contact); //legger til conact i navbar

   //gjentar dette med alle de ulike elementene som skal være i navbaren  

    const about = document.createElement("a");
    const about_tekst = document.createTextNode("About");
    about.id = "about";
    about.href= "about.html";
    about.appendChild(about_tekst);
    navbar.appendChild(about);

    const order = document.createElement("a");
    const order_tekst = document.createTextNode("Order");
    order.id = "order";
    order.href= "order.html";
    order.appendChild(order_tekst);
    navbar.appendChild(order);

    const videos = document.createElement("a");
    const videos_tekst = document.createTextNode("Videos");
    videos.id = "video";
    videos.href= "video.html";
    videos.appendChild(videos_tekst);
    navbar.appendChild(videos);

    const images = document.createElement("a");
    const images_tekst = document.createTextNode("Images");
    images.id = "images";
    images.href= "images.html";
    images.appendChild(images_tekst);
    navbar.appendChild(images);
    
   
    const logo = document.createElement("a");
    logo.href = "homepage.html";
    const logo_icon = document.createElement("img");
    logo_icon.id="logo";
    logo_icon.src = "icons/logo.png";
    logo_icon.addEventListener("mouseover", red_logo);
    logo_icon.addEventListener("mouseout", normal_logo);
    topnav.appendChild(logo)
    topnav.appendChild(logo_icon)
    logo.appendChild(logo_icon);


}

menubar()