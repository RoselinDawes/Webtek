

/*window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".topnav").style.top = "0";
  } else {
    document.querySelector(".topnav").style.top = "-90px";
  }
}*/






let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".topnav").style.top = "0";
  } else {
    document.querySelector(".topnav").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
}