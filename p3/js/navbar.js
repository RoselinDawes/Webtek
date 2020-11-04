
//window.pageYOffset returnerer antall pixels som documentet har scrolled langs den vertikale aksen, altså opp og ned 

let prevPos = window.pageYOffset; //lager en variabel som får verdien til antall pixler som er scrollet før man begynner å scrolle 
window.onscroll = function() { //sier at når man scroller skal en funksjon skje 
  let currentPos = window.pageYOffset; //lager en variabel som får verdien til antall pixler som er scrollet etter man har begynt å scrolle  
  if (prevPos > currentPos) { //sjekker om prevPos har en lavere verdi enn currentPos 
    document.querySelector(".topnav").style.top = "0"; //hvis det stemmer hentes elementet "topnav" ut og settes til å begynne på positionen 0 fra toppen 
  } else {
    document.querySelector(".topnav").style.top = "-90px"; //hvis det ikke stemmer hentes elemnetet ut på samme måte, men settes til å begynne på positionen -90px fr toppen
  }
  prevPos = currentPos; //setter så prevPos lik currentPos slik at det starter på nytt når man begynner å scrolle igjen. 
}


