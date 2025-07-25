import React from "react";
import Container from "./Container";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#212121] text-white">
      <Container className={"flex flex-row"}>
        <div>
          <p>Contact Us</p>
          <p>
            If you want to be a part of ICCHE, please feel free to reach out{" "}
          </p>
          <p>Slater Hall, IIEST Shibpur, Howrah West Bengal</p>
        </div>
        <div>
          <p>Quick Links</p>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Gallery</Link>
            </li>
            <li>
              <Link href="/">Volunteers</Link>
            </li>
            <li>
              <Link href="/">Students</Link>
            </li>
            <li>
              <Link href="/">Alumni</Link>
            </li>
            <li>
              <Link href="/">About us</Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
