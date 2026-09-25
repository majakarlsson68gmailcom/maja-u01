const toggle = document.querySelector(".nav-toggle");
const navContainer = document.querySelector(".nav-container");

toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";

    toggle.setAttribute("aria-expanded", String(!isOpen));
    navContainer.classList.toggle("is-open");

})