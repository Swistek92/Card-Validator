<<<<<<< HEAD
import { CheckCardNumber } from './Check-Card-Number';
=======
import checkCardNumber from './validator.js';
>>>>>>> cb4ffade3a6a8e114c8b18fdfe4b36b1014c4a0c

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
