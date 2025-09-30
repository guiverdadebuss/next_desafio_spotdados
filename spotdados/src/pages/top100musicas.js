import Link from "next/link";

export default function Top100Musicas() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Top 100 Músicas
      </h1>
      <p className="text-gray-600 mb-6">
        As 100 Músicas mais ouvidas!
      </p>
      <Link
        href="/top100artistas"
        className="text-green-600 hover:text-green-800 text-sm font-medium"
      >
        Ver Top 100 Artistas →
      </Link>
    </div>
  );
}
