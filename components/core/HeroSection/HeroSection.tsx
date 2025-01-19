import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full h-screen bg-gradient-to-b from-blue-500 to-purple-600 flex flex-col justify-center items-center text-white px-6">
      <h1 className="text-4xl md:text-6xl font-bold text-center leading-tight">
        Building Modern Websites That Convert Visitors into Clients.
      </h1>
      <p className="text-lg md:text-2xl font-medium text-center mt-4">
        Frontend Web Developer | React, Angular, Vue
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="#portfolio"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition"
        >
          View Portfolio
        </a>
        <a
          href="#contact"
          className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition"
        >
          Hire Me
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
