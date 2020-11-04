function loadVideo() {
  const videoplayer = document.getElementById("videoPlayer"); //henter ut elementet "videoplayer" og kaller det videoplayer
  const video = document.getElementById("introvideo"); //henter ut elementet "introvideo" og kaller det video
  videoplayer.appendChild(video); //legger til video i videoplayer
  videoplayer.style.display = "block"; //sier at videoplayer skal være display: block, som vil si at det starter på en ny linje og tar opp hele bredden 
  const imag = document.getElementById("brage") //henter ut elementet "brage" og kaller det imag
  imag.remove(); //fjerner imag 
  videoplayer.classList.add("videostyle"); //legger dermed til en ny css class til videplayer
  const text = document.querySelector(".textBrage") //henter ut classen "textBrage"
  text.classList.add("textstyle"); //legger til en ny css class til text

  //legger til disse css-klassene til text og videoplayer for å kunne endre på plasseringen av elementene i css

  
}


