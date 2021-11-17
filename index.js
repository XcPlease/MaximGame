const nav = document.getElementById("nav");
nav.addEventListener("click", function () {
    mobile_menu.classList.add("hide");
})
hamburger.addEventListener("click", function () {
    mobile_menu.classList.remove("hide");
})