
document.addEventListener("DOMContentLoaded", function() {
    if (!document.body.classList.contains("pricing-page")) {
        return;
    }

    let buttons = document.querySelectorAll(".plan button");
    let plans = document.querySelectorAll(".plan");
    let message = document.getElementById("message");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {

            for (let j = 0; j < plans.length; j++) {
                plans[j].classList.remove("selected");
                buttons[j].setAttribute("aria-pressed", "false");
            }

            plans[i].classList.add("selected");
            buttons[i].setAttribute("aria-pressed", "true");

            let planName = plans[i].querySelector("h2").textContent;

            message.textContent = "You selected the " + planName + " plan!";
        });

        buttons[i].setAttribute("aria-pressed", "false");
    }

    let learnMore = document.getElementById("learnMore");
    let moreInfo = document.getElementById("moreInfo");

    learnMore.addEventListener("click", function() {
        if (moreInfo.hidden) {
            moreInfo.hidden = false;
            learnMore.textContent = "Show less";
        } else {
            moreInfo.hidden = true;
            learnMore.textContent = "Learn more →";
        }
    });
});
