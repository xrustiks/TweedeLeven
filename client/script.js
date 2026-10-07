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

if (modalClose) modalClose.addEventListener('click', () => showModal(false));
if (modalBackdrop) modalBackdrop.addEventListener('click', () => showModal(false));

// close on escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') showModal(false);
});
