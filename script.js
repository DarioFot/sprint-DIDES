function moveElements() {
  // Deklaration einer lokalen Variable, um die Timer-Referenzen zu speichern
  var timeouts = [];

  // Elemente auswählen
  var noseElement = document.querySelector(".NOSE");
  var diveElement = document.querySelector(".DIVE");
  var starsContainer = document.querySelector(".stars-container");
  var titleElement = document.querySelector(".title");
  var circleElement = document.querySelector(".circle");

  // NOSE 100px nach links verschieben
  noseElement.style.transform = "translateX(-80px)";
  // DIVE 100px nach rechts verschieben
  diveElement.style.transform = "translateX(80px)";
  // stars-container 100px nach oben verschieben mit smoother Transition
  starsContainer.style.transform = "translateY(-20px)";
  starsContainer.style.transition = "transform 0.5s ease-in-out"; // Smoothere Transition hinzufügen

  // Transparenz einstellen
  noseElement.style.opacity = "0";
  diveElement.style.opacity = "0";
  titleElement.style.opacity = "0"; // Die Opazität für die Titelklasse auf 0 setzen

  // Übergänge für eine sanftere Animation einstellen
  noseElement.style.transition =
    "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
  diveElement.style.transition =
    "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
  titleElement.style.transition = "opacity 0.5s ease-in-out"; // Übergang für die Opazität des Titels hinzufügen

  // Opazität der .circle-Klasse auf 0 setzen
  circleElement.style.opacity = "0";

  // Webcam öffnen
  openWebcam(circleElement.offsetLeft, circleElement.offsetTop);

  // Opazität der .circle-Klasse auf 0 setzen nach 0,6 Sekunden
  var circleOpacityTimeout = setTimeout(function () {
    circleElement.style.opacity = "0";
  }, 600);
  timeouts.push(circleOpacityTimeout);

  // Funktion zum Ändern des Hintergrundbilds aufrufen
  changeBackground();

  // Text hinzufügen
  var textTimeout = setTimeout(addTextAfterDelay, 3800); // Füge den Text nach einer Verzögerung von 4 Sekunden hinzu
  timeouts.push(textTimeout);

  // Alle Elemente zurücksetzen
  var resetTimeout = setTimeout(resetElements, 7000); // Führe die Reset-Funktion nach einer Verzögerung von 7 Sekunden aus
  timeouts.push(resetTimeout);

  // Nachdem alle Timeouts gesetzt wurden, lösche sie nach der letzten Verzögerung
  var clearAllTimeouts = setTimeout(function () {
    timeouts.forEach((timeout) => clearTimeout(timeout));
  }, 7000);
  timeouts.push(clearAllTimeouts);
}

function addTextAfterDelay() {
  // Erstelle das Textelement
  var textElement = document.createElement("div");
  textElement.textContent = "2.32";
  textElement.classList.add("additional-text");

  // Positioniere das Textelement
  textElement.style.position = "absolute";
  textElement.style.top = "calc(50vh + 20vh)";
  textElement.style.left = "50%";
  textElement.style.transform = "translateX(-50%)";
  textElement.style.fontSize = "8rem"; // Anpassen der Schriftgröße nach Bedarf
  textElement.style.color = "white"; // Korrekte Angabe der Textfarbe
  textElement.style.opacity = "0"; // Setze die Anfangsopazität auf 0

  // Schriftart auf Helvetica Light ändern
  textElement.style.fontFamily = "Helvetica";
  textElement.style.fontWeight = "100";

  // Füge das Textelement zum body hinzu
  document.body.appendChild(textElement);

  // Füge eine kurze Verzögerung hinzu, bevor die Opazität geändert wird, um einen reibungslosen Übergang zu ermöglichen
  setTimeout(function () {
    textElement.style.transition = "opacity 0.7s ease-in-out"; // Übergangseigenschaften für die Opazität setzen
    textElement.style.opacity = "1"; // Ändere die Opazität auf 1, um das Element sichtbar zu machen
  }, 100); // Kurze Verzögerung, bevor die Opazität geändert wird
}

function changeBackground() {
  var starsContainer = document.querySelector(".stars-container");
  var currentImage = starsContainer.style.backgroundImage;

  switch (currentImage) {
    case 'url("links/stars.png")':
      starsContainer.style.backgroundImage = 'url("links/1_star.png")';
      break;
    case 'url("links/1_star.png")':
      starsContainer.style.backgroundImage = 'url("links/2_star.png")';
      break;
    case 'url("links/2_star.png")':
      starsContainer.style.backgroundImage = 'url("links/2.22_star.png")';
      break;
    case 'url("links/2.22_star.png")':
      // Sobald das letzte Bild erreicht ist, werden die anderen Aktionen ausgeführt
      // stars-container 10vh nach oben verschieben
      starsContainer.style.transform = "translateY(10vh)";

      return;
    default:
      starsContainer.style.backgroundImage = 'url("links/stars.png")';
      break;
  }

  // Die Funktion rekursiv aufrufen, um das nächste Bild zu ändern
  setTimeout(changeBackground, 900);
}

function openWebcam(left, top) {
  // Kreiscontainer erstellen und positionieren
  var circleContainer = document.createElement("div");
  circleContainer.classList.add("circle-container");
  circleContainer.style.position = "absolute";
  circleContainer.style.width = "40vh"; // anpassen nach Bedarf
  circleContainer.style.height = "40vh"; // anpassen nach Bedarf
  circleContainer.style.left = left + 50 + "px";
  circleContainer.style.top = top + 50 + "px";
  circleContainer.style.borderRadius = "50%"; // Container als Kreis formen
  circleContainer.style.overflow = "hidden"; // Verhindern, dass Webcam-Bild außerhalb des Kreises sichtbar ist
  circleContainer.style.transform = "scale(0.9)"; // Startskalierung auf 0.5 setzen

  // Hier die Webcam einbinden mit autoplay, muted, loop und playsinline
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (stream) {
      var webcamElement = document.createElement("video");
      webcamElement.classList.add("webcam");
      webcamElement.style.width = "auto";
      webcamElement.style.height = "100%";
      webcamElement.srcObject = stream;
      // Hinzufügen der zusätzlichen Attribute für Autoplay, Mute, Loop und Playsinline
      webcamElement.autoplay = true;
      webcamElement.muted = true;
      webcamElement.loop = true;
      webcamElement.playsInline = true;
      // Video-Element dem Kreiscontainer hinzufügen
      circleContainer.appendChild(webcamElement);
    })
    .catch(function (error) {
      console.log("Error accessing webcam: ", error);
    });

  // Kreiscontainer zur Seite hinzufügen
  document.body.appendChild(circleContainer);

  // Nachdem die Webcam geladen wurde, Skalierung auf 1 setzen (Startanimation)
  circleContainer.style.transition = "transform 0.5s ease-in-out";
  setTimeout(function () {
    circleContainer.style.transform = "scale(1)";
  }, 100); // Startanimation verzögern, um sicherzustellen, dass der Kreiscontainer vollständig gerendert ist
}

function resetElements() {
  // Elemente auswählen
  var noseElement = document.querySelector(".NOSE");
  var diveElement = document.querySelector(".DIVE");
  var starsContainer = document.querySelector(".stars-container");
  var titleElement = document.querySelector(".title");
  var circleElement = document.querySelector(".circle");

  // Zurücksetzen der CSS-Eigenschaften der Elemente
  noseElement.style.transform = "translateX(0)";
  diveElement.style.transform = "translateX(0)";
  starsContainer.style.transform = "translateY(0)";
  starsContainer.style.transition = "none"; // Zurücksetzen der Transition-Eigenschaft
  noseElement.style.opacity = "1";
  diveElement.style.opacity = "1";
  titleElement.style.opacity = "1";
  noseElement.style.transition = "none";
  diveElement.style.transition = "none";
  titleElement.style.transition = "none";
  circleElement.style.opacity = "1";

  // Entfernen des zusätzlichen Textelements, falls es vorhanden ist
  var additionalTextElement = document.querySelector(".additional-text");
  if (additionalTextElement) {
    additionalTextElement.remove();
  }

  // Zurücksetzen des Hintergrundbilds
  starsContainer.style.backgroundImage = 'url("links/stars.png")';

  // Schließen der Webcam
  closeWebcam();
}

function closeWebcam() {
  var circleContainer = document.querySelector(".circle-container");
  if (circleContainer) {
    circleContainer.remove();
  }
}

window.onload = function () {
  var div = document.querySelector("div.container");
  div.style.opacity = 1;
};
