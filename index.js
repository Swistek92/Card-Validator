import { CheckCardNumber } from './Check-Card-Number.js';

const name = document.getElementById('name');
const out = document.getElementById('out');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  try {
    out.innerHTML = CheckCardNumber(name.value);
    out.classList.add('alert-primary', 'alert');
    out.classList.remove('alert-danger');
  } catch (error) {
    out.innerHTML = error.message;
    out.classList.add('alert-danger', 'alert');
    out.classList.remove('alert-primary');
  }

  if (out.value === '') {
    out.style.display = 'none';
  } else {
    out.style.display = 'block';
  }
});
