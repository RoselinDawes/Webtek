const foot = document.getElementById("foot");

function red_insta(){
    document.getElementById("insta").src="icons/instagram_red.png";
    document.getElementById("insta").addEventListener("mouseout", normal_insta);
}

function normal_insta(){
    document.getElementById("insta").src="icons/insta2.png";
    document.getElementById("insta").addEventListener("mouseover", red_insta);
}

function red_linkdin(){
    document.getElementById("linkdin_lenke").src="icons/linkdin_red.png";
    document.getElementById("linkdin_lenke").addEventListener("mouseout", normal_linkdin);
}

function normal_linkdin(){
    document.getElementById("linkdin_lenke").src="icons/linkdin.png";
    document.getElementById("linkdin_lenke").addEventListener("mouseover", red_linkdin);
}

function red_face(){
    document.getElementById("face").src="icons/facebook_red.png";
    document.getElementById("face").addEventListener("mouseout", normal_face);
}

function normal_face(){
    document.getElementById("face").src="icons/face.png";
    document.getElementById("face").addEventListener("mouseover", red_face);
}

function red_yt(){
    document.getElementById("yt").src="icons/youtube_red.png";
    document.getElementById("yt").addEventListener("mouseout", normal_yt);
}

function normal_yt(){
    document.getElementById("yt").src="icons/youtube.png";
    document.getElementById("yt").addEventListener("mouseover", red_yt);
}

function red_vimeo(){
    document.getElementById("vimeo").src="icons/vimeo_red.png";
    document.getElementById("vimeo").addEventListener("mouseout", normal_vimeo);
}

function normal_vimeo(){
    document.getElementById("vimeo").src="icons/vimeo.png";
    document.getElementById("vimeo").addEventListener("mouseover", red_vimeo);
}

function footer() {
    const insta = document.createElement("a");
    insta.href = "https://www.instagram.com/brage.bakke/?fbclid=IwAR0IkPLdy1p771G5g7wyMZFRgUw2z9Up44kO54Ojsgapgfc0W_mxoPpqEqU";
    insta.target = "_blank";
    const insta_icon = document.createElement("img");
    insta_icon.id="insta";
    insta_icon.src = "icons/insta2.png";
    insta_icon.addEventListener("mouseover", red_insta);
    insta_icon.addEventListener("mouseout", normal_insta);
    foot.appendChild(insta)
    foot.appendChild(insta_icon)
    insta.appendChild(insta_icon);


    const linkdin_lenke = document.createElement("a");
    linkdin_lenke.href = "http://linkedin.com/in/brage-fæhn-bakke-5854751ba/";
    linkdin_lenke.target = "_blank";
    const linkdin_icon = document.createElement("img");
    linkdin_icon.id="linkdin_lenke";
    linkdin_icon.src = "icons/linkdin.png";
    linkdin_icon.addEventListener("mouseover", red_linkdin);
    linkdin_icon.addEventListener("mouseout", normal_linkdin);
    foot.appendChild(linkdin_lenke)
    foot.appendChild(linkdin_icon)
    linkdin_lenke.appendChild(linkdin_icon);


    const face = document.createElement("a");
    face.href = "https://www.facebook.com/profile.php?id=100000472141045";
    face.target = "_blank";
    const face_icon = document.createElement("img");
    face_icon.id="face";
    face_icon.src = "icons/face.png";
    face_icon.addEventListener("mouseover", red_face);
    face_icon.addEventListener("mouseout", normal_face);
    foot.appendChild(face)
    foot.appendChild(face_icon)
    face.appendChild(face_icon);


    const yt = document.createElement("a");
    yt.href = "https://www.youtube.com/user/BigBawsB/featured";
    yt.target = "_blank";
    const yt_icon = document.createElement("img");
    yt_icon.id="yt";
    yt_icon.src = "icons/youtube.png";
    yt_icon.addEventListener("mouseover", red_yt);
    yt_icon.addEventListener("mouseout", normal_yt);
    foot.appendChild(yt)
    foot.appendChild(yt_icon)
    yt.appendChild(yt_icon);


    const vimeo = document.createElement("a");
    vimeo.href = "https://vimeo.com/user31805633"; 
    vimeo.target = "_blank";
    const vimeo_icon = document.createElement("img");
    vimeo_icon.id="vimeo";
    vimeo_icon.src = "icons/vimeo.png";
    vimeo_icon.addEventListener("mouseover", red_vimeo);
    vimeo_icon.addEventListener("mouseout", normal_vimeo);
    foot.appendChild(vimeo)
    foot.appendChild(vimeo_icon)
    vimeo.appendChild(vimeo_icon);

}


footer()



/*Link: https://stackoverflow.com/questions/41784161/javascript-change-image-when-onmouseover-and-onmouseout */
/*https://stackoverflow.com/questions/8536653/onclick-on-a-image-to-navigate-to-another-page-using-javascript/8536816*/
/*https://stackoverflow.com/questions/54853648/on-mouse-hover-change-picture-in-javascript/54853732*/