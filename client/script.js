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
