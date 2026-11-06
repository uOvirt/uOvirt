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
        message.style.padding = "12px";
        searchResults.appendChild(message);
        return;
    }

    matches.forEach(function(building) {
        const button = document.createElement("button");
        button.textContent = building;

        button.addEventListener("click", function() {
            destinationName.textContent = building;
            destinationInfo.textContent = "Selected campus building";

            headerSearch.value = building;
            mapSearch.value = building;
            searchResults.innerHTML = "";
        });

        searchResults.appendChild(button);
    });
}

headerSearch.addEventListener("input", function() {
    searchBuildings(headerSearch.value);
});

mapSearch.addEventListener("input", function() {
    searchBuildings(mapSearch.value);
});

