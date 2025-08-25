import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/Logo-PNG.png"
            alt="Set The Sale Logo"
            width={150}
            height={50}
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
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Book a Call
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
