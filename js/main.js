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
    var emailPattern = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
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
        document.getElementById("namesError").textContent = "Name(s) is required";
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
        document.getElementById("emailError").textContent = "Email is required";
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
        document.getElementById("messageError").textContent = "Message is required";
        document.getElementById("messageError").style.display = "block";
        document.getElementById("message").classList.add("invalid-input");
        isValid = false;   
    } else if (message.length < 5) {
        document.getElementById("messageError").textContent = "Message is too short. Please enter at least 5 characters.";
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
// let submissions = [];
let submissions = JSON.parse(localStorage.getItem("submissions")) || [];


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



//  LOGIN FORM

document.getElementById('LoginForm').addEventListener('submit', function(event) {
    var emailUsername = document.getElementById('email-username').value.trim();
    var password = document.getElementById('password-').value.trim();
    var emailUsernameError = document.getElementById('email-usernameError');
    var passwordError = document.getElementById('password-Error');
    var valid = true;

    // Reset previous error messages
    emailUsernameError.textContent = '';
    passwordError.textContent = '';

    // Validate email/username only if it's not empty
    if (emailUsername === '') {
      emailUsernameError.textContent = 'Email is required';
      valid = false;
    }

    // Validate password only if it's not empty
    if (password === '') {
      passwordError.textContent = 'Password is required';
      valid = false;
    }

    // If both fields are not empty, perform further validation
    if (emailUsername !== '' && password !== '') {
      // Validate username format
      if (!/^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailUsername)) {
        emailUsernameError.textContent = 'Invalid email';
        valid = false;
      }

      // Validate password strength (for example, at least 6 characters)
      if (password.length < 6) {
        passwordError.textContent = 'Password should be at least 6 characters long';
        valid = false;
      }
    }

    if (!valid) {
      // Prevent form submission if validation fails
      event.preventDefault();
    } else {
      // Form submission succeeded, you can proceed with any further action
      document.getElementById('LoginSent').textContent = 'Login successfully!';
    }
  });

  // Keyup event listener for live validation
  document.getElementById('email-username').addEventListener('keyup', function() {
    var emailUsername = this.value.trim();
    var emailUsernameError = document.getElementById('email-usernameError');

    emailUsernameError.textContent = '';

    // Validate email/username if it's not empty
    if (emailUsername !== '') {
      // Validate username format
      if (!/^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailUsername)) {
        emailUsernameError.textContent = 'invalid Email';
      }
    }
  });

  // Keyup event listener for live validation
  document.getElementById('password-').addEventListener('keyup', function() {
    var password = this.value.trim();
    var passwordError = document.getElementById('password-Error');

    passwordError.textContent = '';

    // Validate password if it's not empty
    if (password !== '') {
      // Validate password strength (for example, at least 6 characters)
      if (password.length < 6) {
        passwordError.textContent = 'Password should be at least 6 characters long';
      }
    }
  });


  //  REGISTER FORM
  