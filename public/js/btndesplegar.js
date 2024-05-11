document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    // Mostrar/ocultar el menú al hacer clic en el botón colapsable
    mobileMenuButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
    });
});
