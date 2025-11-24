"use client";

import { useState, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";

const NavItem = ({ item, closeMenu, isMobile = false }) => {
  // If no subItems, render as simple link
  if (!item.subItems || item.subItems.length === 0) {
    return (
      <Link
        href={item.href}
        className={`${
          isMobile
            ? "block w-full text-left px-4 py-3 text-lg font-medium text-gray-900 hover:bg-gray-100 rounded-md"
            : "inline-flex justify-center rounded-md px-4 py-2 text-sm font-medium text-black hover:text-gray-300"
        } focus:outline-none`}
        onClick={closeMenu}
      >
        {item.label}
      </Link>
    );
  }

  // If subItems exist, render dropdown menu (currently disabled, uncomment subItems to enable)
  /* return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md px-4 py-2 text-sm font-medium text-black hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          {item.label}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-2 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href={item.href}
                  className={`${
                    active ? "bg-blue-600 text-white" : "text-gray-900"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  onClick={closeMenu}
                >
                  {item.label} (Original)
                </Link>
              )}
            </Menu.Item>
            {item.subItems.map((subItem) => (
              <Menu.Item key={subItem.href}>
                {({ active }) => (
                  <Link
                    href={subItem.href}
                    className={`${
                      active ? "bg-blue-600 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    onClick={closeMenu}
                  >
                    {subItem.label}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  ); */
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    {
      href: "/", // Home - Original (chosen)
      label: "Home",
      subItems: [], // Variations hidden - uncomment to show during development
      /* subItems: [
        { href: "/home-1", label: "Home 1" },
        { href: "/home-2", label: "Home 2" },
        { href: "/home-3", label: "Home 3" },
      ], */
    },
    {
      href: "/about", // About - Original (chosen)
      label: "About",
      subItems: [], // Variations hidden - uncomment to show during development
      /* subItems: [
        { href: "/about-1", label: "About 1" },
        { href: "/about-2", label: "About 2" },
        { href: "/about-3", label: "About 3" },
      ], */
    },
    {
      href: "/services-1", // Services - Services 1 (chosen)
      label: "Services",
      subItems: [], // Variations hidden - uncomment to show during development
      /* subItems: [
        { href: "/services", label: "Services (Original)" },
        { href: "/services-2", label: "Services 2" },
      ], */
    },
    {
      href: "/contact", // Contact - Original (chosen)
      label: "Contact",
      subItems: [], // Variations hidden - uncomment to show during development
      /* subItems: [
        { href: "/contact-1", label: "Contact 1" },
        { href: "/contact-2", label: "Contact 2" },
      ], */
    },
    // {
    //   href: "/book-a-call", // Book a Call - Original (chosen)
    //   label: "Book a Call",
    //   subItems: [], // Variations hidden - uncomment to show during development
    //   /* subItems: [
    //     { href: "/book-a-call-1", label: "Book a Call 1" },
    //     { href: "/book-a-call-2", label: "Book a Call 2" },
    //   ], */
    // },
  ];

  return (
    <nav className="bg-white text-black sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Desktop Navigation */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/Logo-PNG.png"
              alt="Set The Sale Logo"
              width={120}
              height={40}
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <NavItem key={item.href} item={item} closeMenu={closeMenu} />
            ))}
              {/* Dev-only QA link: visible only in development */}
              {process.env.NODE_ENV !== "production" && (
                <>
                  <Link href="/home-4" className="hidden lg:inline-block">
                    <span className="text-sm text-gray-700 hover:text-gray-900 border border-gray-200 rounded-md px-2 py-1">
                      DEV: Home-4
                    </span>
                  </Link>
                  <Link href="/home-5" className="hidden lg:inline-block">
                    <span className="text-sm text-gray-700 hover:text-gray-900 border border-gray-200 rounded-md px-2 py-1">
                      DEV: Home-5
                    </span>
                  </Link>
                </>
              )}
            <Link href="/book-a-call">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-sm cursor-pointer">
                Book a Call
              </button>
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-300 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-white rounded-lg mt-2 mb-4 shadow-lg">
            {menuItems.map((item) => (
              <NavItem key={item.href} item={item} closeMenu={closeMenu} isMobile={true} />
            ))}

            {/* Dev-only QA link for mobile (visible only in development) */}
            {process.env.NODE_ENV !== "production" && (
              <>
                <div className="px-2 py-2">
                  <Link href="/home-4" onClick={closeMenu}>
                    <span className="block w-full text-center text-sm text-gray-900 bg-white rounded-md py-2">
                      DEV: Home-4
                    </span>
                  </Link>
                </div>
                <div className="px-2 py-2">
                  <Link href="/home-5" onClick={closeMenu}>
                    <span className="block w-full text-center text-sm text-gray-900 bg-white rounded-md py-2">
                      DEV: Home-5
                    </span>
                  </Link>
                </div>
              </>
            )}

            <div className="px-2 py-2">
              <Link href="/book-a-call" onClick={closeMenu}>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 cursor-pointer text-lg">
                  Book a Call
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
