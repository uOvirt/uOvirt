window.onload = function() {
    var navLinks = document.querySelectorAll("body > h6");

    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].onclick = function() {
            for (var j = 0; j < navLinks.length; j++) {
                navLinks[j].classList.remove("active");
            }
            
            this.classList.add("active");
            console.log("You clicked on: " + this.innerText);
        };
    }
};
