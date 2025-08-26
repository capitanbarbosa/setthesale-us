import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-blue-950 text-white sticky top-0 z-50">
      <div className="container mx-auto px-6 py-2 flex items-center">
        <div className="flex items-center space-x-6 flex-1">
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
        <Link href="/" className="border border-gray-600 p-2 rounded-md">
          <Image
            src="/images/Logo-PNG-white.png"
            alt="Set The Sale Logo"
            width={90}
            height={30}
          />
        </Link>
        <div className="flex-1 flex justify-end">
          <Link
            href="https://calendly.com/pachocripto/initial-consultation-companies"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-300">
              Book a Call
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
