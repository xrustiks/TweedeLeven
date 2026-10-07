const translations = {
  en: {
    'brand.tagline': 'washing machine repair service',
    'nav.services': 'Services',
    'nav.prices': 'Price',
    'nav.contact': 'Contact',
    'hero.title': 'Washing Machine Repair at Home',
    'hero.subtitle': 'Fast and accurate. You pay only for result. Calling a machine repairman is free',
    'hero.cta': 'Make a call',
    'services.heading': 'Popular services',
    'services.notDraining.title': 'Not draining water',
    'services.notDraining.text': 'Cleaning/replacing the pump and filters',
    'services.notHeating.title': 'Not heating water',
    'services.notHeating.text': 'Replacing the heating element and sensors',
    'services.noise.title': 'Loud noise',
    'services.noise.text': 'Bearings, shock absorbers',
    'prices.heading': 'Approximate prices',
    'prices.diagnostics.title': 'Diagnostics',
    'prices.diagnostics.text': 'Free with repair',
    'prices.diagnostics.price': 'From €60',
    'prices.repair.title': 'Repair',
    'prices.repair.text': 'Depending on complexity',
    'prices.repair.price': 'From €60',
    'order.heading': 'Order Repair',
    'order.description': 'Fast on-site repair. Click the button below to view contact options.',
    'order.button': 'Order repair',
    'modal.title': 'Order Repair — Contact Us',
    'modal.subtitle': 'Choose a convenient way to reach us.',
    'contact.call.title': 'Call us',
    'contact.email.title': 'Email',
    'contact.address.title': 'Address',
    'contact.address.sub': 'Keizersgracht 123, Amsterdam',
    'copy.success': 'Copied!'
  },
  ru: {
    'brand.tagline': 'сервис ремонта стиральных машин',
    'nav.services': 'Услуги',
    'nav.prices': 'Цены',
    'nav.contact': 'Контакты',
    'hero.title': 'Ремонт стиральных машин на дому',
    'hero.subtitle': 'Быстро и точно. Вы платите только за результат. Вызов мастера бесплатный',
    'hero.cta': 'Позвонить',
    'services.heading': 'Популярные услуги',
    'services.notDraining.title': 'Не сливает воду',
    'services.notDraining.text': 'Чистка/замена насоса и фильтров',
    'services.notHeating.title': 'Не нагревает воду',
    'services.notHeating.text': 'Замена тэна и датчиков',
    'services.noise.title': 'Громкий шум',
    'services.noise.text': 'Подшипники, амортизаторы',
    'prices.heading': 'Примерные цены',
    'prices.diagnostics.title': 'Диагностика',
    'prices.diagnostics.text': 'Бесплатно при ремонте',
    'prices.diagnostics.price': 'От €60',
    'prices.repair.title': 'Ремонт',
    'prices.repair.text': 'В зависимости от сложности',
    'prices.repair.price': 'От €60',
    'order.heading': 'Заказать ремонт',
    'order.description': 'Быстрый выездной ремонт. Нажмите кнопку ниже, чтобы посмотреть варианты связи.',
    'order.button': 'Заказать ремонт',
    'modal.title': 'Заказать ремонт — Свяжитесь с нами',
    'modal.subtitle': 'Выберите удобный способ связи.',
    'contact.call.title': 'Позвонить',
    'contact.email.title': 'Email',
    'contact.address.title': 'Адрес',
    'contact.address.sub': 'Кейзерсграхт 123, Амстердам',
    'copy.success': 'Скопировано!'
  },
  nl: {
    'brand.tagline': 'service voor reparatie van wasmachines',
    'nav.services': 'Diensten',
    'nav.prices': 'Prijs',
    'nav.contact': 'Contact',
    'hero.title': 'Reparatie van wasmachines thuis',
    'hero.subtitle': 'Snel en nauwkeurig. U betaalt alleen voor het resultaat. Een monteur bellen is gratis',
    'hero.cta': 'Bel nu',
    'services.heading': 'Populaire diensten',
    'services.notDraining.title': 'Loopt niet af',
    'services.notDraining.text': 'Reinigen/vervangen van pomp en filters',
    'services.notHeating.title': 'Verwarmt niet',
    'services.notHeating.text': 'Vervangen van verwarmingselement en sensoren',
    'services.noise.title': 'Lawaai',
    'services.noise.text': 'Lagers, schokdempers',
    'prices.heading': 'Geschatte prijzen',
    'prices.diagnostics.title': 'Diagnose',
    'prices.diagnostics.text': 'Gratis bij reparatie',
    'prices.diagnostics.price': 'Vanaf €60',
    'prices.repair.title': 'Reparatie',
    'prices.repair.text': 'Afhankelijk van de complexiteit',
    'prices.repair.price': 'Vanaf €60',
    'order.heading': 'Reparatie bestellen',
    'order.description': 'Snelle on-site reparatie. Klik op de knop hieronder om contactopties te bekijken.',
    'order.button': 'Reparatie bestellen',
    'modal.title': 'Reparatie bestellen — Neem contact op',
    'modal.subtitle': 'Kies een handige manier om contact met ons op te nemen.',
    'contact.call.title': 'Bel ons',
    'contact.email.title': 'E-mail',
    'contact.address.title': 'Adres',
    'contact.address.sub': 'Keizersgracht 123, Amsterdam',
    'copy.success': 'Gekopieerd!'
  }
};

const currentLanguage = { value: 'en' };

function applyLanguage(lang) {
  const selected = translations[lang] || translations.en;
  currentLanguage.value = lang;

  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    const value = selected[key];
    if (value) node.textContent = value;
  });

  document.querySelectorAll('.lang-btn').forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  const emailCopyText = document.querySelector('.contact-email-text');
  if (emailCopyText && !emailCopyBtn?.classList.contains('is-copied')) {
    const originalText = emailCopyText.dataset.original || emailCopyText.textContent;
    emailCopyText.dataset.original = originalText;
    emailCopyText.textContent = originalText;
  }
}

// Update the year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Toggle order block
const showBtn = document.getElementById('show-order-btn');
const orderBlock = document.getElementById('order-block');

if (showBtn && orderBlock) {
  showBtn.addEventListener('click', () => {
    const isHidden = getComputedStyle(orderBlock).display === 'none';
    orderBlock.style.display = isHidden ? 'block' : 'none';
    showBtn.textContent = isHidden ? 'Hide details' : 'Order repair';
  });
}

// Modal handling
const openModalBtn = document.getElementById('open-contact-modal');
const navContactBtn = document.getElementById('nav-contact-btn');
const contactModal = document.getElementById('contact-modal');
const modalClose = document.getElementById('modal-close');
const modalBackdrop = document.getElementById('modal-backdrop');
const emailCopyBtn = document.querySelector('.contact-email');
const addressCopyBtn = document.querySelector('.contact-address');

function showModal(show = true) {
  if (!contactModal) return;
  contactModal.style.display = show ? 'flex' : 'none';
  contactModal.setAttribute('aria-hidden', show ? 'false' : 'true');
}

if (openModalBtn) {
  openModalBtn.addEventListener('click', () => showModal(true));
}

if (navContactBtn) {
  navContactBtn.addEventListener('click', (event) => {
    event.preventDefault();
    showModal(true);
  });
}

if (emailCopyBtn) {
  const emailTextElement = emailCopyBtn.querySelector('.contact-email-text');
  const emailValue = emailCopyBtn.dataset.email || 'info@tweedeleven.example';
  let resetTimer;

  if (emailTextElement && !emailTextElement.dataset.original) {
    emailTextElement.dataset.original = emailTextElement.textContent;
  }

  const showCopiedState = () => {
    if (!emailTextElement) return;

    const originalText = emailTextElement.dataset.original || emailTextElement.textContent;
    emailTextElement.dataset.original = originalText;
    emailTextElement.textContent = translations[currentLanguage.value]['copy.success'];
    emailTextElement.setAttribute('aria-live', 'polite');
    emailCopyBtn.classList.add('is-copied');

    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => {
      emailTextElement.textContent = originalText;
      emailCopyBtn.classList.remove('is-copied');
    }, 1000);
  };

  emailCopyBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(emailValue);
      } else {
        const helper = document.createElement('textarea');
        helper.value = emailValue;
        document.body.appendChild(helper);
        helper.select();
        document.execCommand('copy');
        document.body.removeChild(helper);
      }
    } catch (error) {
      console.warn('Clipboard copy failed; showing visual feedback anyway.', error);
      try {
        const helper = document.createElement('textarea');
        helper.value = emailValue;
        document.body.appendChild(helper);
        helper.select();
        document.execCommand('copy');
        document.body.removeChild(helper);
      } catch (fallbackError) {
        console.warn('Fallback copy also failed.', fallbackError);
      }
    } finally {
      showCopiedState();
    }
  });
}

if (addressCopyBtn) {
  const addressTextElement = addressCopyBtn.querySelector('.contact-address-text');
  const addressValue = addressCopyBtn.dataset.address || 'Keizersgracht 123, Amsterdam';
  let resetTimer;

  if (addressTextElement && !addressTextElement.dataset.original) {
    addressTextElement.dataset.original = addressTextElement.textContent;
  }

  const showAddressCopiedState = () => {
    if (!addressTextElement) return;

    const originalText = addressTextElement.dataset.original || addressTextElement.textContent;
    addressTextElement.dataset.original = originalText;
    addressTextElement.textContent = translations[currentLanguage.value]['copy.success'];
    addressTextElement.setAttribute('aria-live', 'polite');
    addressCopyBtn.classList.add('is-copied');

    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => {
      addressTextElement.textContent = originalText;
      addressCopyBtn.classList.remove('is-copied');
    }, 1000);
  };

  addressCopyBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(addressValue);
      } else {
        const helper = document.createElement('textarea');
        helper.value = addressValue;
        document.body.appendChild(helper);
        helper.select();
        document.execCommand('copy');
        document.body.removeChild(helper);
      }
    } catch (error) {
      console.warn('Clipboard copy failed; showing visual feedback anyway.', error);
      try {
        const helper = document.createElement('textarea');
        helper.value = addressValue;
        document.body.appendChild(helper);
        helper.select();
        document.execCommand('copy');
        document.body.removeChild(helper);
      } catch (fallbackError) {
        console.warn('Fallback copy also failed.', fallbackError);
      }
    } finally {
      showAddressCopiedState();
    }
  });
}

const languageButtons = document.querySelectorAll('.lang-btn');
languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    applyLanguage(button.dataset.lang);
  });
});

applyLanguage('nl');

if (modalClose) modalClose.addEventListener('click', () => showModal(false));
if (modalBackdrop) modalBackdrop.addEventListener('click', () => showModal(false));

// close on escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') showModal(false);
});
