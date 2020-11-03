function loadVideo() {
  const videoplayer = document.getElementById("videoPlayer");
  const videoEl = document.getElementById("introvideo");
  videoplayer.appendChild(videoEl);
  videoplayer.style.display = "block";
  const imag = document.getElementById("brage")
  imag.remove();
  videoplayer.classList.add("videostyle");
  const text = document.querySelector(".textBrage")
  text.classList.add("textstyle");

  
}
/*
function on() {
document.getElementById("overlay").style.display = "block";
}

function off() {
document.getElementById("overlay").style.display = "none";
}
*/

