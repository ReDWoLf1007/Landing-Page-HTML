
document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector("#nav-menu");

    navToggle.addEventListener("click", function () {
        const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
        
        navToggle.setAttribute("aria-expanded", !isExpanded);
        navMenu.setAttribute("aria-hidden", isExpanded);

        if (!isExpanded) {
            navMenu.style.display = "flex";
        } else {
            navMenu.style.display = "none";
        }
    });
});

