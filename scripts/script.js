// JavaScript Document

//code voor menu knop
var menuButton = document.querySelector(".menubutton");
var navvie = document.querySelector("nav");

function changeButton() {
    menuButton.classList.toggle("menubuttonx");
    if (menuButton.innerHTML === "Menu") {
        menuButton.innerHTML = "Less";
    } else {
        menuButton.innerHTML = "Menu";
    }

    navvie.classList.toggle("displaynone");

}

menuButton.addEventListener("click", changeButton);

//code voor rood
var roodKnop = document.querySelector(".redb");
var h1 = document.querySelector("#h1-1st");

function changeColor() {
    roodKnop.classList.toggle("redbx");

    if (roodKnop.innerHTML === "Seriously, red?") {
        roodKnop.innerHTML = "Bring red back!";
    } else {
        roodKnop.innerHTML = "Seriously, red?";
    }


}

roodKnop.addEventListener("click", changeColor);