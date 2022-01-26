import throttle from 'lodash.throttle';

const STORAGE_kEY = 'valueInput';

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form  textarea'),
};

refs.form.addEventListener('submit', onFormSubmit)

refs.textarea.addEventListener('input', throttle(onTextareaInput, 1000))

populateTextarea()


function onFormSubmit(evt) {
    evt.preventDefault();

    evt.currentTarget.reset();

    localStorage.removeItem(STORAGE_kEY);
}


function onTextareaInput(evt) {
    const massage = evt.target.value

    localStorage.setItem(STORAGE_kEY, massage)
}


function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_kEY)

    if (savedMessage) {
        refs.textarea.value = savedMessage;
    }
}
