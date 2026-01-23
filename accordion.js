// // // const accordions = document.querySelectorAll('.accordion');

// // // accordions.forEach((accordion) => {

// // //   const button = accordion.querySelector('.button');

// // //   button.addEventListener('click', () => {
// // //     accordions.forEach((a) => a.classList.remove('active'));
// // //     accordion.classList.add('active');
// // //   });

// // // });
// // // const accordions = document.querySelectorAll('.accordion');

// // // accordions.forEach((acc) => {
// // //   const btn = acc.querySelector('.button');
// // //   btn.addEventListener('click', () => {
// // //     accordions.forEach((e) => e.classList.remove('active'));
// // //     acc.classList.toggle('active');
// // //   });
// // // });

// // //EVENT DELIGATION

// // const container = document.querySelector('.accordions');

// // container.addEventListener('click', (e) => {
// //   const button = e.target.closest('button');
// //   if (!button) return;

// //   const accordion = button.closest('.accordion');

// //   const isOpen = accordion.classList.contains('active');

// //   document.querySelectorAll('.accordion').forEach((acc) => {
// //     acc.classList.remove('active');
// //   });
// //   if (!isOpen) {
// //     accordion.classList.add('active');
// //   }
// // });

// const container = document.querySelector('.accordions');

// container.addEventListener('click', (e) => {
//   // BUG 1: incorrect selector usage
//   const button = e.target.closest('button');
//   if (!button) return;

//   // BUG 2: wrong DOM traversal
//   const accordion = button.closest('.accordion');

//   const isOpen = accordion.classList.contains('active');

//   accordion.classList.toggle('active');

//   // BUG 5: accessibility desync
//   button.setAttribute('aria-expanded', String(!isOpen));
// });

// const accordions = document.querySelectorAll('.accordion');
// accordions.forEach((accordion) => {
//   const button = accordion.querySelector('.button');

//   button.addEventListener('click', () => {
//     //accordions.forEach((a) => a.classList.remove('active'));
//     accordion.classList.toggle('active');
//   });
// });

const wrapper = document.querySelector('.accordions');

wrapper.addEventListener('click', (e) => {
  const button = e.target.closest('button');

  const accordion = button.closest('.accordion');

  //const isOpen = accordion.classList.contains('active');

  // document
  //   .querySelectorAll('.accordion')
  //   .forEach((acc) => acc.classList.remove('active'));

  accordion.classList.toggle('active');
});
