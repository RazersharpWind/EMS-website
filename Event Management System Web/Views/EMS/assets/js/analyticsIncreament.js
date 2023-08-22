const statstics = document.querySelectorAll('.analytics-card h4')

statstics.forEach((number) => {
    console.log(number.getAttribute('data-value'));
})