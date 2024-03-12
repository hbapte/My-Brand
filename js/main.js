// Theme
document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    themeToggle.addEventListener("click", function() {
        body.classList.toggle("dark-theme");
    });
});


//Nav Menu

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



// Form Validation

function validateEmail(email) {
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

function validateForm(event) {
    event.preventDefault();

    var names = document.getElementById("names").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();
    var isValid = true;

    // Reset errors
    document.getElementById("namesError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";
    document.getElementById("names").classList.remove("invalid-input");
    document.getElementById("email").classList.remove("invalid-input");
    document.getElementById("message").classList.remove("invalid-input");

    

    // Validating names
    if (names === "") {
        document.getElementById("namesError").textContent = "Name(s) is required.";
        document.getElementById("namesError").style.display = "block";  
        document.getElementById("names").classList.add("invalid-input");
        isValid = false;
    } else if (names.length < 3 || !/^[a-zA-Z\s]*$/.test(names)) {
        document.getElementById("namesError").textContent = "Please enter a valid name with at least 3 characters.";
        document.getElementById("namesError").style.display = "block";  
        document.getElementById("names").classList.add("invalid-input");
        isValid = false;
    } else if (names.length > 50) {
        document.getElementById("namesError").textContent = "Name(s) should not exceed 50 characters.";
        document.getElementById("namesError").style.display = "block";  
        document.getElementById("names").classList.add("invalid-input");
        isValid = false;
    }

    // Validating email
    if (email === "") {
        document.getElementById("emailError").textContent = "Please enter your email.";
        document.getElementById("emailError").style.display = "block";  
        document.getElementById("email").classList.add("invalid-input");
        isValid = false;
    } else if (!validateEmail(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        document.getElementById("emailError").style.display = "block";  
        document.getElementById("email").classList.add("invalid-input");
        isValid = false;
    } else if (email.length > 100) {
        document.getElementById("emailError").textContent = "Email should not exceed 100 characters.";
        document.getElementById("emailError").style.display = "block";  
        document.getElementById("email").classList.add("invalid-input");
        isValid = false;
    }
    // Validating Message
    if (message === "") {
        document.getElementById("messageError").textContent = "Message can be empty.";
        document.getElementById("messageError").style.display = "block";
        document.getElementById("message").classList.add("invalid-input");
        isValid = false;   
    } else if (message.length < 20) {
        document.getElementById("messageError").textContent = "Message is too short. Please enter at least 20 characters.";
        document.getElementById("messageError").style.display = "block";
        document.getElementById("message").classList.add("invalid-input");
        isValid = false;   
    } else if (message.length > 1000) {
        document.getElementById("messageError").textContent = "Message should not exceed 1000 characters.";
        document.getElementById("messageError").style.display = "block";
        document.getElementById("message").classList.add("invalid-input");
        isValid = false;   
    }



// When all validation passes
let submissions = [];

if (isValid) {
    let submission = [
        {
            names: names,
            email: email,
            message: message,
        },
    ];

  
    submissions.push(submission);

  
    console.log("Submitted Input:", submission);

    // confirmation message
    let confirmMessage = document.getElementById("messageSent");
    confirmMessage.style.display = "block";
    confirmMessage.textContent = "Message sent!";

    setTimeout(function() {
        confirmMessage.style.display = "none";
    }, 3000);

    // Resetting form
    document.getElementById("contactForm").reset();
}
}
