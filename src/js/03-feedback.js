import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

emailInput.addEventListener('input', throttle(onFormInput, 500));
messageInput.addEventListener('input', throttle(onFormInput, 500));

function onFormInput() {
  const formMessage = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formMessage));
}

const savedForm = localStorage.getItem(STORAGE_KEY);

// console.log(savedForm)

if (savedForm) {
  const parsedForm = JSON.parse(savedForm);
  emailInput.value = parsedForm.email;
  messageInput.value = parsedForm.message;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const formMessage = {
    email: emailInput.value,
    message: messageInput.value,
  };

  console.log(formMessage);
  localStorage.removeItem(STORAGE_KEY);

  e.currentTarget.reset();
});
