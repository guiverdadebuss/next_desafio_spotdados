import Link from "next/link";
import { useRouter } from "next/router";
import { FaRegUser } from "react-icons/fa";
import { MdAutoGraph } from "react-icons/md";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  const isActive = (path) => router.pathname === path;

  return (
    <nav className="bg-transparent text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-[#ffffff]">
        🎵 Spotidados
      </Link>

    </nav>
  );
}
