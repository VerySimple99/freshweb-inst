var x = document.querySelector("#myBtn");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
  document.querySelector("#demo").innerHTML += "Moused over!<br>";
}

function mySecondFunction() {
  document.querySelector("#demo").innerHTML += "Clicked!<br>";
}

function myThirdFunction() {
  document.querySelector("#demo").innerHTML += "Moused out!<br>";
}