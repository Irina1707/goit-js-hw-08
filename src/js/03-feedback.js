import throttle from 'lodash.throttle';


const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('submit', onFormSubmit);

formEl.addEventListener('input', throttle(onInput, 500));



 
function onInput(event) {
    const name = event.target.name;
    const value = event.target.value;

    formData[name] = value;

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

populateForm();

let formData = {};
if (localStorage.getItem("feedback-form-state")) {
    formData =  JSON.parse(localStorage.getItem("feedback-form-state"))
} 

function onFormSubmit(event) {
    event.preventDefault();

    event.currentTarget.reset();

    if (localStorage.getItem('feedback-form-state')) {
        console.log(formData);
    }
    localStorage.removeItem('feedback-form-state');
    //console.log(formData);
    formData = {};
 }

function populateForm() {
    const savedForm = localStorage.getItem('feedback-form-state');

         if (savedForm) {
        const formState = JSON.parse(savedForm);
        if (formState.email) {formEl.email.value = formState.email;} 
    if (formState.message) {formEl.message.value = formState.message;}
        console.log(formState);
    } 
    
}