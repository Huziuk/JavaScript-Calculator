const audio = new Audio('./audio/click.mp3');
// Clears the screen on click of C button.
function clearScreen() {
  document.getElementById("result").value = "";
  audio.play();
}
// Displays entered value on screen.
function liveScreen(value) {
  audio.play();
  document.getElementById("result").value += value;
}
// Swaps the style sheet in order to  achieve dark mode.
function switchTheme() {
  let darkMode = document.getElementById("dark-mode");
  let theme = document.getElementById("theme");
  if (theme.getAttribute("href") == "light.css") {
    theme.href = "dark.css";
    darkMode.innerHTML = "Light Mode 🌞";
  } else {
    theme.href = "light.css";
    darkMode.innerHTML = "Dark Mode 🌙";
  }
}
