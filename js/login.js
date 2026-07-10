// ======================================
// SafeSphere Login JavaScript
// ======================================

// Password Show / Hide

const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

if (togglePassword && password) {

    togglePassword.addEventListener("click", () => {

        if (password.type === "password") {

            password.type = "text";

            togglePassword.innerHTML =
                '<i class="fa-solid fa-eye-slash"></i>';

        } else {

            password.type = "password";

            togglePassword.innerHTML =
                '<i class="fa-solid fa-eye"></i>';

        }

    });

}

// Form Validation

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();

    const passwordValue = document.getElementById("password").value.trim();

    // Empty Check

    if (email === "" || passwordValue === "") {

        alert("Please fill in all fields.");

        return;

    }

    // Email Validation

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return;

    }

    // Loading Animation

    const button = document.querySelector(".login-btn");

    button.disabled = true;

    button.innerHTML =
        '<i class="fa-solid fa-spinner fa-spin"></i> Signing In...';

    setTimeout(() => {

        alert("Login Successful!");

        window.location.href = "dashboard.html";

    }, 1800);

});

// Input Animation

const inputs = document.querySelectorAll(".input-box input");

inputs.forEach(input => {

    input.addEventListener("focus", () => {

        input.parentElement.style.transform = "scale(1.02)";

    });

    input.addEventListener("blur", () => {

        input.parentElement.style.transform = "scale(1)";

    });

});
