//without debounce
// const fruits = [
//   'Apple',
//   'Banana',
//   'Mango',
//   'Orange',
//   'Grapes',
//   'Pineapple',
//   'Papaya',
//   'Strawberry',
//   'Blueberry',
// ];

// const input = document.getElementById('searchInput');
// const results = document.getElementById('results');

// input.addEventListener('input', (e) => {
//   const query = e.target.value.toLowerCase();

//   results.innerHTML = '';

//   const filtered = fruits.filter((fruit) =>
//     fruit.toLowerCase().includes(query),
//   );

//   filtered.forEach((fruit) => {
//     const li = document.createElement('li');
//     li.textContent = fruit;
//     results.appendChild(li);
//   });
// });

//WITH DEBOUNCE

function debounce(fn, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const fruits = [
  'Apple',
  'Banana',
  'Banana',
  'Mango',
  'Orange',
  'Grapes',
  'Pineapple',
  'Papaya',
  'Strawberry',
  'Blueberry',
];

const input = document.getElementById('searchInput');
const results = document.getElementById('results');
const status = document.getElementById('status');

function highlightMatch(text, query) {
  const index = text.toLowerCase().indexOf(query.toLowerCase());

  if (index === -1) return text;

  const before = text.slice(0, index);
  const match = text.slice(index, index + query.length);
  const after = text.slice(index + query.length);

  return `${before}<mark>${match}</mark>${after}`;
}

function search(query) {
  results.innerHTML = '';

  if (!query) {
    status.textContent = 'Waiting…';
    return;
  }

  const filtered = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(query.toLowerCase()),
  );

  filtered.forEach((fruit) => {
    const li = document.createElement('li');
    li.textContent = fruit;
    results.appendChild(li);
  });

  status.textContent = `Found ${filtered.length} result(s)`;
}

const debouncedSearch = debounce(search, 400);
input.addEventListener('input', (e) => {
  status.textContent = 'Typing…';
  debouncedSearch(e.target.value);
});
