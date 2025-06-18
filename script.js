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
    cont_projects_title: "Участвую в проектах",
    my_projects_title: "Мои проекты",
    project_pixel_name: "Pixel",
    project_pixel_desc: "Устаревший Discord бот, который мог модерировать ваши сервера и развлекать участников.",
    project_mayson_name: "Mayson",
    project_mayson_desc: "Устаревший Discord бот, который являлся более дегроидной версией Pixel.",
    project_yoro_name: "Yoro",
    project_yoro_desc: "Чат-бот для модерации, генерации изображений нейросетью, развлечений и гибких настроек – ваш идеальный помощник на Discord.",
    project_helanova_name: "Helanova Team",
    project_helanova_desc: "Команда по разработке Discord ботов, игр и приложений. Только начинает свой путь в этой индустрии.",
    project_heypers_desc: "Мультипроект, объединяющий управление, менеджмент, модерацию и разработку.",
    more_details: "Подробнее →",
    contacts_title: "Контакты",
    email_title: "Email",
    availability: "Доступность",
    availability_time: "Пн-Пт, 11:00 – 18:00",
    modal_title: "💔 Ой-ой!",
    private_project: "Этот проект является приватным и недоступен для просмотра на Github, но уже скоро станет публичным!",
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
    home_title: "Junior developer",
    home_desc: "Fresh-baked programmer. I specialize in creating simple Discord bots and easy programs.",
    projects_title: "Projects",
    cont_projects_title: "Contribute in projects",
    my_projects_title: "My projects",
    project_pixel_name: "Pixel",
    project_pixel_desc: "Outdated Discord bot that could moderate your servers and entertain members.",
    project_mayson_name: "Mayson",
    project_mayson_desc: "Outdated Discord bot that was a more degraded version of Pixel.",
    project_yoro_name: "Yoro",
    project_yoro_desc: "Chat bot for moderation, AI image generation, entertainment and flexible settings - your ultimate Discord assistant.",
    project_helanova_name: "Helanova Team",
    project_helanova_desc: "A team developing Discord bots, games and applications. Just starting out in this industry.",
    project_heypers_desc: "A multi-project combining management, administration, moderation and development.",
    more_details: "Details →",
    contacts_title: "Contacts",
    email_title: "Email",
    availability: "Availability",
    availability_time: "Mon-Fri, 11:00 AM – 6:00 PM",
    modal_title: "💔 Oops!",
    private_project: "This project is private and not available for viewing on Github, but will be public soon!",
    footer_text: "© 2025, made with ❤️ by Helaney.",
    telegram: "Telegram",
    github: "GitHub"
  }
};

// Инициализация перевода
function initLanguageSwitcher() {
  const langBtn = document.getElementById('lang-btn');
  if (!langBtn) return;

  // Получаем сохраненный язык или используем русский по умолчанию
  let currentLang = localStorage.getItem('appLanguage') || 'ru';

  // Функция применения переводов
  function applyTranslations(lang) {
    // Обновляем все элементы с атрибутом data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });

    // Обновляем флаг на кнопке
    const flagElement = langBtn.querySelector('.flag');
    if (flagElement) {
      flagElement.textContent = lang === 'ru' ? '🇷🇺' : '🇬🇧';
    }

    // Обновляем title страницы
    document.title = translations[lang].page_title;
  }

  // Обработчик клика по кнопке
  langBtn.addEventListener('click', () => {
    // Переключаем язык
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    
    // Сохраняем в localStorage
    localStorage.setItem('appLanguage', currentLang);
    
    // Применяем перевод
    applyTranslations(currentLang);
  });

  // Применяем перевод при загрузке
  applyTranslations(currentLang);
}

// Инициализация модальных окон
function initModals() {
  document.querySelectorAll('.more[data-modal]').forEach(trigger => {
    trigger.addEventListener('click', function(e) {
      e.preventDefault();
      const modalId = this.dataset.modal;
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
      }
    });
  });

  document.querySelectorAll('.close, .modal').forEach(el => {
    el.addEventListener('click', function() {
      document.querySelectorAll('.modal').forEach(m => {
        m.style.display = 'none';
      });
      document.body.style.overflow = 'auto';
    });
  });
}

// Инициализация кнопки "Наверх"
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  let lastScrollPosition = 0;
  let scrollDirection = 'down';
  let animationFrame;

  function handleScroll() {
    const currentScroll = window.pageYOffset;
    scrollDirection = currentScroll > lastScrollPosition ? 'down' : 'up';
    lastScrollPosition = currentScroll;

    if (currentScroll > 300) {
      backToTopBtn.classList.add('visible');
      if (scrollDirection === 'up') {
        backToTopBtn.classList.add('animated');
      } else {
        backToTopBtn.classList.remove('animated');
      }
    } else {
      backToTopBtn.classList.remove('visible', 'animated');
    }
    
    animationFrame = requestAnimationFrame(handleScroll);
  }

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('scroll', () => {
    cancelAnimationFrame(animationFrame);
    animationFrame = requestAnimationFrame(handleScroll);
  }, { passive: true });
}

// Инициализация липкого хедера
function initStickyHeader() {
  const header = document.querySelector('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
}

// Инициализация всех функций после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initModals();
  initBackToTop();
  initStickyHeader();

  // Выделение карточки Pixel
  const pixelCard = Array.from(document.querySelectorAll('.card')).find(card => {
    const title = card.querySelector('h3');
    return title && title.textContent.trim() === 'Pixel';
  });
  
  if (pixelCard) {
    pixelCard.classList.add('highlight-pixel');
  }
});