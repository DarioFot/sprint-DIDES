// Funktion zum Öffnen des HTML-Dateis "mobile.html"
function openIndexHtml() {
  window.open("mobile.html", "_blank"); // Öffne "mobile.html" in einem neuen Tab
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

// Intro_2 verschwinden lassen und "mobile.html" öffnen
setTimeout(function () {
  document.querySelector(".intro_2").classList.remove("appear");
  openIndexHtml(); // Öffne "mobile.html" nach Abschluss der Animation
}, 160000); // Verschwinden nach weiteren 2 Sekunden (insgesamt 8 Sekunden)
