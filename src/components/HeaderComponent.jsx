"use client";
import { useState } from "react";
import { FaUserCircle, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-purple shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-bold text-whiteColor">
            H.M Store
          </Link>
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl text-whiteColor">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Category Links (hidden on mobile, shown on large screens) */}
        <nav className="hidden lg:flex space-x-6 text-whiteColor text-lg">
          <Link href="/lawn" className="hover:text-deepTeal">
            Lawn
          </Link>
          <Link href="/chiffon" className="hover:text-deepTeal">
            Chiffon
          </Link>
          <Link href="/cotton" className="hover:text-deepTeal">
            Cotton
          </Link>
          <Link href="/chicken-kaari" className="hover:text-deepTeal">
            Chicken Kaari
          </Link>
          <Link href="/summer" className="hover:text-deepTeal">
            Summer
          </Link>
          <Link href="/winter" className="hover:text-deepTeal">
            Winter
          </Link>
        </nav>

        {/* Right icons (Profile, Login, Cart) */}
        <div className="flex items-center space-x-6">
          <Link href="/profile">
            <FaUserCircle className="text-2xl text-whiteColor" />
          </Link>
          <Link href="/login" className="text-whiteColor hover:text-deepTeal">
            Login
          </Link>
          <Link href="/cart">
            <FaShoppingCart className="text-2xl text-whiteColor" />
          </Link>
        </div>
      </div>

      {/* Mobile menu (only shown when the hamburger icon is clicked) */}
      {isMenuOpen && (
        <div className="lg:hidden bg-whiteColor shadow-md">
          <nav className="flex flex-col items-center space-y-4 py-4 text-charcoal text-lg">
            <Link
              href="/lawn"
              onClick={toggleMenu}
              className="hover:text-deepTeal"
            >
              Lawn
            </Link>
            <Link
              href="/chiffon"
              onClick={toggleMenu}
              className="hover:text-deepTeal"
            >
              Chiffon
            </Link>
            <Link
              href="/cotton"
              onClick={toggleMenu}
              className="hover:text-deepTeal"
            >
              Cotton
            </Link>
            <Link
              href="/chicken-kaari"
              onClick={toggleMenu}
              className="hover:text-deepTeal"
            >
              Chicken Kaari
            </Link>
            <Link
              href="/summer"
              onClick={toggleMenu}
              className="hover:text-deepTeal"
            >
              Summer
            </Link>
            <Link
              href="/winter"
              onClick={toggleMenu}
              className="hover:text-deepTeal"
            >
              Winter
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
