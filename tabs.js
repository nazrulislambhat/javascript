// // let buttons = document.querySelectorAll('.tab-button');
// // let panels = document.querySelectorAll('.tab-panel');

// // buttons.forEach((button, index) => {
// //   button.addEventListener('click', () => {
// //     //remove active from all buttons
// //     buttons.forEach((btn) => btn.classList.remove('active'));

// //     //remove active from all panels
// //     panels.forEach((panel) => panel.classList.remove('active'));

// //     //add to clicked button
// //     button.classList.add('active');
// //     //activate matching panel

// //     panels[index].classList.add('active');
// //   });
// // });
// //WITHOUT RELYING ON DOM ORDER

// let buttons = document.querySelectorAll('.tab-button');
// let panels = document.querySelectorAll('.tab-panel');

// buttons.forEach((button) => {
//   button.addEventListener('click', () => {
//     const target = button.dataset.tab;

//     //remove active from all buttons
//     buttons.forEach((btn) => btn.classList.remove('active'));

//     //remove active from all panels
//     panels.forEach((panel) => panel.classList.remove('active'));

//     //add to clicked button
//     button.classList.add('active');

//     document
//       .querySelector(`.tab-panel[data-panel="${target}"]`)
//       .classList.add('active');
//   });
// });

const tabs = document.querySelector('.tabs');

tabs.addEventListener('click', (e) => {
  const button = e.target.closest('.tab-button');

  //click wasnt on tab button

  if (!button || !tabs.contains(button)) return;

  const target = button.dataset.tab;

  const panel = tabs.querySelector(`.tab-panel[data-panel="${target}"]`);

  if (!panel) {
    console.error(`No Panel Found ${target}`);
  }

  tabs
    .querySelectorAll('.tab-button')
    .forEach((button) => button.classList.remove('active'));

  tabs
    .querySelectorAll('.tab-panel')
    .forEach((p) => p.classList.remove('active'));

  button.classList.add('active');
  panel.classList.add('active');
});
