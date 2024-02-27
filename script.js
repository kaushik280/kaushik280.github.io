document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            document.querySelector(".navbar").classList.add("sticky");
        } else {
            document.querySelector(".navbar").classList.remove("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            document.querySelector(".scroll-up-btn").classList.add("show");
        } else {
            document.querySelector(".scroll-up-btn").classList.remove("show");
        }
    });

    // slide-up script
    document.querySelector(".scroll-up-btn").addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
        // removing smooth scroll on slide-up button click
        document.documentElement.style.scrollBehavior = "auto";
    });

    document.querySelectorAll(".navbar .menu li a").forEach(function (link) {
        link.addEventListener("click", function () {
            // applying again smooth scroll on menu items click
            document.documentElement.style.scrollBehavior = "smooth";
        });
    });

    // toggle menu/navbar script
    document.querySelector(".menu-btn").addEventListener("click", function () {
        document.querySelector(".navbar .menu").classList.toggle("active");
        document.querySelector(".menu-btn i").classList.toggle("active");
    });

    // typing text animation script
    var typed1 = new Typed(".typing", {
        strings: ["Developer", "Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["Developer", "Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    // owl carousel script
    var owl = document.querySelector(".carousel");
    if (owl) {
        new OwlCarousel({
            margin: 20,
            loop: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                600: {
                    items: 2,
                    nav: false,
                },
                1000: {
                    items: 3,
                    nav: false,
                },
            },
        });
    }
});
