// src/scripts/gerarArtistasFotos.js
const fs = require("fs");
const path = require("path");
const dadosHistory = require("../data/history.json");

// 1️⃣ Contar os plays de cada artista
const contagemArtistas = {};
dadosHistory.forEach((musica) => {
  const artista = musica.master_metadata_album_artist_name;
  if (artista) {
    contagemArtistas[artista] = contagemArtistas[artista] || {
      plays: 0,
      musicas: {},
    };

    // incrementa total de plays
    contagemArtistas[artista].plays += 1;

    // agrupa músicas e conta plays individuais
    const track = musica.master_metadata_track_name;
    if (track) {
      contagemArtistas[artista].musicas[track] =
        contagemArtistas[artista].musicas[track] || {
          plays: 0,
          imagem: musica.master_metadata_album_image_url,
        };
      contagemArtistas[artista].musicas[track].plays += 1;
    }
  }
});

// 2️⃣ Ordenar os artistas por plays e pegar top 100
const topArtistas = Object.entries(contagemArtistas)
  .map(([artista, data]) => ({
    artista,
    plays: data.plays,
    musicas: data.musicas,
  }))
  .sort((a, b) => b.plays - a.plays)
  .slice(0, 100);

// 3️⃣ Criar o mapa artista -> url da foto (capa da música mais tocada)
const artistasFotos = {};
topArtistas.forEach((artistaObj) => {
  const musicasOrdenadas = Object.values(artistaObj.musicas).sort(
    (a, b) => b.plays - a.plays
  );
  const imagem =
    musicasOrdenadas[0]?.imagem || "/avatar-placeholder.png";

  artistasFotos[artistaObj.artista] = imagem;
});

// 4️⃣ Caminho absoluto do arquivo de saída
const filePath = path.join(__dirname, "../data/artistasFotos.json");

// 5️⃣ Salvar em um arquivo JSON
fs.writeFileSync(filePath, JSON.stringify(artistasFotos, null, 2));

console.log("✅ Mapa de artistas criado com sucesso em:", filePath);
