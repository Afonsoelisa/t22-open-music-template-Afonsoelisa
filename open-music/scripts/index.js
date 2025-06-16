import { applyInputRangeStyle } from "./inputRange.js";
import { setupDarkMode } from "./theme.js";
import { fetchAlbums } from "./api.js";

let albumList = []; // ✅ Correto

function createAlbumCard(album) {
  const albumCard = document.createElement("div");
  albumCard.classList.add("album-card");

  const albumImage = document.createElement("img");
  albumImage.src = album.img;
  albumImage.alt = `Capa do álbum ${album.title}`;
  albumImage.classList.add("album-image");

  const albumDetails = document.createElement("div");
  albumDetails.classList.add("album-details");

  const albumTitle = document.createElement("h3");
  albumTitle.textContent = album.title;
  albumDetails.appendChild(albumTitle);

  const albumBand = document.createElement("p");
  albumBand.textContent = `Banda: ${album.band}`;
  albumDetails.appendChild(albumBand);

  const albumGenre = document.createElement("p");
  albumGenre.textContent = `Gênero: ${album.genre}`;
  albumDetails.appendChild(albumGenre);

  const albumPrice = document.createElement("p");
  albumPrice.textContent = `Preço: R$ ${album.price}`;
  albumDetails.appendChild(albumPrice);

  const buyButton = document.createElement("button");
  buyButton.classList.add("buy-btn");
  buyButton.textContent = "Comprar";
  albumDetails.appendChild(buyButton);

  albumCard.appendChild(albumImage);
  albumCard.appendChild(albumDetails);

  return albumCard;
}

function displayAlbumCards(filteredList = albumList) {
  const container = document.querySelector(".album-container");
  container.innerHTML = "";

  filteredList.forEach((album) => {
    const card = createAlbumCard(album);
    container.appendChild(card);
  });
}

function filterAlbumsByPrice(maxPrice) {
  const filtered = albumList.filter((album) => parseFloat(album.price) <= maxPrice);
  displayAlbumCards(filtered);
}

document.addEventListener("DOMContentLoaded", async () => {
  setupDarkMode();
  applyInputRangeStyle();

  albumList = await fetchAlbums(); // Carrega da API
  displayAlbumCards();

  const priceRange = document.getElementById("priceRange");
  const priceValue = document.getElementById("priceValue");

  if (priceRange && priceValue) {
    priceRange.addEventListener("input", (event) => {
      const value = event.target.value;
      priceValue.textContent = value;
      filterAlbumsByPrice(value);
    });
  }

  // 🎵 Filtro por Gênero (agora dentro do DOMContentLoaded!)
  const genreRadios = document.querySelectorAll('input[name="genre"]');

  genreRadios.forEach((radio) => {
    radio.addEventListener("change", (event) => {
      const selectedGenre = event.target.value;

      if (selectedGenre === "all") {
        displayAlbumCards(albumList);
      } else {
        const filtered = albumList.filter((album) =>
          album.genre.toLowerCase() === selectedGenre.toLowerCase()
        );
        displayAlbumCards(filtered);
      }
    });
  });

});

