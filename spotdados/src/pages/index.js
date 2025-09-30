import {
  contarTotalMusicas,
  obterPrimeiraMusica,
  encontrarArtistaMaisOuvido,
} from "@/utils/dataProcessing";
import Image from "next/image";

export default function Home() {
  return (
    <div>
        <Image 
      src="/spotidados.png" 
      alt="Meu Logo" 
      width={100} 
      height={100}
    />
    <div className="space-y-6">
      <div class="max-w-2xl mx-auto p-6 rounded-2xl bg-transparent text-white">
        <div class="flex items-start gap-6">
          <div class="flex flex-col items-center">
            <img
              src="/perfil.jpeg"
              alt="Foto de perfil"
              className="w-30 h-30 rounded-full"
            />
            <h2 class="mt-3 text-lg font-semibold">Alex Turner</h2>
            <p class="text-sm text-gray-300">20/09/2025</p>
          </div>

          <div class="flex-1">
            <div class="flex justify-around">
              <div class="text-center">
                <p class="text-lg font-bold">43</p>
                <p class="text-xs tracking-wider text-gray-300">SEGUIDORES</p>
              </div>
              <div class="text-center">
                <p class="text-lg font-bold">43</p>
                <p class="text-xs tracking-wider text-gray-300">SEGUINDO</p>
              </div>
            </div>

            <div class="flex gap-3 mt-6 justify-center">
              <button class="px-4 py-2 rounded-full bg-gray-800 text-white text-sm hover:bg-gray-700 transition">
                Editar Perfil
              </button>
              <button class="px-4 py-2 rounded-full bg-gray-800 text-white text-sm hover:bg-gray-700 transition">
                Partilhar Perfil
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-transparent rounded-lg shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4">
            <div className="text-lg font-semibold text-white truncate">
              {contarTotalMusicas()}
            </div>
            <div className="text-white">Total de reproduções</div>
          </div>

          <div className="p-4">
            <div className="text-lg font-semibold text-white truncate">
              {obterPrimeiraMusica()}
            </div>
            <div className="text-white">Primeira música no histórico</div>
          </div>

          <div className="p-4">
            <div className="text-lg font-semibold text-white truncate">
              {encontrarArtistaMaisOuvido()}
            </div>
            <div className="text-white">Artista mais ouvido</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
