let currentTone = 0;
let tones = [
  { major: "C", minors: ["II Dm", "III Em", "IV F", "V G", "VI Am", "VII Bdim"] },
  { major: "G", minors: ["II Am", "III Bm", "IV C", "V D", "VI Em", "VII F#dim"] },
  { major: "D", minors: ["II Em", "III F#m", "IV G", "V A", "VI Bm", "VII C#dim"] },
  { major: "A", minors: ["II Bm", "III C#m", "IV D", "V E", "VI F#m", "VII G#dim"] },
  { major: "E", minors: ["II F#m", "III G#m", "IV A", "V B", "VI C#m", "VII D#dim"] },
  { major: "B", minors: ["II C#m", "III D#m", "IV E", "V F#", "VI G#m", "VII A#dim"] },
  { major: "F#", minors: ["II G#m", "III A#m", "IV B", "V C#", "VI D#m", "VII E#dim"] },
  { major: "F", minors: ["II Gm", "III Am", "IV Bb", "V C", "VI Dm", "VII Edim"] },
  { major: "Bb", minors: ["II Cm", "III Dm", "IV Eb", "V F", "VI Gm", "VII Adim"] },
  { major: "Eb", minors: ["II Fm", "III Gm", "IV Ab", "V Bb", "VI Cm", "VII Ddim"] },
  { major: "Ab", minors: ["II Bbm", "III Cm", "IV Db", "V Eb", "VI Fm", "VII Gdim"] },
  { major: "Db", minors: ["II Ebm", "III Fm", "IV Gb", "V Ab", "VI Bbm", "VII Cdim"] }
];

function updateChords() {
  document.getElementById("currentTone").innerText = tones[currentTone].major;

  let chords = [tones[currentTone].major, ...tones[currentTone].minors];
  let containerSize = Math.min(window.innerWidth * 0.9, 300);
  let radius = containerSize / 2.5;
  let centerX = containerSize / 2, centerY = containerSize / 2;
  chords.forEach((chord, index) => {
    let angle = ((index - 0) * (360 / chords.length)) * (Math.PI / 180) - (Math.PI / 2); // Ajuste do ângulo para começar de 90 graus
    let x = centerX + radius * Math.cos(angle) - 15;
    let y = centerY + radius * Math.sin(angle) - 15;

    let chordElement = document.getElementById(`chord${index}`);
    chordElement.style.left = `${x}px`;
    chordElement.style.top = `${y}px`;
    chordElement.innerText = index === 0 ? `I ${chord}` : chord;
  });
}

function nextTone() {
  currentTone = (currentTone + 1) % tones.length;
  updateChords();
}

function prevTone() {
  currentTone = (currentTone - 1 + tones.length) % tones.length;
  updateChords();
}

window.addEventListener("resize", updateChords);
updateChords();