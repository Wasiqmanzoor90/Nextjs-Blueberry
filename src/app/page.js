import React from 'react';
import Image from 'next/image';
import image from '../assets/img/IMG-20230826-WA0017.jpg';

function Home() {
  return (
    <div style={{ backgroundColor: '#FAF9F8' }} className="flex min-h-screen items-center">
      <div
        className="w-[520px] overflow-hidden rounded-[10px] px-4 me-10"
      >
        <Image
          src={image}
          alt="Wasiq Manzoor"
          width={500}
          className="rounded-[10px]"
          style={{ objectFit: 'cover' }}
        />
      </div>



      <div className='' style={{ width: '450px' }}>
        <h1 className="text-4xl">
          Hey, I'm{' '}
          <span className="text-blue-500 hover:text-black">
            Wasiq Manzoor
          </span>
        </h1>

        <h1 className='py-3' style={{ fontSize: '2.1rem', fontWeight: '700' }}>
          <b>Full-stack Developer</b>
        </h1>

        <p>
          Frontend Engineer using HTML, CSS, JavaScript, React, and Nextjs. Backend using Node, Express, MongoDb, Postgres & Prisma and Deploy. Can assist to build robust web, mobile, and desktop applications.
        </p>
        <div className="flex justify-center mt-5">
          <a
            href="/Wasiq_Manzoor_Resume.pdf"
            download="Wasiq_Manzoor_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-all duration-300 mt-5 inline-block text-center shadow-md hover:scale-105"
          >
            Download Resume
          </a>


        </div>

      </div>

    </div>

  );
}

export default Home;
