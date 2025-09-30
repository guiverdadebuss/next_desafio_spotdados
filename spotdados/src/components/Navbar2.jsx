import Link from "next/link";
import { useRouter } from "next/router";
import { FaRegUser } from "react-icons/fa";
import { MdAutoGraph } from "react-icons/md";
import Image from "next/image";

export default function Navbar2() {
  const router = useRouter();
  const isActive = (path) => router.pathname === path;

  return (
    <nav className="bg-transparent text-white p-4 flex justify-around items-center">
      <div className="flex space-x-6">
        <Link href="/" className={isActive("/")}>
          <FaRegUser className="size-7" />
        </Link>
      </div>
      <div className="flex space-x-6">
        <Link
          href="/top100artistas"
          className={isActive("/top100artistas")}
        >
          <MdAutoGraph className="size-7" />
        </Link>
      </div>
    </nav>
  );
}
