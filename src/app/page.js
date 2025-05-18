import React from 'react';
import Image from 'next/image';
import image from '../assets/img/IMG-20230826-WA0017.jpg';

function Home() {
  return (
    <div
      style={{ backgroundColor: '#FAF9F8' }}
      className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 py-10 gap-8"
    >
      {/* Image Section */}
      <div className="w-full md:w-[520px] max-w-[90%] overflow-hidden rounded-[10px]">
        <Image
          src={image}
          alt="Wasiq Manzoor"
          width={500}
          className="rounded-[10px] w-full object-cover"
          priority
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-[450px] max-w-[90%] text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Hey, I'm{' '}
          <span className="text-blue-500 hover:text-black transition-colors duration-300">
            Wasiq Manzoor
          </span>
        </h1>

        <h2 className="py-3 text-2xl md:text-[2.1rem] font-bold">
          Full-stack Developer
        </h2>

        <p className="text-base md:text-lg text-gray-700">
          Frontend Engineer using HTML, CSS, JavaScript, React, and Next.js. Backend using Node, Express, MongoDB, Postgres & Prisma. I can help build robust web, mobile, and desktop apps.
        </p>

        <div className="flex justify-center md:justify-start mt-6">
          <a
            href="/Wasiq_Manzoor_Resume.pdf"
            download="Wasiq_Manzoor_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300 shadow-md hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
