document.addEventListener("DOMContentLoaded", () => {

    const themeSelect = document.getElementById("theme");
    const logo = document.getElementById("logo");

    themeSelect.addEventListener("change", (e) => {

        if (e.target.value === "dark") {

            // dark background
            document.body.classList.add("dark");

            // show DARK logo
            logo.src = "byui-logo-dark.png";

        } else {

            // light background
            document.body.classList.remove("dark");

            // show WHITE logo
            logo.src = "byui-logo-white.png";
        }

    });

});
