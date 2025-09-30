import Link from "next/link";
import Image from "next/image";


export default function Top100Artistas() {
  return (
    <div>
      <Image 
            src="/spotidados.png" 
            alt="Meu Logo" 
            width={100} 
            height={100}
            />
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Top 100 Artistas
      </h1>
      <p className="text-gray-600 mb-6">
        Os 100 Artistas mais ouvidos!
      </p>
      <Link
        href="/top100musicas"
        className="text-green-600 hover:text-green-800 text-sm font-medium"
      >
        Ver Top 100 Músicas →
      </Link>
    </div>
    </div>
  );
}
