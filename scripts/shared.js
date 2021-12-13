"use strict"

function toggleMenu() {
    let body = document.querySelector("body");
    let menu = document.querySelector(".menu");
    let main = document.querySelector("main");
    let menu_button = document.querySelector(".menu-button");

    body.classList.toggle("active");
    menu.classList.toggle("active");
    main.classList.toggle("active");
    menu_button.classList.toggle("active");
}