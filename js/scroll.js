var hiddenElement = document.getElementById("message");
var btn = document.querySelector(".header__getstarted");

function handleButtonClick() {
  hiddenElement.scrollIntoView({ block: "center", behavior: "smooth" });
}

btn.addEventListener("click", handleButtonClick);



var hiddenElement__second = document.getElementById("message");
var btn__second = document.getElementById("services__link1");

function handleButtonClick__second() {
  hiddenElement__second.scrollIntoView({ block: "center", behavior: "smooth" });
}

btn__second.addEventListener("click", handleButtonClick__second);


var hiddenElement__tree = document.getElementById("message");
var btn__tree = document.getElementById("services__link2");

function handleButtonClick__tree() {
  hiddenElement__tree.scrollIntoView({ block: "center", behavior: "smooth" });
}

btn__tree.addEventListener("click", handleButtonClick__tree);



var hiddenElement__four = document.getElementById("message");
var btn__four = document.getElementById("services__link3");

function handleButtonClick__four() {
  hiddenElement__four.scrollIntoView({ block: "center", behavior: "smooth" });
}

btn__four.addEventListener("click", handleButtonClick__four);





var hiddenElement__services = document.querySelector(".services");
var btn__services = document.querySelector(".header__services");

function handleButtonClick__services() {
  hiddenElement__services.scrollIntoView({ block: "center", behavior: "smooth" });
}

btn__services.addEventListener("click", handleButtonClick__services);





///header__services