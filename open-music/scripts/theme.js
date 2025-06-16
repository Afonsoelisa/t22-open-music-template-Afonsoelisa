export function setupDarkMode() {
  const button = document.getElementById("darkModeButton");
  const body = document.body;
  const icon = button.querySelector("img");

  // Recuperar tema salvo
  const savedTheme = localStorage.getItem("@openMusic:theme");

  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    icon.src = "./open-music/assets/icons/Sol.png";
  }

  button.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    const isDarkMode = body.classList.contains("dark-mode");

    // Atualiza ícone
    icon.src = isDarkMode
      ? "./open-music/assets/icons/Sol.png"
      : "./open-music/assets/icons/Lua.png";

    // Salva tema
    localStorage.setItem("@openMusic:theme", isDarkMode ? "dark" : "light");
  });
}
