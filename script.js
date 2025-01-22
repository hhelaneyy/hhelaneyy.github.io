document.addEventListener("DOMContentLoaded", () => {
    // Переключение темы
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

    // Анимация появления основных элементов
    const mainElements = document.querySelectorAll(".main, .main img, .main h1");

    mainElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.3}s`;
        element.classList.add("fade-in");
    });

    // Анимация появления при скролле
    const scrollElements = document.querySelectorAll(".scroll-fade-in");

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

document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    // Проверка сохранённой темы
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
        updateThemeToggle(savedTheme);
    } else {
        body.classList.add("light");
    }

    // Переключение темы
    themeToggleButton.addEventListener("click", () => {
        const currentTheme = body.classList.contains("light") ? "light" : "dark";
        const newTheme = currentTheme === "light" ? "dark" : "light";
        body.classList.replace(currentTheme, newTheme);
        localStorage.setItem("theme", newTheme);
        updateThemeToggle(newTheme);
    });

    function updateThemeToggle(theme) {
        themeToggleButton.textContent = theme === "light" ? "🌙" : "☀️";
    }
});