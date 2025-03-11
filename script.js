let isEnglish = true;

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const themeIcon = document.getElementById('theme-icon');
    themeIcon.textContent = document.body.classList.contains('dark-theme') ? '🌙' : '☀️';
}

function toggleLanguage() {
    isEnglish = !isEnglish;

    updateLanguage();
}

function updateLanguage() {
    const pageTitle = document.getElementById('page-title');
    const heroText = document.querySelector('.hero h1');
    const heroDescription = document.querySelector('.hero p');
    const aboutTitle = document.querySelector('.about h2');
    const aboutParagraphs = document.querySelectorAll('.about p');
    const projectsTitle = document.querySelector('.projects h2');
    const projectTitle = document.querySelector('.project h3');
    const projectDescription = document.querySelector('.project p');
    const languageIcon = document.getElementById('language-icon');
    const socialsTitle = document.getElementById("socials-title");

    if (isEnglish) {
        pageTitle.textContent = "Helaney";
        heroText.textContent = "Hello! I'm Helaney";
        heroDescription.textContent = "Let the world live by its own rules, and I will live by the call of my heart.";
        aboutTitle.textContent = "About Me";
        aboutParagraphs[0].textContent = "🔞Age: 16";
        aboutParagraphs[1].textContent = "🎂Birthday: 27.05";
        aboutParagraphs[2].textContent = "🌍Country: Russia";
        aboutParagraphs[3].textContent = "🪤Aspiring to become: Programmer";
        projectsTitle.textContent = "My Projects";
        projectTitle.textContent = "Yoro";
        projectDescription.textContent = "A multifunctional bot for Discord with cool features.";
        languageIcon.textContent = "🇬🇧 / 🇷🇺";
        socialsTitle.textContent = "Socials";
    } else {
        pageTitle.textContent = "Helaney";
        heroText.textContent = "Привет! Я - Helaney";
        heroDescription.textContent = "Пусть мир живёт по своим правилам, а я - буду жить по зову сердца.";
        aboutTitle.textContent = "Обо мне";
        aboutParagraphs[0].textContent = "🔞Возраст: 16";
        aboutParagraphs[1].textContent = "🎂День рождения: 27.05";
        aboutParagraphs[2].textContent = "🌍Страна: Россия";
        aboutParagraphs[3].textContent = "🪤Планирую стать: Программистом";
        projectsTitle.textContent = "Мои проекты";
        projectTitle.textContent = "Yoro";
        projectDescription.textContent = "Многофункциональный бот для Discord с крутыми возможностями.";
        languageIcon.textContent = "🇷🇺 / 🇬🇧";
        socialsTitle.textContent = "Социализация";
    }
}

function checkVisibility() {
    const sections = document.querySelectorAll('.hero, .about, .projects, .socials, .social-buttons');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', () => {
    checkVisibility();
    updateLanguage();
});