import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Navbar2 from "@/components/Navbar2";

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#9900FF] to-black flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <Component {...pageProps} />
      </main>
      <Navbar2 />
      <Footer />
    </div>
  );
}
