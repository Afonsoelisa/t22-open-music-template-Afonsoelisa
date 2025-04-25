import { applyInputRangeStyle } from "./js/inputRange.js";
import { albumList } from "./js/albumsDatabase.js";

// Função para criar um card individual de álbum
function createAlbumCard(album) {
  // Criando o elemento <div> para o card
  const albumCard = document.createElement('div');
  albumCard.classList.add('album-card');

  // Criando a imagem do álbum
  const albumImage = document.createElement('img');
  albumImage.src = album.img;
  albumImage.alt = `Capa do álbum ${album.title}`;
  albumImage.classList.add('album-image');

  // Criando a div para os detalhes do álbum
  const albumDetails = document.createElement('div');
  albumDetails.classList.add('album-details');

  // Título do álbum
  const albumTitle = document.createElement('h3');
  albumTitle.textContent = album.title;
  albumDetails.appendChild(albumTitle);

  // Banda do álbum
  const albumBand = document.createElement('p');
  albumBand.textContent = `Banda: ${album.band}`;
  albumDetails.appendChild(albumBand);

  // Gênero do álbum
  const albumGenre = document.createElement('p');
  albumGenre.textContent = `Gênero: ${album.genre}`;
  albumDetails.appendChild(albumGenre);

  // Preço do álbum
  const albumPrice = document.createElement('p');
  albumPrice.textContent = `Preço: R$ ${album.price}`;
  albumDetails.appendChild(albumPrice);

  // Botão de compra
  const buyButton = document.createElement('button');
  buyButton.classList.add('buy-btn');
  buyButton.textContent = 'Comprar';
  albumDetails.appendChild(buyButton);

  // Adicionando os elementos no card
  albumCard.appendChild(albumImage);
  albumCard.appendChild(albumDetails);

  return albumCard;
}

// Função para exibir os cards na página
function displayAlbumCards() {
  const container = document.querySelector('.album-container'); // Pega o contêiner onde os cards serão inseridos

  // Limpando qualquer conteúdo anterior no container
  container.innerHTML = '';

  // Criando os cards para cada álbum no array albumList
  albumList.forEach(album => {
    const card = createAlbumCard(album);
    container.appendChild(card); // Adiciona o card no contêiner
  });
}

// Chama a função para renderizar os cards assim que o DOM estiver carregado
document.addEventListener('DOMContentLoaded', displayAlbumCards);
