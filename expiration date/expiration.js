function calculateExpiration() {
    var daysInput = document.getElementById("days");
    var days = parseInt(daysInput.value);

    if (isNaN(days) || days <= 0) {
        alert("Please enter a valid number of days.");
        return;
    }

    var currentDate = new Date();
    var expirationDate = new Date();
    expirationDate.setDate(currentDate.getDate() + days);

    alert("Your subscription will expire on: " + expirationDate.toDateString());
}