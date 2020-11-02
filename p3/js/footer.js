const foot = document.getElementById("foot");

/*
function icon_red() {
    document.getElementById("insta").src='icons/instagram_red.png';
}*/ 

/*function changePic1() {
    document.getElementById("insta").src = 'icons/instagram_red.png';
       }
function changePic22(){
    document.getElementById("insta").src = 'icons/insta2.png';
}*/

function footer() {
    const insta = document.createElement("a");
    insta.href = "https://www.instagram.com/brage.bakke/?fbclid=IwAR0IkPLdy1p771G5g7wyMZFRgUw2z9Up44kO54Ojsgapgfc0W_mxoPpqEqU";
    insta.target = "_blank";
    const insta_icon = document.createElement("img");
    insta_icon.id="insta";
    insta_icon.src = "icons/insta2.png";
    foot.appendChild(insta)
    foot.appendChild(insta_icon)
    insta.appendChild(insta_icon);


    const linkdin_lenke = document.createElement("a");
    linkdin_lenke.href = "http://linkedin.com/in/brage-fæhn-bakke-5854751ba/";
    linkdin_lenke.target = "_blank";
    const linkdin_icon = document.createElement("img");
    linkdin_icon.id="linkdin_lenke";
    linkdin_icon.src = "icons/linkdin.png";
    foot.appendChild(linkdin_lenke)
    foot.appendChild(linkdin_icon)
    linkdin_lenke.appendChild(linkdin_icon);


    const face = document.createElement("a");
    face.href = "https://www.facebook.com/profile.php?id=100000472141045";
    face.target = "_blank";
    const face_icon = document.createElement("img");
    face_icon.id="linkdin_lenke";
    face_icon.src = "icons/face.png";
    foot.appendChild(face)
    foot.appendChild(face_icon)
    face.appendChild(face_icon);


    const yt = document.createElement("a");
    yt.href = "https://www.youtube.com/user/BigBawsB/featured";
    yt.target = "_blank";
    const yt_icon = document.createElement("img");
    yt_icon.id="linkdin_lenke";
    yt_icon.src = "icons/youtube.png";
    foot.appendChild(yt)
    foot.appendChild(yt_icon)
    yt.appendChild(yt_icon);


    const vimeo = document.createElement("a");
    vimeo.href = "https://vimeo.com/user31805633"; 
    vimeo.target = "_blank";
    const vimeo_icon = document.createElement("img");
    vimeo_icon.id="linkdin_lenke";
    vimeo_icon.src = "icons/vimeo.png";
    foot.appendChild(vimeo)
    foot.appendChild(vimeo_icon)
    vimeo.appendChild(vimeo_icon);

}

    /*function hover(element){
        element.setAttribute('src', 'icons/instagram_red.png');
    }
    function unhover(element) {
        element.setAttribute('src', '/icons/insta2.png');
    }
*/
    /*let insta_icon = document.getElementById("img");
    
    
    insta_icon.onmouseout = function() {
        this.src = 'icons/insta2.png';

    };
    insta_icon.onmouseover = function() {
        this.src = 'icons/instagram_red.png';
    };*/


    /*insta_icon.addEventListener = ('mouseover', function(){
        insta_icon.src = "icons/instagram_red.png"
    })
    insta_icon.addEventListener = ('mouseout', function(){
        insta_icon.src = "icons/insta2.png"
    })*/
    
    /*document.querySelectorAll('icons/insta2.png').addEventListener('mouseover', function() {
        this.src = 'icons/instagram_red.png';
    });*/
    /*insta_icon.alt="instagram"*/

    

 
    
 
    /*let images = document.getElementsByTagName("image");
    for(let i = 0; i < images.length; i++) {
    var image = images[i];
    image.onclick = function(event) {
         window.location.href = this.id + url('https://www.instagram.com/brage.bakke/?fbclid=IwAR0IkPLdy1p771G5g7wyMZFRgUw2z9Up44kO54Ojsgapgfc0W_mxoPpqEqU');
    };*/

    /*document.getElementById("insta").src="icons/instagram_red";
    insta_icon.onmouseover="this.src='icons/instagram_red.png'";
    insta_icon.onmouseout="this.src='icons/insta2.png'";   
    */
    
    
/*icon_red()  */
footer()
/*changePic1()
changePic22()
*/


/*Link: https://stackoverflow.com/questions/41784161/javascript-change-image-when-onmouseover-and-onmouseout */
/*https://stackoverflow.com/questions/8536653/onclick-on-a-image-to-navigate-to-another-page-using-javascript/8536816*/
/*https://stackoverflow.com/questions/54853648/on-mouse-hover-change-picture-in-javascript/54853732*/