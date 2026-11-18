// Team page: if someone's photo is missing, show the grey person instead
var photos = document.querySelectorAll(".photo");

photos.forEach(function(photo) {
    function showGreyPerson() {
        // Only swap once, so the page can't get stuck if person.svg is missing too
        photo.removeEventListener("error", showGreyPerson);
        photo.src = "images/person.svg";
    }

    photo.addEventListener("error", showGreyPerson);

    // The photo may have already failed before this script ran
    if (photo.complete && photo.naturalWidth === 0) {
        showGreyPerson();
    }
});
