// components/Hero.jsx
import React from "react";
import Button from "@/components/atoms/Button";
import Container from "@/components/layout/Container";

const Hero = () => {
  return (
    <section
  className="relative w-full h-[90vh] bg-cover bg-center text-white flex items-center justify-center"
  style={{ backgroundImage: `url('/hero-child.jpg')` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

  {/* Centered Content */}
  <div className="z-10 text-center px-4 max-w-2xl">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome To ICCHE</h1>
    <p className="text-md md:text-lg mb-6">
      A non-profit society of IIEST Shibpur, dedicated to educating and
      empowering underprivileged children through love, learning, and
      community.
    </p>
    <Button
      text="Explore"
      className="bg-[#FF7043] hover:bg-[#e25f32] text-white px-6 py-2 rounded-md font-semibold transition"
    />
  </div>


      {/* Stats Card */}
      <Container>
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-80px] w-full max-w-5xl bg-[#FFE8DC] text-black  flex flex-col md:flex-row justify-between items-center shadow-lg rounded-md z-20">
          {/* Stat 1 */}
          <div className="text-center mb-4 md:mb-0 py-6 px-4 md:px-10">
            <p className="text-4xl font-bold text-[#FF7043]">1K+</p>
            <div className="h-[4px] w-[60px] bg-yellow-500 mx-auto my-2 rounded" />
            <p className="text-sm">Number of Students Studied here</p>
          </div>
          {/* Stat 2 */}
          <div className="text-center mb-4 md:mb-0 py-6 px-4 md:px-10">
            <p className="text-4xl font-bold text-[#FF7043]">50+</p>
            <div className="h-[4px] w-[60px] bg-yellow-500 mx-auto my-2 rounded" />
            <p className="text-sm">Number of Volunteers</p>
          </div>
          {/* Stat 3 */}
          <div className="text-center py-6 px-4 md:px-10">
            <p className="text-4xl font-bold text-[#FF7043]">50%</p>
            <div className="h-[4px] w-[60px] bg-yellow-500 mx-auto my-2 rounded" />
            <p className="text-sm">Success Rate</p>
          </div>
          {/* Goal Box */}
          <div className="bg-[#FF7043] py-9 rounded-md px-4 md:px-10 text-white font-semibold text-center  text-sm shadow-md">
            Our goal to help <br /> underprevelleged students
            <div className="h-[4px] w-[60px] bg-yellow-500 mx-auto my-2 rounded" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
