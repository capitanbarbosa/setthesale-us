import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-blue-950 text-white sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="border border-gray-600 p-1 rounded-md">
          <Image
            src="/images/Logo-PNG.png"
            alt="Set The Sale Logo"
            width={60}
            height={20}
          />
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/services" className="hover:text-gray-300">
            Services
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
        <Link href="/book-a-call">
          <button className="bg-gradient-to-r from-red-400 to-pink-500 text-white font-bold py-2 px-4 rounded">
            Book a Call
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
