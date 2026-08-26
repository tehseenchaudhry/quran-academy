
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0a5c3a] text-white rounded-t-2xl shadow-lg">

      <div className="container mx-auto px-4 py-12">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo & About */}
          <div >

            <Link
              to="/"
              className="flex items-center gap-3 mb-5 group"
            >
              <img
                src="/logo.jpg"
                alt="Quran Academy"
                className="w-16 h-16 object-cover rounded-lg shadow-md group-hover:scale-105 transition-all duration-300"
              />

              <span className="text-xl font-bold leading-tight">
                Al Hafiz-Online
                <br />
                <span className="text-[#c9a050]">
                  Quran Academy
                </span>
              </span>
            </Link>

            <p className="text-sm text-white/90 leading-relaxed mb-5">
              Learn Quran online with qualified teachers. Study Tajweed,
              Memorization, and Islamic studies from the comfort of your home.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">

              <Link
                to="/"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/30 hover:bg-[#c9a050] hover:border-[#c9a050] transition-all duration-300 hover:scale-110"
              >
                <FaFacebookF />
              </Link>

              <Link
                to="/"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/30 hover:bg-[#c9a050] hover:border-[#c9a050] transition-all duration-300 hover:scale-110"
              >
                <FaTwitter />
              </Link>

              <Link
                to="/"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/30 hover:bg-[#c9a050] hover:border-[#c9a050] transition-all duration-300 hover:scale-110"
              >
                <FaInstagram />
              </Link>

              <Link
                to="/"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/30 hover:bg-[#c9a050] hover:border-[#c9a050] transition-all duration-300 hover:scale-110"
              >
                <FaYoutube />
              </Link>

            </div>
          </div>

          {/* Quick Links */}
          <div >

            <h3 className="text-lg font-semibold mb-5 pb-2 border-b border-[#c9a050]">
              Quick Links
            </h3>

            <ul className="space-y-3">

              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Services", "/services"],
                ["Contact Us", "/contact"],
                ["Privacy Policy", "/privacy-policy"],
                ["Terms of Service", "/terms-conditions"],
              ].map(([name, link], index) => (

                <li key={index}>
                  <Link
                    to={link}
                    className="text-white/90 hover:text-[#c9a050] hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {name}
                  </Link>
                </li>

              ))}

            </ul>
          </div>

          {/* Courses */}
          <div >

            <h3 className="text-lg font-semibold mb-5 pb-2 border-b border-[#c9a050]">
              Our Courses
            </h3>

            <ul className="space-y-3">

              <li>
                <Link
                  to="/courses/quran-memorization"
                  className="text-white/90 hover:text-[#c9a050] hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Quran Memorization (Hifz)
                </Link>
              </li>

              <li>
                <Link
                  to="/Tajweed"
                  className="text-white/90 hover:text-[#c9a050] hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Tajweed
                </Link>
              </li>

              <li>
                <Link
                  to="/courses/quran-translation"
                  className="text-white/90 hover:text-[#c9a050] hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Quran Tafsir
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div >

            <h3 className="text-lg font-semibold mb-5 pb-2 border-b border-[#c9a050]">
              Contact Us
            </h3>

            <div className="space-y-4 text-white/90">

              <div className="flex items-start gap-3  ">
                <FaMapMarkerAlt className="mt-1 text-[#c9a050] shrink-0" />

                <span>
                  Hassan Manzil, Street No-01,
                  Bahawalpur
                </span>
              </div>

              <div className="flex items-center gap-3 ">
                <FaPhoneAlt className="text-[#c9a050] shrink-0" />

                <span>
                  +92 300 6868033
                </span>
              </div>

              <div className="flex items-center gap-3 ">
                <FaEnvelope className="text-[#c9a050] shrink-0" />

                <span>
                  info@a-hafiz.com
                </span>
              </div>

            </div>

            {/* Newsletter */}
            <div className="mt-7">

              <h4 className="font-semibold mb-3">
                Subscribe to Newsletter
              </h4>

              <div className="flex">

                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2.5 text-sm text-white bg-white/10 border border-white/30 rounded-l-lg focus:outline-none focus:border-[#c9a050] w-full placeholder:text-white/60"
                />

                <button
                  className="bg-[#c9a050] hover:bg-[#a88c24] px-4 py-2.5 rounded-r-lg font-semibold transition-all duration-300"
                >
                  Subscribe
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div
          className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-white/80"
        >
          <p>
            © 2026 Online Quran Academy. All rights reserved.
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
