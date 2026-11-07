
document.addEventListener("DOMContentLoaded", function() {
    if (!document.body.classList.countains("pricing-page")) {
        return;
    }

    let buttons = document.querySelectorAll(".plan button");
    let plans = document.querySelectorAll(".plan");
    let message = document.getElementById("message");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {

            for (let j = 0; j < plans.length; j++) {
                plans[j].classList.remove("selected");
            }

            plans[i].classList.add("selected");

            let planName = plans[i].querySelector("h2").textContent;

            message.textContent = "You selected the " + planName + " plan!";
        });
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
