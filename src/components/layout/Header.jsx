"use client";
import React from "react";
import Container from "./Container";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";
import Button from "../atoms/Button";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "Event", href: "/event" },
    { name: "Donation Drive", href: "/donation-drive" },
    { name: "About", href: "/about" },
    { name: "Classroom", href: "/classroom" },
  ];

  return (
    <div>
      <div className="w-full h-[35px] bg-[#FF7043] text-white ">
        <Container className="flex flex-row justify-between px-10 py-2 text-sm">
          <div className="flex gap-2 items-center">
            <FaPhoneAlt />
            <p>+91 9999999999</p>
          </div>
          <div className="flex gap-4">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </Container>
      </div>
      <Container className="py-2">
        <div className="flex justify-between">
          <Link href="/">
            <p className="text-[#FF7043] font-semibold text-4xl">ICCHE</p>
            <div className="h-[1.5px] w-[125px] mb-1 bg-black" />
            <p className="text-[9px]">Non-profitable Organization</p>
          </Link>
          <div className="flex items-center">
            <ul className="flex flex-row gap-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`hover:text-[#FF7043] transition-colors duration-200 ${
                      pathname === link.href ? "text-[#FF7043]" : "text-black"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center">
            <Button text={"Login"} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
