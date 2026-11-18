cards = document.querySelectorAll(".grid .card");

cards.forEach(function(card) {
    card.addEventListener("click", function() {
        cards.forEach(function(other) {
            other.classList.remove("selected");
        });
        card.classList.add("selected");
    });

