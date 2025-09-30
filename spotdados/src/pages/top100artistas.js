import Link from "next/link";
import Image from "next/image";
import dadosHistory from "../data/history.json";

export default function Top100Artistas() {
  if (!Array.isArray(dadosHistory) || dadosHistory.length === 0) {
    return <p>Nenhuma música encontrada</p>;
  }

  const contagemArtistas = {};
  dadosHistory.forEach((musica) => {
    const artista = musica.master_metadata_album_artist_name;
    if (artista) {
      contagemArtistas[artista] = (contagemArtistas[artista] || 0) + 1;
    }
  });

  const topArtistas = Object.entries(contagemArtistas)
    .map(([artista, plays]) => ({ artista, plays }))
    .sort((a, b) => b.plays - a.plays)
    .slice(0, 100);

  return (
    <div>
      <Image src="/spotidados.png" alt="Meu Logo" width={100} height={100} />
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Top 100 Artistas
        </h1>
        <p className="text-gray-600 mb-6">Os 100 Artistas mais ouvidos!</p>
        <Link
          href="/top100musicas"
          className="text-green-600 hover:text-green-800 text-sm font-medium"
        >
          Ver Top 100 Músicas →
        </Link>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {topArtistas.map((artistaObj) => (
            <Link
              key={artistaObj.artista}
              href={`/artista/${encodeURIComponent(artistaObj.artista)}`} // link dinâmico
              className="flex flex-col items-center bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition"
            >
              {/* Avatar do artista */}
              <div className="w-20 h-20 mb-2">
                <Image
                  src="/avatar-placeholder.png" // Substitua pelo avatar real se tiver
                  alt={artistaObj.artista}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>

              {/* Nome do artista */}
              <p className="text-white text-sm font-semibold text-center truncate w-20">
                {artistaObj.artista}
              </p>

              {/* Plays */}
              <p className="text-gray-400 text-xs">{artistaObj.plays} plays</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
