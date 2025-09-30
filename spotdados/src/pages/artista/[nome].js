import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import dadosHistory from "../../data/history.json";
import artistasFotos from "../../data/artistasFotos.json";

export default function ArtistaPage() {
  const router = useRouter();
  const { nome } = router.query;

  if (!nome) return <p>Carregando...</p>;

  // Filtra músicas do artista
  const musicasDoArtista = dadosHistory.filter(
    (musica) => musica.master_metadata_album_artist_name === nome
  );

  // Contar plays por música
  const contagemMusicas = {};
  musicasDoArtista.forEach((musica) => {
    const faixa = musica.master_metadata_track_name;
    if (faixa) {
      contagemMusicas[faixa] = contagemMusicas[faixa] || {
        ...musica,
        plays: 0,
      };
      contagemMusicas[faixa].plays += 1;
    }
  });

  // Ordenar top 20 músicas
  const topMusicas = Object.values(contagemMusicas)
    .sort((a, b) => b.plays - a.plays)
    .slice(0, 20);

  if (topMusicas.length === 0) {
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

  // Foto do artista via JSON (ou placeholder)
  const fotoArtista = artistasFotos[nome] || "/avatar-placeholder.png";

  return (
    <div className="p-6">
      {/* Header com foto + nome */}
      <div className="flex items-center gap-4 mb-6">
        <Image
          src={fotoArtista}
          alt={nome}
          width={120}
          height={120}
          className="rounded-full"
        />
        <h1 className="text-4xl font-bold">{nome}</h1>
      </div>

      {/* Lista de músicas */}
      <div className="flex flex-wrap gap-4">
        {topMusicas.map((musica, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white p-4 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
          >
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
            <p className="text-gray-400 text-xs">{musica.plays} plays</p>
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
