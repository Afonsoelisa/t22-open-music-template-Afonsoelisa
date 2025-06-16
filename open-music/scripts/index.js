import { albumList } from "./albumsDatabase.js";
import { applyInputRangeStyle } from "./inputRange.js";
import { setupDarkMode } from "./theme.js";


// Criação do card permanece igual
function createAlbumCard(album) {
  // ... (seu código aqui)
}

function displayAlbumCards(filteredList = albumList) {
  const container = document.querySelector('.album-container');
  container.innerHTML = '';

  filteredList.forEach(album => {
    const card = createAlbumCard(album);
    container.appendChild(card);
  });
}

function filterAlbumsByPrice(maxPrice) {
  const filtered = albumList.filter(album => parseFloat(album.price) <= maxPrice);
  displayAlbumCards(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
  setupDarkMode();              // Chama função do dark mode
  applyInputRangeStyle();       // Aplica estilo ao input range

  const priceRange = document.getElementById("priceRange");
  const priceValue = document.getElementById("priceValue");

  if (priceRange && priceValue) {
    priceRange.addEventListener("input", (event) => {
      const value = event.target.value;
      priceValue.textContent = value;
      filterAlbumsByPrice(value);
    });
  }

  displayAlbumCards(); // Exibe todos inicialmente
});



