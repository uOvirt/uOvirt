// Home page: says good morning, afternoon or evening depending on the time

var hour = new Date().getHours();
var greeting = "Good evening!";

if (hour < 12) {
    greeting = "Good morning!";
} else if (hour < 18) {
    greeting = "Good afternoon!";
}

document.getElementById("greeting").textContent = greeting;
