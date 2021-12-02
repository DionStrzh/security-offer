const feedbackSubmitButton = document.querySelector('.feedback__submit');
const inputName = document.querySelector('input[name="name"]');
const inputPhone = document.querySelector('input[name="phone"]');

feedbackSubmitButton.addEventListener('click', (event) => {
  event.preventDefault();
  inputName.value = '';
  inputPhone.value = '';
});
