// let buttons = document.querySelectorAll('.tab-button');
// let panels = document.querySelectorAll('.tab-panel');

// buttons.forEach((button, index) => {
//   button.addEventListener('click', () => {
//     //remove active from all buttons
//     buttons.forEach((btn) => btn.classList.remove('active'));

//     //remove active from all panels
//     panels.forEach((panel) => panel.classList.remove('active'));

//     //add to clicked button
//     button.classList.add('active');
//     //activate matching panel

//     panels[index].classList.add('active');
//   });
// });
//WITHOUT RELYING ON DOM ORDER

let buttons = document.querySelectorAll('.tab-button');
let panels = document.querySelectorAll('.tab-panel');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.tab;

    //remove active from all buttons
    buttons.forEach((btn) => btn.classList.remove('active'));

    //remove active from all panels
    panels.forEach((panel) => panel.classList.remove('active'));

    //add to clicked button
    button.classList.add('active');

    document
      .querySelector(`.tab-panel[data-panel="${target}"]`)
      .classList.add('active');
  });
});
