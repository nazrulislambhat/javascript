// let openBtn = document.querySelector('.open');
// let wrapper = document.querySelector('.modal-wrapper');
// let closeBtn = document.querySelector('.close');

// openBtn.addEventListener('click', () => {
//   wrapper.classList.add('active');
// });

// closeBtn.addEventListener('click', () => {
//   wrapper.classList.remove('active');
// });
const overlay = document.querySelector('.modal-wrapper');
const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');

openBtn.addEventListener('click', () => {
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
});

overlay.addEventListener('click', (e) => {
  if (e.target !== overlay) return;
  overlay.classList.remove('active');
});

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('active');
});

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;

  const overlay = document.querySelector('.modal-wrapper');
  if (!overlay.classList.contains('active')) return;

  overlay.classList.remove('active');
  document.body.style.overflow = '';
});
