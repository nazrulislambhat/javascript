// // const tabs = document.querySelector('.tabs');

// // tabs.addEventListener('click', (e) => {
// //   const button = e.target.closest('.tab-button');

// //   if (!button || !tabs.contains(button)) return;
// //   const target = button.dataset.tab;
// //   const panel = tabs.querySelector(`.tab-panel[data-panel="${target}"]`);
// //   if (!panel) return;
// //   tabs
// //     .querySelectorAll('.tab-button')
// //     .forEach((btn) => btn.classList.remove('active'));

// //   tabs
// //     .querySelectorAll('.tab-panel')
// //     .forEach((p) => p.classList.remove('active'));
// //   button.classList.add('active');
// //   panel.classList.add('active');
// // });

// // const tabs = document.querySelector('.tabs');

// // tabs.addEventListener('click', (e) => {
// //   let button = e.target.closest('.tab-button');
// //   if (!button || !tabs.contains(button)) return;
// //   const target = button.dataset.tab;
// //   const panel = tabs.querySelector(`.tab-panel[data-panel="${target}"]`);
// //   tabs
// //     .querySelectorAll('.tab-button')
// //     .forEach((b) => b.classList.remove('active'));

// //   tabs
// //     .querySelectorAll('.tab-panel')
// //     .forEach((p) => p.classList.remove('active'));
// //   button.classList.add('active');
// //   panel.classList.add('active');
// // });

// const buttons = document.querySelectorAll('.tab-button');
// const panels = document.querySelectorAll('.tab-panel');
// const tabs = document.querySelector('.tabs');

// tabs.addEventListener('click', (e) => {
//   const button = e.target.closest('.tab-button');

//   let target = button.dataset.tab;

//   let panel = document.querySelector(`.tab-panel[data-panel="${target}"]`);
//   if (!button) return;
//   tabs
//     .querySelectorAll('.tab-button')
//     .forEach((b) => b.classList.remove('active'));

//   tabs
//     .querySelectorAll('.tab-panel')
//     .forEach((p) => p.classList.remove('active'));

//   button.classList.add('active');
//   panel.classList.add('active');
// });
// // buttons.forEach((button) => {
// //   button.addEventListener('click', () => {
// //     let target = button.dataset.tab;

// //     buttons.forEach((b) => b.classList.remove('active'));
// //     panels.forEach((p) => p.classList.remove('active'));

// //     button.classList.add('active');

// //     document
// //       .querySelector(`.tab-panel[data-panel="${target}"]`)
// //       .classList.add('active');
// //   });
// // });
