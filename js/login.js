// ================================
// SafeSphere Premium Login JS
// ================================

// Show / Hide Password

const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

if (togglePassword) {
    togglePassword.addEventListener("click", () => {

        const type = password.getAttribute("type") === "password"
            ? "text"
            : "password";

        password.setAttribute("type", type);

        togglePassword.innerHTML =
            type === "password"
                ? '<i class="fa-solid fa-eye"></i>'
                : '<i class="fa-solid fa-eye-slash"></i>';

    });
}

// Login Form

const form = document.querySelector(".login-card");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document.querySelector('input[type="email"]').value.trim();
        const pass = document.getElementById("password").value.trim();

        if (email === "" || pass === "") {

            alert("Please fill all fields.");

            return;

        }

        const button = document.querySelector(".login-btn");

        button.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Logging in...';

        button.disabled = true;

        setTimeout(() => {

            alert("Login Successful!");

            window.location.href = "dashboard.html";

        }, 1500);

    });

}

// Input Animation

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {

    input.addEventListener("focus", () => {

        input.parentElement.style.transform = "scale(1.02)";

    });

    input.addEventListener("blur", () => {

        input.parentElement.style.transform = "scale(1)";

    });

});
