import throttle from 'lodash.throttle';

const STORAGE_kEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.js-feedback-form'),
    textarea: document.querySelector('.js-feedback-form  textarea'),
    input: document.querySelector('.js-feedback-form  input'),
};


populateTextarea();

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();
    if (localStorage.getItem(STORAGE_kEY)) {
        formData.email = refs.input.value;
        formData.message = refs.textarea.value;
        console.log(formData);
    }
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_kEY);
};


function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_kEY)

    if (savedMessage) {
        const jsonParse = JSON.parse(savedMessage);

        const { email, message } = jsonParse;

        if (email && message) {
            refs.input.value = email
            refs.textarea.value = message
        } else if (email) {
            refs.input.value = email
        } else if (message) {
            refs.textarea.value = message
        }
    };
};


const formData = {};

refs.form.addEventListener('input', throttle(createObjectString, 500));

function createObjectString(e) {
    formData[e.target.name] = e.target.value;
    formData.email = refs.input.value;
    formData.message = refs.textarea.value;

    const formDataJSON = JSON.stringify(formData);

    localStorage.setItem(STORAGE_kEY, formDataJSON);
};
