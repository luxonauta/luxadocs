toggleActive = () ->
    navbarBurger.classList.toggle("is-active")
    navbarMenu.classList.toggle("is-active")

navbarBurger = document.querySelector(".lx-nav-burger")
navbarMenu = document.querySelector(".lx-nav-menu")

navbarBurger.addEventListener("click", toggleActive)

docsearch({
    apiKey: "761e2f48adc098d3b8ded157d79d009d",
    indexName: "luxonauta",
    inputSelector: "#search",
    debug: false
});