// ======================================
// SafeSphere Premium Signup JS
// ======================================

// Password Toggle

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const togglePassword = document.getElementById("togglePassword");

if (togglePassword) {

    togglePassword.addEventListener("click", () => {

        const type =
            password.type === "password"
                ? "text"
                : "password";

        password.type = type;
        confirmPassword.type = type;

        togglePassword.innerHTML =
            type === "password"
                ? '<i class="fa-solid fa-eye"></i>'
                : '<i class="fa-solid fa-eye-slash"></i>';

    });

}

// Password Strength

const strengthFill = document.getElementById("strength-fill");
const strengthText = document.getElementById("strength-text");

password.addEventListener("input", () => {

    const value = password.value;
    let strength = 0;

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
            strengthFill.style.background = "#ffaa00";
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

// Signup Form

const form = document.querySelector(".signup-card");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const first =
        document.querySelectorAll("input")[0].value.trim();

    const last =
        document.querySelectorAll("input")[1].value.trim();

    const email =
        document.querySelector('input[type="email"]').value.trim();

    const phone =
        document.querySelector('input[type="tel"]').value.trim();

    if (
        first === "" ||
        last === "" ||
        email === "" ||
        phone === "" ||
        password.value === "" ||
        confirmPassword.value === ""
    ) {

        alert("Please fill all fields.");
        return;

    }

    if (password.value !== confirmPassword.value) {

        alert("Passwords do not match.");
        return;

    }

    const btn =
        document.querySelector(".signup-btn");

    btn.disabled = true;

    btn.innerHTML =
        '<i class="fa-solid fa-spinner fa-spin"></i> Creating Account...';

    setTimeout(() => {

        alert("Account Created Successfully!");

        window.location.href = "login.html";

    }, 1800);

});

// Input Animation

const inputs =
    document.querySelectorAll("input");

inputs.forEach(input => {

    input.addEventListener("focus", () => {

        input.parentElement.style.transform =
            "scale(1.02)";

    });

    input.addEventListener("blur", () => {

        input.parentElement.style.transform =
            "scale(1)";

    });

});
