 //Assignment
alert("Wellcome to My Assigment")
var age = prompt("Enter your age:");
var isStudent = prompt("Are you a student? (yes/no)");

var ticketPrice;

if (age < 12) {
    ticketPrice = 5;
} else if (age >= 12 && age <= 18) {
    if (isStudent === "yes") {
        ticketPrice = 8;
    } else {
        ticketPrice = 10;
    }
} else {
    ticketPrice = 12;
}
alert("The ticket price is: $" + ticketPrice)
