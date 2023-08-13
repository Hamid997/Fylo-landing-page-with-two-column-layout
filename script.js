function isValidEmail(email) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

function validateEmail(input, errorElement, event) {
    input.classList.add("error");
    var email = input.value.trim();
    errorElement.textContent = "";

    if (!isValidEmail(email)) {
        errorElement.textContent = "Please check your email";
        event.preventDefault();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var emailInput = document.getElementById("email");
    var email2Input = document.getElementById("email2");

    var emailError = document.getElementById("emailError");
    var email2Error = document.getElementById("email2Error");

    document.querySelector(".hero-button").addEventListener("click", function(e) {
        validateEmail(emailInput, emailError, e);
    });

    document.querySelector(".hero-section-button").addEventListener("click", function(e) {
        validateEmail(email2Input, email2Error, e);
    });
});