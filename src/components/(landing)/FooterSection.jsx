import React from "react";

const FooterSection = () => {
  return (
    <footer className="bg-[#9F84BD] text-white py-10">
      <div className="container mx-auto px-4">
        {/* Footer Top */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          {/* Logo & About */}
          <div className="mb-8 lg:mb-0 text-center lg:text-left">
            <h2 className="text-2xl font-bold text-white">H.M Store</h2>
            <p className="mt-2 text-white max-w-md">
              Discover high-quality fabrics at H.M Store, your trusted
              destination for luxurious chiffons, cozy cottons, and much more
              for every season and occasion.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex space-x-8">
            <ul className="text-white">
              <li className="mb-2">
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/shop" className="hover:text-white">
                  Shop
                </a>
              </li>
              <li className="mb-2">
                <a href="/about" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
            <ul className="text-white">
              <li className="mb-2">
                <a href="/privacy" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="/terms" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li className="mb-2">
                <a href="/returns" className="hover:text-white">
                  Return Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center lg:text-right text-white">
            <p>Phone: +123 456 7890</p>
            <p>Email: info@hmstore.com</p>
            <p>Address: 123 Fabric Street, City, Country</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col lg:flex-row justify-between items-center border-t border-gray-800 pt-4">
          {/* Social Media Links */}
          <div className="flex space-x-6 mb-4 lg:mb-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white">
            &copy; {new Date().getFullYear()} H.M Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
