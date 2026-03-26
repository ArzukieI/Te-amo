alert("JS loaded!"); // remove later if you want

window.onload = function () {

  const gradients = [
    ["#ff9a9e", "#fad0c4"],
    ["#a18cd1", "#fbc2eb"],
    ["#f6d365", "#fda085"],
    ["#84fab0", "#8fd3f4"],
    ["#fccb90", "#d57eeb"],
    ["#30cfd0", "#330867"],
    ["#5f2c82", "#49a09d"]
  ];

  const today = new Date();
  const day = today.getDate();
  const gradient = gradients[day % gradients.length];

  // Background gradient
  document.body.style.background =
    `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`;

  // Text gradient + shadow
  const h1 = document.querySelector("h1");
  if (h1) {
    h1.style.background =
      `linear-gradient(45deg, ${gradient[0]}, ${gradient[1]})`;
    h1.style.webkitBackgroundClip = "text";
    h1.style.webkitTextFillColor = "transparent";
    h1.style.textShadow = "2px 2px 8px rgba(0, 0, 0, 0.7)";
  }
};

// Music
function playMusic() {
  const audio = document.getElementById("audio");
  audio.play();
}
