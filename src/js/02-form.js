
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const emailInput = form.elements.email;
const messageInput = form.elements.message;

function loadFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    emailInput.value = email || '';
    messageInput.value = message || '';
  }
}

function saveFormData() {
  const formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function clearForm() {
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function handleSubmit(event) {
  event.preventDefault();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
  if (email === '' || message === '') {
    alert('Lütfen tüm alanları doldurunuz.');
    return;
  }
  console.log({ email, message });
  clearForm();
}

form.addEventListener('input', saveFormData);
form.addEventListener('submit', handleSubmit);

document.addEventListener('DOMContentLoaded', loadFormData);







