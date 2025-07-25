"use client";
import React, { useState } from "react";
import Container from "./Container";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Link from "next/link";
import Button from "../atoms/Button";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "Event", href: "/event" },
    { name: "Donation Drive", href: "/donation-drive" },
    { name: "About", href: "/about" },
    { name: "Classroom", href: "/classroom" },
  ];

  return (
    <div className="w-full">

      <div className="w-full bg-[#FF7043] text-white text-sm">
        <Container className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 gap-2">
          {/* Contact Info */}
          <div className="flex gap-2 items-center justify-center md:justify-start">
            <FaPhoneAlt className="text-xs" />
            <p className="text-sm">+91 9999999999</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 justify-center md:justify-end">
            <FaFacebookF className="cursor-pointer hover:text-gray-200 transition" />
            <FaInstagram className="cursor-pointer hover:text-gray-200 transition" />
            <FaTwitter className="cursor-pointer hover:text-gray-200 transition" />
          </div>
        </Container>
      </div>

      {/* Logo & Nav */}
      <Container className="py-3 px-4 md:px-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div>
              <p className="text-[#FF7043] font-semibold text-3xl md:text-4xl">
                ICCHE
              </p>
              <div className="h-[1.5px] w-[110px] md:w-[125px] mb-1 bg-black" />
              <p className="text-[9px]">Non-profitable Organization</p>
            </div>
          </Link>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <FaTimes className="text-xl text-[#FF7043]" />
              ) : (
                <FaBars className="text-xl text-[#FF7043]" />
              )}
            </button>
          </div>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-5">
            <ul className="flex flex-row gap-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`hover:text-[#FF7043] transition-colors duration-200 ${pathname === link.href
                      ? "text-[#FF7043]"
                      : "text-black"
                      }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Login Button - Desktop */}
          <div className="hidden md:flex items-center">
            <Button text={"Login"} />
          </div>
        </div>

        {/* Nav Links - Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4  border-t border-[#FF7043] py-2 rounded ">
            <ul className="flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-1 px-2 rounded hover:bg-gray-100 ${pathname === link.href
                      ? "text-[#FF7043] font-medium"
                      : "text-black"
                      }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Button text="Login" className=" mt-2" />
              </li>
            </ul>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Header;
