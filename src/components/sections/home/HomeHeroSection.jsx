'use client';
import { useRouter } from 'next/navigation';
import React from "react";
import Button from "@/components/atoms/Button";
import Container from "@/components/layout/Container";

const HomeHeroSection = () => {
  const router = useRouter();
  return (
    <section
      className="relative w-full h-[90vh] bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: `url('/images/dummy.jpg')` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 md:bg-opacity-10 z-0" />

      {/* Hero Content */}
      <Container>
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Welcome To ICCHE
          </h1>
          <p className="text-sm sm:text-md md:text-lg mb-6 leading-relaxed">
            A non-profit society of IIEST Shibpur, dedicated to educating and
            empowering underprivileged children through love, learning, and
            community.
          </p>
          <div className="flex justify-center">
            <Button text="Explore" className="w-full sm:w-[200px]" onClick={() => router.push('/about')} />
          </div>
        </div>
      </Container>

      {/* Stats Card */}
      <Container>
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-60px] w-full max-w-6xl bg-[#FFE8DC] text-black flex flex-col md:flex-row justify-between items-center shadow-lg rounded-md z-20 p-4 md:p-0 gap-4 md:gap-0">
          {/* Stat 1 */}
          <div className="text-center py-4 px-4 md:px-10 w-full md:w-auto">
            <p className="text-3xl md:text-4xl font-bold text-[#FF7043]">1K+</p>
            <div className="h-[4px] w-[60px] bg-yellow-500 mx-auto my-2 rounded" />
            <p className="text-xs sm:text-sm">Number of Students Studied here</p>
          </div>

          {/* Stat 2 */}
          <div className="text-center py-4 px-4 md:px-10 w-full md:w-auto">
            <p className="text-3xl md:text-4xl font-bold text-[#FF7043]">50+</p>
            <div className="h-[4px] w-[60px] bg-yellow-500 mx-auto my-2 rounded" />
            <p className="text-xs sm:text-sm">Number of Volunteers</p>
          </div>

          {/* Stat 3 */}
          <div className="text-center py-4 px-4 md:px-10 w-full md:w-auto">
            <p className="text-3xl md:text-4xl font-bold text-[#FF7043]">50%</p>
            <div className="h-[4px] w-[60px] bg-yellow-500 mx-auto my-2 rounded" />
            <p className="text-xs sm:text-sm">Success Rate</p>
          </div>

          {/* Goal Box */}
          <div className="bg-[#FF7043] py-7 px-4 md:px-10 rounded-md text-white font-semibold text-center text-xs sm:text-sm w-full md:w-auto shadow-md">
            Our goal to help <br /> underprivileged students
            <div className="h-[4px] w-[60px] bg-yellow-500 mx-auto my-2 rounded" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeHeroSection;
