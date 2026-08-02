document.addEventListener("DOMContentLoaded", () => {

    const backTop = document.querySelector(".back-top");

    if (backTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                backTop.style.opacity = "1";
                backTop.style.pointerEvents = "auto";

            } else {

                backTop.style.opacity = "0";
                backTop.style.pointerEvents = "none";

            }

        });

    }

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".toc a");

    function updateNavigation() {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            if (window.scrollY >= top) {

                current = section.id;

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", updateNavigation);

    updateNavigation();

});
