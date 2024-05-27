document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const gender = document.getElementById("gender").value;
    const dateOfBirth = document.getElementById("date").value;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("gender", gender);
    localStorage.setItem("dateOfBirth", dateOfBirth);

    name.classList.remove("error");
    email.classList.remove("error");
    password.classList.remove("error");

    let valid = true;

    if (name.value.trim() === "") {
        name.classList.add("error");
        valid = false;
    }
    if (email.value.trim() === "") {
        email.classList.add("error");
        valid = false;
    }
    if (password.value.trim() === "") {
        password.classList.add("error");
        valid = false;
    }

    if (password.value.length < 5) {
        document.getElementById("message").innerText = "Password must be at least 5 characters long.";
        valid = false;
    }

    if (valid) {
        document.getElementById("message").innerText = "Registration successful! You will be redirected to the main page shortly.";
        name.value = "";
        email.value = "";
        password.value = "";

        setTimeout(() => {
            window.location.href = '../MainPage/index.html';
        }, 3000);
    } else {
        document.getElementById("message").innerText = "Password must be at least 5 characters long.";
    }
});