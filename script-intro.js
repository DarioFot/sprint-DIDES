// Funktion zum Öffnen des HTML-Dateis "index.html"
function openIndexHtml() {
  window.open("index.html", "_self"); // Öffne "index.html" im gleichen Fenster
}

// Intro_1 erscheinen lassen
setTimeout(function () {
  document.querySelector(".intro_1").classList.add("appear");
}, 2000); // Erscheinen nach 2 Sekunden

// Intro_1 verschwinden lassen
setTimeout(function () {
  document.querySelector(".intro_1").classList.remove("appear");
}, 4000); // Verschwinden nach weiteren 2 Sekunden (insgesamt 4 Sekunden)

// Intro_2 erscheinen lassen
setTimeout(function () {
  document.querySelector(".intro_2").classList.add("appear");
}, 6000); // Erscheinen nach weiteren 2 Sekunden (insgesamt 6 Sekunden)

// Intro_2 verschwinden lassen und "index.html" öffnen
setTimeout(function () {
  document.querySelector(".intro_2").classList.remove("appear");
  openIndexHtml(); // Öffne "index.html" nach Abschluss der Animation
}, 8000); // Verschwinden nach weiteren 2 Sekunden (insgesamt 8 Sekunden)
