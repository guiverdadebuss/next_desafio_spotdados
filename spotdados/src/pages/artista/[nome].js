import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import dadosHistory from "../../data/history.json";

export default function ArtistaPage() {
  const router = useRouter();
  const { nome } = router.query; // pega o nome do artista da URL

  if (!nome) return <p>Carregando...</p>;

  // Filtra músicas do artista
  const musicasDoArtista = dadosHistory
    .filter((musica) => musica.master_metadata_album_artist_name === nome)
    .sort((a, b) => (b.plays || 0) - (a.plays || 0)) // ordena por plays
    .slice(0, 20); // pega apenas top 20

  if (musicasDoArtista.length === 0) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">{nome}</h1>
        <p>Nenhuma música encontrada para este artista.</p>
        <Link
          href="/top100artistas"
          className="text-green-600 hover:text-green-800"
        >
          ← Voltar para Top 100 Artistas
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{nome}</h1>
      <div className="flex flex-wrap gap-4">
        {musicasDoArtista.map((musica, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white p-4 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
          >
            {/* Capa do álbum */}
            {musica.master_metadata_album_image_url && (
              <div className="mb-2">
                <Image
                  src={musica.master_metadata_album_image_url}
                  alt={musica.master_metadata_track_name}
                  width={200}
                  height={200}
                  className="rounded"
                />
              </div>
            )}
            <p className="font-semibold">{musica.master_metadata_track_name}</p>
            <p className="text-gray-400 text-sm">
              {musica.master_metadata_album_album_name}
            </p>
            <p className="text-gray-400 text-xs">{musica.plays || 0} plays</p>
          </div>
        ))}
      </div>
      <Link
        href="/top100artistas"
        className="text-green-600 hover:text-green-800 mt-6 inline-block"
      >
        ← Voltar para Top 100 Artistas
      </Link>
    </div>
  );
}
