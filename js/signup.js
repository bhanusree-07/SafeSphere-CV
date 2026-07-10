// ======================================
// SafeSphere Signup JavaScript
// ======================================

// Password Elements

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const togglePassword = document.getElementById("togglePassword");

const strengthFill = document.getElementById("strength-fill");
const strengthText = document.getElementById("strength-text");

// ================================
// Show / Hide Password
// ================================

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";
        confirmPassword.type = "text";

        togglePassword.innerHTML =
            '<i class="fa-solid fa-eye-slash"></i>';

    } else {

        password.type = "password";
        confirmPassword.type = "password";

        togglePassword.innerHTML =
            '<i class="fa-solid fa-eye"></i>';

    }

});

// ================================
// Password Strength
// ================================

password.addEventListener("input", () => {

    let strength = 0;
    const value = password.value;

    if (value.length >= 8)
        strength++;

    if (/[A-Z]/.test(value))
        strength++;

    if (/[0-9]/.test(value))
        strength++;

    if (/[^A-Za-z0-9]/.test(value))
        strength++;

    switch (strength) {

        case 0:
        case 1:

            strengthFill.style.width = "25%";
            strengthFill.style.background = "#ff4d4d";
            strengthText.innerHTML = "Weak Password";

            break;

        case 2:

            strengthFill.style.width = "50%";
            strengthFill.style.background = "#ff9800";
            strengthText.innerHTML = "Medium Password";

            break;

        case 3:

            strengthFill.style.width = "75%";
            strengthFill.style.background = "#4caf50";
            strengthText.innerHTML = "Strong Password";

            break;

        case 4:

            strengthFill.style.width = "100%";
            strengthFill.style.background = "#00d4ff";
            strengthText.innerHTML = "Very Strong Password";

            break;

    }

});

// ================================
// Signup Form
// ================================

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function(e){

    e.preventDefault();

    const firstName =
        document.getElementById("firstName").value.trim();

    const lastName =
        document.getElementById("lastName").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    if(
        firstName === "" ||
        lastName === "" ||
        email === "" ||
        phone === "" ||
        password.value === "" ||
        confirmPassword.value === ""
    ){

        alert("Please fill in all fields.");

        return;

    }

    // Email Validation

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){

        alert("Please enter a valid email address.");

        return;

    }

    // Mobile Validation

    if(phone.length < 10){

        alert("Please enter a valid mobile number.");

        return;

    }

    // Password Match

    if(password.value !== confirmPassword.value){

        alert("Passwords do not match.");

        return;

    }

    const button =
        document.querySelector(".signup-btn");

    button.disabled = true;

    button.innerHTML =
        '<i class="fa-solid fa-spinner fa-spin"></i> Creating Account...';

    setTimeout(() => {

        alert("Account Created Successfully!");

        window.location.href = "login.html";

    },1800);

});

// ================================
// Input Animation
// ================================

const inputs =
document.querySelectorAll(".input-box input");

inputs.forEach(input=>{

    input.addEventListener("focus",()=>{

        input.parentElement.style.transform =
        "scale(1.02)";

    });

    input.addEventListener("blur",()=>{

        input.parentElement.style.transform =
        "scale(1)";

    });

});
