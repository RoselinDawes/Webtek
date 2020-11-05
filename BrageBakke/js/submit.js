function validateSubmit(){
  const fname = document.forms["myForm"]["fname"].value
  const lname = document.forms["myForm"]["lname"].value
  const email = document.forms["myForm"]["email"].value
  if ((fname && lname && email) == ""){ //sørger for at man ikke kan submitte et form uten å ha skrevet mail og navn
    window.alert("You must fill out the form") 
  }else{
    window.alert("Your request was submitted, thank you!") //gir en feedback via et alert-vindu 
  }
};


