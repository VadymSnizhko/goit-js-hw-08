
const form = document.querySelector(".login-form");

form.querySelectorAll("input").forEach(input => {
    input.addEventListener("focus", function () {
        this.placeholder = "Type area"; 
    });

    input.addEventListener("blur", function () {
        this.placeholder = ""; 
    });
});

form.addEventListener("submit",handleForm);

function handleForm(event){
    event.preventDefault();

    const elementsOnForm = event.target.elements;

    const loginValue = {
        email: elementsOnForm.email.value.trim(),
        pass: elementsOnForm.password.value.trim()
    }
    if(loginValue.email.length && loginValue.pass.length){
        console.log(loginValue);
        form.reset(); 
    }else{
        alert('All form fields must be filled in');
    }
}

