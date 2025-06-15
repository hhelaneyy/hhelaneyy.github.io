const translations = {
  ru: {
    page_title: "Helaney",
    nav_home: "Главная",
    nav_projects: "Проекты",
    nav_contacts: "Контакты",
    home_name: "Helaney",
    home_title: "Начинающий разработчик",
    home_desc: "Свежеиспечённый программист. Специализируюсь на создании простых Discord ботов и нетрудных программ.",
    projects_title: "Проекты",
    project_pixel_name: "Pixel",
    project_pixel_desc: "Устаревший Discord бот, который мог модерировать ваши сервера и развлекать участников.",
    project_mayson_name: "Mayson",
    project_mayson_desc: "Устаревший Discord бот, который являлся более дегроидной версией Pixel.",
    project_yoro_name: "Yoro",
    project_yoro_desc: "Чат-бот, нацеленный на улучшение пребывания на серверах Discord, а также для взаимодействия с нейросетями и развлечением.",
    project_helanova_name: "Helanova Team",
    project_helanova_desc: "Команда по разработке Discord ботов, игр и приложений. Только начинает свой путь в этой индустрии.",
    more_details: "Подробнее →",
    contacts_title: "Контакты",
    email_title: "Email",
    availability: "Доступность",
    availability_time: "Пн-Пт, 11:00 – 18:00",
    modal_title: "💔 Ой-ой!",
    private_project: "Этот проект является приватным и недоступен для просмотра на Github.",
    footer_text: "© 2025, сделано с ❤️ Helaney.",
    telegram: "Telegram",
    github: "GitHub"
  },
  en: {
    page_title: "Helaney",
    nav_home: "Home",
    nav_projects: "Projects",
    nav_contacts: "Contacts",
    home_name: "Helaney",
    home_title: "Beginner developer",
    home_desc: "Freshly baked programmer. I specialize in creating simple Discord bots and easy programs.",
    projects_title: "Projects",
    project_pixel_name: "Pixel",
    project_pixel_desc: "Outdated Discord bot that could moderate your servers and entertain members.",
    project_mayson_name: "Mayson",
    project_mayson_desc: "Outdated Discord bot that was a more degraded version of Pixel.",
    project_yoro_name: "Yoro",
    project_yoro_desc: "Chat bot aimed at improving the experience on Discord servers, as well as for interacting with neural networks and entertainment.",
    project_helanova_name: "Helanova Team",
    project_helanova_desc: "A team developing Discord bots, games and applications. Just starting out in this industry.",
    more_details: "Details →",
    contacts_title: "Contacts",
    email_title: "Email",
    availability: "Availability",
    availability_time: "Mon-Fri, 11:00 AM – 6:00 PM",
    modal_title: "💔 Oops!",
    private_project: "This project is private and not available on Github.",
    footer_text: "© 2025, made with ❤️ by Helaney.",
    telegram: "Telegram",
    github: "GitHub"
  }
};

const langBtn = document.getElementById('lang-btn');
let currentLang = localStorage.getItem('appLanguage') || 'ru';

  function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = translations[lang][key] || el.textContent;
    });
      
    langBtn.textContent = lang === 'ru' ? '🇷🇺' : '🇬🇧';
  }

  langBtn.addEventListener('click', function() {
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    localStorage.setItem('appLanguage', currentLang);
    applyTranslations(currentLang);
  });

  applyTranslations(currentLang);

const modalTriggers = document.querySelectorAll('.more');
const modals = {
  'Pixel': document.getElementById('pixel-modal'),
  'Yoro': document.getElementById('yoro-modal')
};
const closeButtons = document.querySelectorAll('.close');

modalTriggers.forEach(trigger => {
  trigger.addEventListener('click', function(e) {
    e.preventDefault();
    const projectName = this.closest('.card').querySelector('h3').textContent;
    if (modals[projectName]) {
      modals[projectName].style.display = 'block';
      document.body.style.overflow = 'hidden';
    }
  });
});

closeButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    this.closest('.modal').style.display = 'none';
    document.body.style.overflow = 'auto';
  });
});

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

const backToTopBtn = document.getElementById('back-to-top');
let lastScrollPosition = 0;
let scrollDirection = 'down';
let animationFrame;

function handleScroll() {
  const currentScroll = window.pageYOffset;
  
  scrollDirection = currentScroll > lastScrollPosition ? 'down' : 'up';
  lastScrollPosition = currentScroll;

  if (currentScroll > 300) {
    if (scrollDirection === 'down') {
      backToTopBtn.classList.add('visible');
      backToTopBtn.classList.remove('animated');
    } else {
      backToTopBtn.classList.add('visible', 'animated');
    }
  } else {
    backToTopBtn.classList.remove('visible');
  }
  
  animationFrame = requestAnimationFrame(handleScroll);
}

backToTopBtn.addEventListener('click', () => {
  backToTopBtn.style.transform = 'scale(0.9)';
  backToTopBtn.style.opacity = '0.7';
  
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, 150);
  
  setTimeout(() => {
    backToTopBtn.classList.remove('visible');
  }, 500);
});

function initScrollHandler() {
  cancelAnimationFrame(animationFrame);
  animationFrame = requestAnimationFrame(handleScroll);
}

window.addEventListener('scroll', initScrollHandler, { passive: true });

document.addEventListener('DOMContentLoaded', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add('visible');
  }
});

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

langBtn.addEventListener('click', function() {
  console.log('Кнопка нажата!');
});