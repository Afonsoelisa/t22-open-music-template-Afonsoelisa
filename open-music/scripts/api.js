// api.js
export async function fetchAlbums() {
  try {
    const response = await fetch("https://openmusic-fake-api.onrender.com/api/musics");
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    const data = await response.json();
    return data; // Deve ser um array de objetos
  } catch (error) {
    console.error("Falha ao buscar os álbuns:", error);
    return []; // Retorna array vazio caso falhe
  }
}
