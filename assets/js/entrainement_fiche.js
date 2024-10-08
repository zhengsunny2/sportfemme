// SECTION PLAYLIST MODE PLEIN ECRAN
const video = document.getElementById("fullScreen1");

video.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    // verifie que le document n'est pas en mode grand ecran
    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
});

//COMMENTAIRE

//FAVORIS

//SWITCH DARK LIGHT MODE
// DOMContentLoaded déclenché quand le document html est chargé et analysé
document.addEventListener("DOMContentLoaded", () => {
  const swapBody = document.getElementById("dark-mode");

  const currentMode = localStorage.getItem("theme") || "light";
  if (currentMode === "dark") {
    document.body.classList.add("dark-mode"); // ajoute dark mode du localStorage
  } else {
    document.body.classList.remove("dark-mode"); // retire dark mode du localStorage
  }

  swapBody.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
    const darkMode = document.body.classList.contains("dark-mode");
    // si darkMode true
    if (darkMode) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});
