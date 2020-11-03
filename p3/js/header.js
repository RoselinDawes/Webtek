const topnav = document.getElementById("topnav");
topnav.className = "topnav"
const navbar = document.createElement("div");
navbar.id = "navbar";
navbar.className = "navbar";
topnav.appendChild(navbar);

/*const subnav = document.getElementById("subnav");
subnav.className = "subnav"
const subnavbtn = document.createElement("div");
subnavbtn.id= "subnavbtn";
subnavbtn.className = "subnavbtn";
subnavbtn.appendChild(subnavbtn);*/

function red_logo(){
    document.getElementById("logo").src="icons/logo_red3.png";
    document.getElementById("logo").addEventListener("mouseout", normal_logo);
}

function normal_logo(){
    document.getElementById("logo").src="icons/logo.png";
    document.getElementById("logo").addEventListener("mouseover", red_logo);
}

function menubar(){
    const contact = document.createElement("a");
    const contact_tekst = document.createTextNode("Contact");
    contact.id = "contact";
    contact.href= "contact.html";
    console.log("contact: " + contact);
    contact.appendChild(contact_tekst);
    navbar.appendChild(contact);

    const about = document.createElement("a");
    const about_tekst = document.createTextNode("About");
    about.id = "about";
    about.href= "about.html";
    console.log("about: " + about);
    about.appendChild(about_tekst);
    navbar.appendChild(about);

    const order = document.createElement("a");
    const order_tekst = document.createTextNode("Order");
    order.id = "order";
    order.href= "order.html";
    console.log("order: " + order);
    order.appendChild(order_tekst);
    navbar.appendChild(order);

    const videos = document.createElement("a");
    const videos_tekst = document.createTextNode("Videos");
    videos.id = "images";
    videos.href= "video.html";
    console.log("videos: " + videos);
    videos.appendChild(videos_tekst);
    navbar.appendChild(videos);

    const images = document.createElement("a");
    const images_tekst = document.createTextNode("Images");
    images.id = "images";
    images.href= "2_photo_grid.html";
    console.log("images: " + images);
    images.appendChild(images_tekst);
    navbar.appendChild(images);

    /*const portraits = document.createElement("a");
    const portraits_tekst = document.createTextNode("Portraits");
    portraits.id = "portraits";
    portraits.href= "category_portrait.html";
    console.log("portraits: " + portraits);
    portraits.appendChild(portraits_tekst);
    subnavbtn.appendChild(portraits);*/


   
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