import throttle from 'lodash.throttle';


const formData = {};

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('submit', onFormSubmit);

formEl.addEventListener('input', throttle(onInput, 500));

function onInput(event) {
    const name = event.target.name;
    const value = event.target.value;

    formData[name] = value;

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(event) {
    event.preventDefault();

   
    populateForm()
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
    
 } 

function populateForm() {
    const savedForm = localStorage.getItem('feedback-form-state');

    if (savedForm) {
        const formState = JSON.parse(savedForm);
        formEl.email.value = formState.email;
        formEl.message.value = formState.message;
        console.log(formState);
    }
    
}

