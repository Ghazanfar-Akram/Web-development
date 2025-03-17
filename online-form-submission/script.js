document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        let isValid = true;

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const university = document.getElementById("university").value.trim();
        const course = document.getElementById("course").value.trim();
        const reason = document.getElementById("reason").value.trim();

        function showError(inputId, message) {
            let errorElement = document.querySelector(`#${inputId} + .error-message`);
            if (!errorElement) {
                errorElement = document.createElement("p");
                errorElement.className = "error-message";
                document.getElementById(inputId).after(errorElement);
            }
            errorElement.textContent = message;
            errorElement.style.color = "red";
        }

        document.querySelectorAll(".error-message").forEach(el => el.remove());

        if (name === "") {
            showError("name", "Name is required.");
            isValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "" || !emailPattern.test(email)) {
            showError("email", "Enter a valid email address.");
            isValid = false;
        }

        if (university === "") {
            showError("university", "University is required.");
            isValid = false;
        }

        if (course === "") {
            showError("course", "Course/Degree is required.");
            isValid = false;
        }

        if (reason === "") {
            showError("reason", "Please provide a reason.");
            isValid = false;
        }

        if (phone !== "" && !/^\d{10,15}$/.test(phone)) {
            showError("phone", "Enter a valid phone number (10-15 digits).");
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});
