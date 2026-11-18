// Opens the email app with the message already written
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var subject = "uOVirt question from " + name;
    var body = message + "\n\n- " + name + " (" + email + ")";

    window.location.href = "mailto:contact@uovirt.ca?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    document.getElementById("note").textContent = "Your email app should open now. Just hit send!";
});

// Only keep one question open at a time
var questions = document.querySelectorAll("details");

questions.forEach(function(question) {
    question.addEventListener("toggle", function() {
        if (question.open) {
            questions.forEach(function(other) {
                if (other !== question) {
                    other.open = false;
                }
            });
        }
    });
});
