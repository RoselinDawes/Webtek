const foot = document.getElementById("foot"); //henter ut elementet "foot"

function red_insta(){
    document.getElementById("insta").src="icon/instagram_red.png"; //henter ut elementet "insta" og legger til en src til elementet 
    document.getElementById("insta").addEventListener("mouseout", normal_insta); //henter ut elementet "insta" og legger til at når man tar musa ut av elementet skal funksjonen normal_insta kjøre
}

function normal_insta(){
    document.getElementById("insta").src="icon/insta2.png"; //henter ut elementet "insta" og legger til en src til elementet 
    document.getElementById("insta").addEventListener("mouseover", red_insta); //henter ut elementet "insta" og legger til at når man hovrer over elementet skal funksjonen red_insta kjøre 
}

//de andre funksjonen under gjør det samme som red_insta og normal_insta bare med andre elementer

function red_linkdin(){
    document.getElementById("linkdin_lenke").src="icon/linkdin_red.png";
    document.getElementById("linkdin_lenke").addEventListener("mouseout", normal_linkdin);
}

function normal_linkdin(){
    document.getElementById("linkdin_lenke").src="icon/linkdin.png";
    document.getElementById("linkdin_lenke").addEventListener("mouseover", red_linkdin);
}

function red_face(){
    document.getElementById("face").src="icon/facebook_red.png";
    document.getElementById("face").addEventListener("mouseout", normal_face);
}

function normal_face(){
    document.getElementById("face").src="icon/face.png";
    document.getElementById("face").addEventListener("mouseover", red_face);
}

function red_yt(){
    document.getElementById("yt").src="icon/youtube_red.png";
    document.getElementById("yt").addEventListener("mouseout", normal_yt);
}

function normal_yt(){
    document.getElementById("yt").src="icon/youtube.png";
    document.getElementById("yt").addEventListener("mouseover", red_yt);
}

function red_vimeo(){
    document.getElementById("vimeo").src="icon/vimeo_red.png";
    document.getElementById("vimeo").addEventListener("mouseout", normal_vimeo);
}

function normal_vimeo(){
    document.getElementById("vimeo").src="icon/vimeo.png";
    document.getElementById("vimeo").addEventListener("mouseover", red_vimeo);
}

function footer() {
    const insta = document.createElement("a"); //lager et element som er en lenke og kalles "insta"
    insta.href = "https://www.instagram.com/brage.bakke/?fbclid=IwAR0IkPLdy1p771G5g7wyMZFRgUw2z9Up44kO54Ojsgapgfc0W_mxoPpqEqU"; //spesifiserer url'en til siden som linken lenker til 
    insta.target = "_blank"; //sørger for at den nye siden åpnes i en ny fane 
    const insta_icon = document.createElement("img"); //lager et img-element som kalles insta_icon
    insta_icon.id="insta"; //gir elementet en id
    insta_icon.src = "icon/insta2.png"; //legger til en src til elementet
    insta_icon.addEventListener("mouseover", red_insta); //dersom man tar musen over skal funksjonen red_insta skje, altså at ikonet blir rødt 
    insta_icon.addEventListener("mouseout", normal_insta); //dersom man tar musen ut av elementet skal funksjonen normal_insta skje, altså at ikonet blir hvit
    foot.appendChild(insta) //legger til elementet "insta", altså lenken, i footeren 
    insta.appendChild(insta_icon); //legger elementet "insta_icon", altså ikonet, i footeren. 

//dette gjentas med alle de 5 ikonene vi har i footeren

    const linkdin_lenke = document.createElement("a");
    linkdin_lenke.href = "http://linkedin.com/in/brage-fæhn-bakke-5854751ba/";
    linkdin_lenke.target = "_blank";
    const linkdin_icon = document.createElement("img");
    linkdin_icon.id="linkdin_lenke";
    linkdin_icon.src = "icon/linkdin.png";
    linkdin_icon.addEventListener("mouseover", red_linkdin);
    linkdin_icon.addEventListener("mouseout", normal_linkdin);
    foot.appendChild(linkdin_lenke)
    foot.appendChild(linkdin_icon)
  


    const face = document.createElement("a");
    face.href = "https://www.facebook.com/profile.php?id=100000472141045";
    face.target = "_blank";
    const face_icon = document.createElement("img");
    face_icon.id="face";
    face_icon.src = "icon/face.png";
    face_icon.addEventListener("mouseover", red_face);
    face_icon.addEventListener("mouseout", normal_face);
    foot.appendChild(face)
    foot.appendChild(face_icon)
   

    const yt = document.createElement("a");
    yt.href = "https://www.youtube.com/user/BigBawsB/featured";
    yt.target = "_blank";
    const yt_icon = document.createElement("img");
    yt_icon.id="yt";
    yt_icon.src = "icon/youtube.png";
    yt_icon.addEventListener("mouseover", red_yt);
    yt_icon.addEventListener("mouseout", normal_yt);
    foot.appendChild(yt)
    foot.appendChild(yt_icon)
  


    const vimeo = document.createElement("a");
    vimeo.href = "https://vimeo.com/user31805633"; 
    vimeo.target = "_blank";
    const vimeo_icon = document.createElement("img");
    vimeo_icon.id="vimeo";
    vimeo_icon.src = "icon/vimeo.png";
    vimeo_icon.addEventListener("mouseover", red_vimeo);
    vimeo_icon.addEventListener("mouseout", normal_vimeo);
    foot.appendChild(vimeo)
    foot.appendChild(vimeo_icon)
 

}


footer()



/*Link: https://stackoverflow.com/questions/41784161/javascript-change-image-when-onmouseover-and-onmouseout */
/*https://stackoverflow.com/questions/8536653/onclick-on-a-image-to-navigate-to-another-page-using-javascript/8536816*/
/*https://stackoverflow.com/questions/54853648/on-mouse-hover-change-picture-in-javascript/54853732*/