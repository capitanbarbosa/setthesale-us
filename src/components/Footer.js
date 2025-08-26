import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/">
              <Image
                src="/images/Logo-PNG-white.png"
                alt="Set The Sale Logo"
                width={150}
                height={50}
              />
            </Link>
            <p className="mt-4 text-gray-400">
              Combining AI-driven automation, human insight, and strategic sales
              flows to qualify leads, book appointments, and scale revenue —
              without adding headcount.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">Get in touch</h3>
            <p className="mt-4 text-gray-400">info@setthesale.us</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500">
          <p>©{new Date().getFullYear()} All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
