var plans = document.querySelectorAll(".plan");
var message = document.getElementById("message");

plans.forEach(function(plan) {
    plan.addEventListener("click", function() {
        plans.forEach(function(other) {
            other.classList.remove("selected");
        });
        plan.classList.add("selected");

        var name = plan.querySelector("h2").textContent;
        message.textContent = "You picked the " + name + " plan!";
    });
});
