document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("button");

    button.addEventListener("click", () => {
        document.body.classList.toggle("active");

        button.classList.add("button-icon-scale");
        setTimeout(() => {
            if (document.body.classList.contains("active")) {
                button.textContent = "☀️";
            } else {
                button.textContent = "🌙";
            }
            button.classList.remove("button-icon-scale");
        }, 200);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const mainElements = document.querySelectorAll('.main, .main img, .main h1');

    mainElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.3}s`;
        element.classList.add('fade-in');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll('.scroll-fade-in');

    const elementInView = (element, offset = 100) => {
        const elementTop = element.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("visible");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 150)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener("scroll", handleScrollAnimation);
    handleScrollAnimation();
});