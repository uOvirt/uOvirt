document.querySelector(".nav-toggle").onclick = () => {
  document.getElementById("nav").classList.toggle("open");
};

// Recherche : affiche ce que la personne a tapé
document.querySelector(".search").onsubmit = (e) => {
  e.preventDefault();
  alert("Recherche : " + document.getElementById("search").value);
};

// Bouton « Join our journey »
document.getElementById("join").onclick = (e) => {
  e.preventDefault();
  alert("Merci !");

