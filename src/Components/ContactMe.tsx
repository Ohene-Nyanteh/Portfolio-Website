import Link from "next/link";
import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

export default function ContactMe() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center p-10 bg-gray-900 text-slate-300">
      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
      <div className="flex space-x-8 mb-10">
        {/* LinkedIn */}
        <Link
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors duration-200"
        >
          <FaLinkedin size={40} />
        </Link>

        {/* Instagram */}
        <Link
          href="https://www.instagram.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition-colors duration-200"
        >
          <FaInstagram size={40} />
        </Link>

        {/* Twitter */}
        <Link
          href="https://twitter.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-200"
        >
          <FaTwitter size={40} />
        </Link>

        {/* GitHub */}
        <Link
          href="https://github.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-500 transition-colors duration-200"
        >
          <FaGithub size={40} />
        </Link>
      </div>
      <footer className="text-sm mt-10">
        &copy; {new Date().getFullYear()} Ohene Nyanteh
      </footer>
    </div>
  );
}
