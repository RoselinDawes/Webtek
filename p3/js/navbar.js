

let prevPos = window.pageYOffset;
window.onscroll = function() {
  let currentPos = window.pageYOffset;
  if (prevPos > currentPos) {
    document.querySelector(".topnav").style.top = "0";
  } else {
    document.querySelector(".topnav").style.top = "-90px";
  }
  prevPos = currentPos;
}


