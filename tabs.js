const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.tab-panel');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const id = tab.dataset.tab;

    // Update tabs
    tabs.forEach((t) => {
      const isActive = t === tab;

      t.classList.toggle('active', isActive);
      t.setAttribute('aria-selected', isActive);
      t.setAttribute('tabindex', isActive ? '0' : '-1');
    });

    // Update panels
    panels.forEach((panel) => {
      const isActive = panel.dataset.panel === id;

      panel.classList.toggle('active', isActive);
      panel.hidden = !isActive;
    });
  });

  // Keyboard activation (Enter / Space)
  tab.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      tab.click();
    }
  });
});
