// components/About.jsx
import React from "react";
import Image from "next/image";
import Button from "@/components/atoms/Button";
import Container from "@/components/layout/Container";

const About = () => {
  return (
    <Container className=" pt-32 md:pt-40 pb-16 px-4 md:px-16">
      <div className="flex flex-col md:flex-row items-center gap-5">
        {/* Left - Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/dummy.jpg"
            alt="About ICCHE"
            width={500}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right - Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-[#FF7043] font-semibold text-lg mb-2">About Us</h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
            Empowering Underprivileged Children Through Education
          </h3>
          <p className="text-gray-800 text-sm leading-relaxed mb-6">
            ICCHE is a student’s outreach programme, an initiative by Center of
            Studies in Science, Technology and Culture started by students of
            IIEST Shibpur in 2016 as an evening school under the Department of
            Humanities and Social Sciences. Since 2016, it is providing a
            supportive environment for underprivileged children.
          </p>
          <Button
            text="Read More"
            className="bg-[#FF7043] w-[200px] text-white px-5 py-2 rounded font-semibold hover:bg-[#e25f32] transition"
          />
        </div>
      </div>
    </Container>
  );
};

export default About;
