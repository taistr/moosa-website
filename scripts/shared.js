"use strict"

function toggleMenu() {
    let menu = document.querySelector(".menu");
    let main = document.querySelector("main");

    menu.classList.toggle("active");
    main.classList.toggle("active");
}