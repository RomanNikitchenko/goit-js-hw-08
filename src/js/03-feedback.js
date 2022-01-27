import throttle from 'lodash.throttle';

const STORAGE_kEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.js-feedback-form'),
    textarea: document.querySelector('.js-feedback-form  textarea'),
    input: document.querySelector('.js-feedback-form  input'),
}

refs.form.addEventListener('submit', onFormSubmit);

populateTextarea();

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_kEY);
}


function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_kEY)

    if (savedMessage) {

        const jsonParse = JSON.parse(savedMessage);

        if (jsonParse.email && jsonParse.message) {
            refs.input.value = jsonParse.email;
            refs.textarea.value = jsonParse.message;
        } else if (jsonParse.email) {
            refs.input.value = jsonParse.email;
        } else if (jsonParse.message) {
            refs.textarea.value = jsonParse.message;
        }

    }
}


const formData = {};

refs.form.addEventListener('input', (e) => {
    formData[e.target.name] = e.target.value;

    const formDataJSON = JSON.stringify(formData);

    localStorage.setItem(STORAGE_kEY, formDataJSON);
})
