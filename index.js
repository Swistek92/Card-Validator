import checkCardNumber from './validator';

const name = document.getElementById('name');
const out = document.getElementById('out');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  out.innerHTML = checkCardNumber(name.value);

  if (out.value === '') {
    out.style.display = 'none';
  } else {
    out.style.display = 'block';
  }

  if (out.textContent.startsWith('Err')) {
    out.classList.add('alert-danger', 'alert');
    out.classList.remove('alert-primary');
  } else {
    out.classList.add('alert-primary', 'alert');
    out.classList.remove('alert-danger');
  }
});
