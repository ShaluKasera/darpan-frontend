'use client';
import { useRouter } from 'next/navigation';
import React from "react";
import Button from "@/components/atoms/Button";
import Container from "@/components/layout/Container";

const HomeHeroSection = () => {
  const router = useRouter();

  return (
    <section
      className="relative w-full h-screen md:h-[90vh] bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: `url('/images/dummy.jpg')` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 md:bg-black/20 z-0" />

      {/* Hero Content */}
      <Container>
        <div className="relative z-10 max-h-[200px] sm:h-auto text-center px-4 max-w-2xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Welcome To ICCHE
          </h1>
          <p className="text-xs sm:text-sm md:text-lg mb-6 leading-relaxed">
            A non-profit society of IIEST Shibpur, dedicated to educating and
            empowering underprivileged children through love, learning, and
            community.
          </p>
          <div className="flex justify-center">
            <Button text="Explore" className="w-full sm:w-[200px]" onClick={() => router.push('/about')} />
          </div>
        </div>
      </Container>

      {/* Stats Card - Always Horizontal */}
      <div className="absolute  inset-x-0 bottom-[-80px] px-2 z-20">
        <Container>
          <div className="w-full max-w-6xl bg-[#FFE8DC] text-black flex flex-row justify-between items-center shadow-lg rounded-md md:min-h-[150px] p-2 md:p-0 gap-2 sm:gap-4 md:gap-0 mx-auto overflow-x-auto">
            {/* Stat 1 */}
            <div className="text-center py-2 px-2 sm:px-4 w-full">
              <p className="text-xl sm:text-2xl md:text-4xl font-bold text-[#FF7043]">1K+</p>
              <div className="h-[2px] sm:h-[4px] w-[40px] sm:w-[60px] bg-yellow-500 mx-auto my-1 sm:my-2 rounded" />
              <p className="text-[10px] sm:text-xs">Students Studied</p>
            </div>

            {/* Stat 2 */}
            <div className="text-center py-2 px-2 sm:px-4 w-full">
              <p className="text-xl sm:text-2xl md:text-4xl font-bold text-[#FF7043]">50+</p>
              <div className="h-[2px] sm:h-[4px] w-[40px] sm:w-[60px] bg-yellow-500 mx-auto my-1 sm:my-2 rounded" />
              <p className="text-[10px] sm:text-xs">Volunteers</p>
            </div>

            {/* Stat 3 */}
            <div className="text-center py-2 px-2 sm:px-4 w-full">
              <p className="text-xl sm:text-2xl md:text-4xl font-bold text-[#FF7043]">50%</p>
              <div className="h-[2px] sm:h-[4px] w-[40px] sm:w-[60px] bg-yellow-500 mx-auto my-1 sm:my-2 rounded" />
              <p className="text-[10px] sm:text-xs">Success Rate</p>
            </div>

            {/* Goal Box */}
            <div className="bg-[#FF7043] py-2 md:min-h-[150px] h-full px-2 sm:px-4 rounded-md text-white font-semibold text-center text-[10px] sm:text-sm w-full shadow-md flex flex-col items-center justify-center">
              <div>
                Our goal to help<br /> underprivileged students
                <div className="h-[2px] sm:h-[4px] w-[40px] sm:w-[60px] bg-yellow-500 mx-auto my-1 sm:my-2 rounded" />
              </div>
            </div>

          </div>
        </Container>
      </div>
    </section>
  );
};

export default HomeHeroSection;
