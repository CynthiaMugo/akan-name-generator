# Akan Name Generator  

#### A simple web-based application that generates your Akan name based on your birth date, April 19, 2025  
#### By **Cynthia Muthoni Mugo**  

## Description  
The Akan Name Generator is a cultural tool designed to help users discover their traditional Akan name based on the day of the week they were born. The Akan people of Ghana assign names according to the day of birth, and each day is associated with distinct names for males and females. This application takes your birth date as input, calculates the day of the week, and returns your corresponding Akan name. It’s a fun and educational tool for anyone interested in exploring West African culture or simply discovering a unique name.

## Setup/Installation Requirements  
* Clone or download the repository from GitHub  
* Open the `index.html` file in your browser  
* Make sure you have the main html file, styles.css and script.js in your vs code
* No server setup is required  
* No external dependencies needed—just HTML, CSS, and JavaScript  
* Ensure your browser supports modern JavaScript features

## Behavior-Driven Development (BDD)

| Behavior | Input | Output |
|----------|-------|--------|
| User submits the form with valid day, month, year, and gender | `day=7`, `month=3`, `year=1997`, `gender=female` | Display: "Your Akan name is: Akosua" |
| User submits the form with empty inputs | No input | Alert: "Please enter a valid date and select gender." |
| User enters an invalid date (e.g., `month=15`) | `day=10`, `month=15`, `year=1995` | Alert: "Please enter a valid date and select gender." |
| User enters valid inputs but the date does not exist (e.g., `day=31`, `month=2`) | `day=31`, `month=2`, `year=2000` | Alert: "Please enter a valid date and select gender." |
| User selects gender and enters a real date | Valid input | Akan name based on calculated weekday appears on screen |

## Known Bugs  
*  Does not account for leap years or date validation beyond basic range checks (e.g., 30th February will still pass). 
* If you experience any unexpected behavior, feel free to open an issue or contact the me directly

## Technologies Used  
* HTML  
* CSS  
* JavaScript  

## Support and contact details  
For any questions, suggestions, or bug reports, please contact:  
**Email:** cynthiamugo25@gmail.com  
**LinkedIn:** [Cynthia Muthoni Mugo](https://www.linkedin.com/in/cynthiamuthonimugo)  
You are also welcome to fork the repository and contribute!

### License  
*MIT License*  
Copyright (c) 2025 **Cynthia Muthoni Mugo**
