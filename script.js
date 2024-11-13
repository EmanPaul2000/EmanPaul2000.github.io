// JavaScript to calculate age
const birthDate = new Date("2000-08-01"); // Replace with your birthdate
const ageElement = document.getElementById("age");

function calculateAge(birthDate) {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
ageElement.textContent = calculateAge(birthDate);
