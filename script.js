window.onload = function () {

  // Love-themed background gradients
  const bgGradients = [
    ["#ff6b6b", "#fbc7d4"], 
    ["#ff758c", "#ff7eb3"], 
    ["#ff9a9e", "#fecfef"], 
    ["#ffdde1", "#ee9ca7"], 
    ["#f093fb", "#f5576c"], 
    ["#e0c3fc", "#8ec5fc"], 
    ["#ffb347", "#ffcc33"]
  ];

  // Love-themed text gradients (different from background)
  const textGradients = [
    ["#ffe6f0", "#ff99cc"], 
    ["#ffc0cb", "#ff69b4"], 
    ["#ffd6e8", "#ff85a2"], 
    ["#ffe0f0", "#ff5c8d"], 
    ["#ffc3d6", "#ff6f91"], 
    ["#f7c6ff", "#d17eff"], 
    ["#ffdde1", "#f39ac1"]
  ];

  const today = new Date();
  const day = today.getDate();

  // Pick background & text gradients based on day
  const bgGradient = bgGradients[day % bgGradients.length];
  const textGradient = textGradients[day % textGradients.length];

  // Apply background
  document.body.style.background = `linear-gradient(135deg, ${bgGradient[0]}, ${bgGradient[1]})`;

  // Apply text gradient
  const h1 = document.querySelector("h1");
  if (h1) {
    h1.style.background = `linear-gradient(45deg, ${textGradient[0]}, ${textGradient[1]})`;
    h1.style.webkitBackgroundClip = "text";
    h1.style.webkitTextFillColor = "transparent";
  }
};

// Play music
function playMusic() {
  const audio = document.getElementById("audio");
  audio.play();
}
