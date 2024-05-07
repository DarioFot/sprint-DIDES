document.addEventListener("DOMContentLoaded", function () {
  const intro1 = document.querySelector(".intro_1");
  const intro2 = document.querySelector(".intro_2");

  // Intro 1 anzeigen
  setTimeout(function () {
    intro1.classList.add("visible");
  }, 0); // Keine Verzögerung

  // Intro 1 ausblenden und Intro 2 anzeigen
  setTimeout(function () {
    intro1.classList.remove("visible");
    intro2.classList.add("visible");
  }, 3000); // Verzögerung von 3 Sekunden

  // Intro 2 ausblenden und nächste Aktion durchführen (z.B. neues HTML laden)
  setTimeout(function () {
    intro2.classList.remove("visible");
    // Hier kannst du die nächste Aktion durchführen, z.B. ein neues HTML laden
    // window.location.href = 'neue-seite.html';
  }, 6000); // Verzögerung von 6 Sekunden
});
