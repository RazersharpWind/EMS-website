let todayElement = document.getElementById("today");
let date = new Date();
const days = ["Sunday", "Monsay", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthes = ["JAN", 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

// const arMonthes = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
let day = date.getDay();
let month = monthes[date.getMonth()];
let dayDate = date.getDate();
let year = date.getFullYear();

todayElement.textContent =`${days[day]}, ${dayDate} ${month} ${year}. `;


