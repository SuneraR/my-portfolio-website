"use client";

import GitHub from "@/images/Logos/github.png";
import Linkedin from "@/images/Logos/linkedin.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 mt-16 bg-gray-900/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Copyright */}
          <p className="text-xs sm:text-sm text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Sunera.dev — Built with{" "}
            <span className="text-red-400">♥</span> by Sunera Ruwanara
          </p>

          {/* Navigation Links */}
          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <Link
              href="#projects"
              onClick={(e) => {
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              onClick={(e) => {
                document
                  .querySelector("#skills")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              onClick={(e) => {
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Contact
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="flex flex-col gap-2 justify-center items-center group">
              <Image
                src={GitHub}
                alt="GitHub Logo"
                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110"
              />
              <Link
                href="https://github.com/SuneraR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300 text-xs sm:text-sm font-medium"
              >
                GitHub
              </Link>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center group">
              <Image
                src={Linkedin}
                alt="LinkedIn Logo"
                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110"
              />

              <Link
                href="https://www.linkedin.com/in/sunera-ruwanara-b7b940252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300 text-xs sm:text-sm font-medium"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom gradient line */}
        <div className="mt-6 sm:mt-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>
    </footer>
  );
}
