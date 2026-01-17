const tabs = document.querySelector('.tabs');

tabs.addEventListener('click', (e) => {
  const button = e.target.closest('.tab-button');

  if (!button || !tabs.contains(button)) return;

  const target = button.dataset.tab;

  const panel = tabs.querySelector(`.tab-panel[data-panel="${target}"]`);

  if (!panel) return;

  tabs
    .querySelectorAll('.tab-button')
    .forEach((btn) => btn.classList.remove('active'));

  // reset panels
  tabs
    .querySelectorAll('.tab-panel')
    .forEach((p) => p.classList.remove('active'));

  button.classList.add('active');
  panel.classList.add('active');
});
