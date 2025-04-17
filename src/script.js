const form = document.getElementById('form');
const resultDiv = document.getElementById('result');

const akanNames = {
    male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
    female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"],
}

// Listen to the submit function
form.addEventListener("submit", function(event) {
// Prevent the form from submitting and use js instead     
    event.preventDefault(); 
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

    const CC = Math.floor(year / 100);
    const YY = year % 100;

// Make calculations using the formula given in the project
    const d = Math.floor(
        ((4 * CC - 2 * CC - 1) + (5 * YY / 4) + (26 * (month + 1) / 10) + day) % 7
    );

// Get the day of the week and get the akanName
    const dayIndex = Math.floor(d);
    const akanName = akanNames[gender][dayIndex];

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
resultDiv.textContent = `You were born on a ${daysOfWeek[dayIndex]}. Your Akan name is: ${akanName}`;

form.reset();
});