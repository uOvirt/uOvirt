const buildings = [
    "Tabaret Hall",
    "Minto Sports Complex",
    "Morisset Library",
    "SITE Building",
    "STEM Complex",
    "Learning Crossroads (CRX)"
];

const headerSearch = document.getElementById("headerSearch");
const mapSearch = document.getElementById("mapSearch");
const searchResults = document.getElementById("searchResults");
const destinationName = document.getElementById("destinationName");
const destinationInfo = document.getElementById("destinationInfo");

function searchBuildings(searchText) {
    const search = searchText.trim().toLowerCase();

    searchResults.innerHTML = "";

    if (search === "") {
        return;
    }

    const matches = buildings.filter(function(building) {
        return building.toLowerCase().includes(search);
    });

    if (matches.length === 0) {
        const message = document.createElement("p");
        message.textContent = "No buildings found.";
        searchResults.appendChild(message);
        return;
    }

    matches.forEach(function(building) {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = building;

        button.addEventListener("click", function() {
            destinationName.textContent = building;
            destinationInfo.textContent = "Selected building · Map preview";

            headerSearch.value = building;
            mapSearch.value = building;
            searchResults.innerHTML = "";
        });

        searchResults.appendChild(button);
    });
}

headerSearch.addEventListener("input", function() {
    mapSearch.value = headerSearch.value;
    searchBuildings(headerSearch.value);
});

mapSearch.addEventListener("input", function() {
    headerSearch.value = mapSearch.value;
    searchBuildings(mapSearch.value);
});

headerSearch.form.addEventListener("submit", function(event) {
    event.preventDefault();
    mapSearch.value = headerSearch.value;
    searchBuildings(headerSearch.value);
    document.getElementById("campus-map").scrollIntoView();
});

const startingSearch = new URLSearchParams(window.location.search).get("q");

if (startingSearch) {
    headerSearch.value = startingSearch;
    mapSearch.value = startingSearch;
    searchBuildings(startingSearch);
    document.getElementById("campus-map").scrollIntoView();
}
