document.getElementById('js-form').addEventListener('click', contact);
contact.js
const showError = (id, error) => {
  const element = document.getElementById(id);
  error ? element.classList.add('error') : element.classList.remove('error');
};
const contact = (event) => {
  event.preventDefault();
  console.log(event);
  const form = new FormData(event.target);
  const fullName = form.get('Full Name');
  console.log(fullName);
  const companyName = form.get('Company Name');
  console.log(companyName);
  const email = form.get('email');
  console.log(email);
  const message = form.get('message');
  console.log(message);
  const generateId = (name) => {
    return `js-form-${name}`;
  };
  showError(generateId('full-name'), !fullName);
  showError(generateId('company-name'), !companyName);
  showError(generateId('email'), !email);
  showError(generateId('message'), !message);
};
export { contact };