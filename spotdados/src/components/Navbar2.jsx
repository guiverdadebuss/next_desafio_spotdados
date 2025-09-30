import Link from "next/link";
import { useRouter } from "next/router";
import { FaRegUser } from "react-icons/fa";

export default function Navbar2() {
  const router = useRouter();
  const isActive = (path) => router.pathname === path;

  return (
    <nav className="bg-black text-white p-4 flex justify-around items-center">
      <div className="flex space-x-6">
        <Link
          href="/perfil"
          className={isActive("/perfil") ? " p-2" : "p-2"}
        >
          <FaRegUser />
        </Link>
      </div>
      <div>
        <Link
          href="/estatisticas"
          className={isActive("/estatisticas") ? " p-2" : "p-2"}
        >
          📊
        </Link>
      </div>
    </nav>
  );
}
