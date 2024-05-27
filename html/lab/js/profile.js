document.addEventListener("DOMContentLoaded", function() {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const gender = localStorage.getItem("gender");
    const dateOfBirth = localStorage.getItem("dateOfBirth");

    document.getElementById("user-name").textContent = name;
    document.getElementById("user-gender").textContent = gender;
    document.getElementById("user-date-of-birth").textContent = dateOfBirth;
});
