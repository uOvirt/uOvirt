/ Features page


var cards = document.querySelectorAll(".feature");

if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    cards.forEach(function(card) {
        observer.observe(card);
    });
} else {
    cards.forEach(function(card) {
        card.classList.add("visible");
    });
}

var places = [
    "Morisset Library",
    "Brampton Library",
    "Health Sciences Library",
    "Law Library",
    "Tabaret Hall",
    "STEM Complex",
    "Minto Sports Complex",
    "University Centre Food Court",
    "Learning Crossroads (CRX)"
];

var demoSearch = document.getElementById("demoSearch");
var demoResults = document.getElementById("demoResults");

function showResults() {
    var text = demoSearch.value.trim().toLowerCase();
    demoResults.innerHTML = "";

    var matches = places.filter(function(place) {
        return place.toLowerCase().includes(text);
    }).slice(0, 4);

    if (matches.length === 0) {
        var empty = document.createElement("li");
        empty.className = "empty";
        empty.textContent = "No places found.";
        demoResults.appendChild(empty);
        return;
    }

    matches.forEach(function(place) {
        var item = document.createElement("li");
        item.textContent = place;
        demoResults.appendChild(item);
    });
}

demoSearch.addEventListener("input", showResults);
showResults();


document.querySelectorAll(".fav").forEach(function(button) {
    button.addEventListener("click", function() {
        button.classList.toggle("saved");
        var name = button.nextElementSibling.querySelector("strong").textContent;
        var saved = button.classList.contains("saved");
        button.setAttribute("aria-label", (saved ? "Unsave " : "Save ") + name);
    });
});
