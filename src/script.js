const form = document.getElementById('form');
const result = document.getElementById('result');

const akanNames = {
    male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
    female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"],
}

// Listen to the submit function
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and use js instead 
// grab the values from the form
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    const gender = document.getElementById("gender").value;

// Check if the date is valid and send alert if not
    if (
        !day || day < 1 || day > 31 ||
        !month || month < 1 || month > 12 ||
        !year || year < 1900 || year > 2100 ||
        !gender
    ) {
        alert("Please enter a valid date and select gender.");
        return;
    }