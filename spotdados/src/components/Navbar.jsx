import Link from "next/link";
import { useRouter } from "next/router";
import { FaRegUser } from "react-icons/fa";
import { MdAutoGraph } from "react-icons/md";

export default function Navbar() {
  const router = useRouter();
  const isActive = (path) => router.pathname === path;

  return (
    <nav className="bg-transparent text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-[#ffffff]">
        🎵 Spotidados
      </Link>

      <div className="flex space-x-6">
        <Link href="/perfil" className={isActive("/perfil") ? " p-2" : "p-2"}>
          <FaRegUser className="size-8" />
        </Link>
      </div>
      <div>
        <Link
          href="/estatisticas"
          className={isActive("/estatisticas") ? " p-2" : "p-2"}
        >
          <MdAutoGraph className="size-8" />
        </Link>
      </div>
    </nav>
  );
}
