function playMusic() {
  const audio = document.getElementById("audio");
  audio.play();
}


const gradients = [
  ["#ff9a9e", "#fad0c4"],
  ["#a18cd1", "#fbc2eb"],
  ["#f6d365", "#fda085"],
  ["#84fab0", "#8fd3f4"],
  ["#fccb90", "#d57eeb"],
  ["#30cfd0", "#330867"],
  ["#5f2c82", "#49a09d"]
];

// Get day number
const today = new Date();
const day = today.getDate();

// Pick gradient based on day
const gradient = gradients[day % gradients.length];

// Apply background
document.body.style.background = `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`;

// Apply text gradient
const h1 = document.querySelector("h1");
h1.style.background = `linear-gradient(45deg, ${gradient[0]}, ${gradient[1]})`;
h1.style.webkitBackgroundClip = "text";
h1.style.webkitTextFillColor = "transparent";
