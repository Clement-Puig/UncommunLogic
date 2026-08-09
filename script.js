const hours = document.querySelector('#hours');
const people = document.querySelector('#people');
const hoursValue = document.querySelector('#hoursValue');
const peopleValue = document.querySelector('#peopleValue');
const result = document.querySelector('#result');

function updateEstimate() {
  hoursValue.value = hours.value;
  peopleValue.value = people.value;
  result.value = Math.round(Number(hours.value) * Number(people.value) * 0.6);
}

hours.addEventListener('input', updateEstimate);
people.addEventListener('input', updateEstimate);

document.querySelector('#contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const subject = encodeURIComponent('Demande de diagnostic - ' + data.get('name'));
  const body = encodeURIComponent(data.get('message') + '\n\nContact : ' + data.get('email'));
  document.querySelector('#formStatus').textContent = 'Ouverture de votre messagerie…';
  window.location.href = `mailto:bonjour@uncommonlogic.fr?subject=${subject}&body=${body}`;
});
