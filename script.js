document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('clickableImage');
    const checkbox = document.getElementById('active');

    image.addEventListener('click', () => {
        if (image.src.includes('navbar.png')) {
            image.src = 'assets/navbar/close.png';
            checkbox.checked = true; // Activate the checkbox when the image is clicked
        } else {
            image.src = 'assets/navbar/navbar.png';
            checkbox.checked = false; // Deactivate the checkbox when the image is clicked
        }
    });
});

// Animations for register and login buttons
const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

if (registerButton && loginButton && container) {
  registerButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
  });

  loginButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
  });
}

// Check Register Error
const form = document.querySelector('form');
const username = document.getElementById('username');
const usernameError = document.querySelector("#username-error");
const email = document.getElementById('email');
const emailError = document.querySelector("#email-error");
const phone = document.getElementById('phone');
const phoneError = document.querySelector("#phone-error");
const password = document.getElementById('password');
const passwordError = document.querySelector("#password-error");
const confirmPassword = document.getElementById('confirm-password');
const confirmPasswordError = document.querySelector("#confirm-password-error");
const terms = document.getElementById('terms');
const termsError = document.querySelector("#terms-error");

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
  const small = formControl.querySelector('small');
  small.innerText = '';
}

// Check email is valid
function checkEmail(email) {
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
}

// Check phone number is valid
function checkPhone(phone) {
  const phoneRegex = /^[0-9]{10,15}$/;
  return phoneRegex.test(phone);
}

// Check passwords match
function checkPasswordsMatch(password, confirmPassword) {
  return password === confirmPassword;
}

if (email) {
  email.addEventListener("input", function() {
    if (!checkEmail(email.value)) {
      emailError.textContent = "*Email is not valid";
    } else {
      emailError.textContent = "";
    }
  });
}

if (phone) {
  phone.addEventListener("input", function() {
    if (!checkPhone(phone.value)) {
      phoneError.textContent = "*Phone number is not valid";
    } else {
      phoneError.textContent = "";
    }
  });
}

if (username) {
  username.addEventListener("input", function() {
    if (username.value.length < 8) {
      usernameError.textContent = "*Username must be at least 8 characters.";
    } else if(username.value.length > 20){
      usernameError.textContent = "*Username must be less than 20 characters.";
    } else {
      usernameError.textContent = "";
    }
  });
}

if (password) {
  password.addEventListener("input", function() {
    if (password.value.length < 8) {
      passwordError.textContent = "*Password must be at least 8 characters.";
    } else if(password.value.length > 20){
      passwordError.textContent = "*Password must be less than 20 characters.";
    } else {
      passwordError.textContent = "";
    }
  });
}

if (confirmPassword) {
  confirmPassword.addEventListener("input", function() {
    if (!checkPasswordsMatch(password.value, confirmPassword.value)) {
      confirmPasswordError.textContent = "*Passwords do not match";
    } else {
      confirmPasswordError.textContent = "";
    }
  });
}

// Check required fields
function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function(input) {
    if (input.type === 'checkbox' && !input.checked) {
      showError(input, "*You must agree to the terms and services");
      isRequired = true;
    } else if (input.value.trim() === '') {
      showError(input, `*${getFieldName(input)} is required`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });
  return isRequired;
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!checkRequired([username, email, phone, password, confirmPassword, terms])) {
      // Perform other checks if necessary
    }
  });
}

// Check Login Error
const lgForm = document.querySelector('.form-lg');
const lgEmail = document.querySelector('.email-2');
const lgEmailError = document.querySelector(".email-error-2");
const lgPassword = document.querySelector('.password-2');
const lgPasswordError = document.querySelector(".password-error-2");

function showError2(input, message) {
  const formControl2 = input.parentElement;
  formControl2.className = 'form-control2 error';
  const small2 = formControl2.querySelector('small');
  small2.innerText = message;
}

function showSuccess2(input) {
  const formControl2 = input.parentElement;
  formControl2.className = 'form-control2 success';
  const small2 = formControl2.querySelector('small');
  small2.innerText = '';
}

// Check email is valid
function checkEmail2(lgEmail) {
  const emailRegex2 = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex2.test(lgEmail);
}

if (lgEmail) {
  lgEmail.addEventListener("input", function() {
    if (!checkEmail2(lgEmail.value)) {
      lgEmailError.textContent = "*Email is not valid";
    } else {
      lgEmailError.textContent = "";
    }
  });
}

if (lgPassword) {
  lgPassword.addEventListener("input", function() {
    if (lgPassword.value.length < 8) {
      lgPasswordError.textContent = "*Password must be at least 8 characters.";
    } else if (lgPassword.value.length > 20){
      lgPasswordError.textContent = "*Password must be less than 20 characters.";
    } else {
      lgPasswordError.textContent = "";
    }
  });
}

function checkRequiredLg(inputArr2) {
  let isRequiredLg = false;
  inputArr2.forEach(function(input){
    if (input.value.trim() === '') {
      showError2(input, `*${getFieldNameLg(input)} Please enter your information in this field`);
      isRequiredLg = true;
    } else {
      showSuccess2(input);
    }
  });
  return isRequiredLg;
}

function getFieldNameLg(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

if (lgForm) {
  lgForm.addEventListener('submit', function (e){
    e.preventDefault();
    if (!checkRequiredLg([lgEmail, lgPassword])) {
      checkEmail2(lgEmail);
    }
  });
}


//data for about
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const options = {
        threshold: 0.5
    };

    const updateCount = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        // Lower inc to slow and higher to slow
        const inc = target / 200; // You can adjust the divisor to change the speed

        // Check if target is reached
        if (count < target) {
            // Add inc to count and output in counter
            counter.innerText = Math.ceil(count + inc);
            // Call function every ms
            setTimeout(() => updateCount(counter), 1);
        } else {
            counter.innerText = target;
        }
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                updateCount(counter);
                observer.unobserve(counter);
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    counters.forEach(counter => {
        observer.observe(counter);
    });
});


//show more
function toggleBrands() {
    const moreBrands = document.querySelector('.more-brands');
    const toggleButton = document.querySelector('.toggle-button');
    if (moreBrands.style.display === 'none' || moreBrands.style.display === '') {
        moreBrands.style.display = 'flex';
        toggleButton.textContent = '▲';
    } else {
        moreBrands.style.display = 'none';
        toggleButton.textContent = '▼';
    }
}

//slider
let currentNewIndex = 0;
let currentUsedIndex = 0;

function moveSlide(direction, type) {
    const slider = document.querySelector(`.slider.${type}`);
    const items = slider.querySelectorAll('.slider-item');
    const totalItems = items.length;
    const visibleItems = 4; // Number of visible items

    if (type === 'new') {
        currentNewIndex += direction;
        if (currentNewIndex < 0) {
            currentNewIndex = totalItems - visibleItems;
        } else if (currentNewIndex > totalItems - visibleItems) {
            currentNewIndex = 0;
        }
        slider.style.transform = `translateX(${-currentNewIndex * 100 / visibleItems}%)`;
    } else if (type === 'used') {
        currentUsedIndex += direction;
        if (currentUsedIndex < 0) {
            currentUsedIndex = totalItems - visibleItems;
        } else if (currentUsedIndex > totalItems - visibleItems) {
            currentUsedIndex = 0;
        }
        slider.style.transform = `translateX(${-currentUsedIndex * 100 / visibleItems}%)`;
    }
}

//carousel
let angle = 0;

function rotateCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    angle += direction * 90;
    items.forEach((item, index) => {
        item.style.transform = `rotateY(${index * 90 - angle}deg) translateZ(500px)`;
    });
}

// Initialize the carousel items
document.querySelectorAll('.carousel-item').forEach((item, index) => {
    item.style.transform = `rotateY(${index * 90}deg) translateZ(500px)`;
});

'use strict';

const carouselItems = document.querySelectorAll('.carousel__item');
console.log(carouselItems)
let currentItem = document.querySelector('.carousel__item--main');
const leftBtn = document.querySelector('#leftBtn');
const rightBtn = document.querySelector('#rightBtn');


rightBtn.addEventListener('click', function() {
    currentItem = document.querySelector('.carousel__item--right');
    const leftItem = document.querySelector('.carousel__item--main');
    carouselItems.forEach((item,i) => {
        item.classList = 'carousel__item';
    });
    currentItem.classList.add('carousel__item--main');
    leftItem.classList.add('carousel__item--left');
    const currentId = Array.from(carouselItems).indexOf(currentItem);
    const rightItem = currentId === carouselItems.length -1 ? carouselItems[0] : carouselItems[currentId +1];
    rightItem.classList.add('carousel__item--right');
});

leftBtn.addEventListener('click', function() {
    currentItem = document.querySelector('.carousel__item--left');
    const rightItem = document.querySelector('.carousel__item--main');
    carouselItems.forEach((item,i) => {
        item.classList = 'carousel__item';
    });
    currentItem.classList.add('carousel__item--main');
    rightItem.classList.add('carousel__item--right');
    const currentId = Array.from(carouselItems).indexOf(currentItem);
    const leftItem = currentId === 0 ? carouselItems[carouselItems.length-1] : carouselItems[currentId-1];
    leftItem.classList.add('carousel__item--left');
});



