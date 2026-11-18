var photos = document.querySelectorAll(".photo");

photos.forEach(function(photo) {
    photo.addEventListener("error", function() {
        photo.src = "images/person.svg";
    });

    // The photo may have already failed before this script ran
    if (photo.complete && photo.naturalWidth === 0) {
        photo.src = "images/person.svg";
    }
});
