import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa';

export default function About() {
  return (
    <>
<h1 className="ms-4 text-3xl sm:text-4xl mt-4 text-center sm:text-left text-blue-600 font-semibold">
  Self-Summary
</h1>


      <div className="min-h-screen bg-[#f6f9ff] px-4 sm:px-6 py-12 text-gray-800 font-sans">
        <div className="max-w-6xl mx-auto space-y-10">

          {/* Intro Section */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm">
            <h1 className="text-3xl sm:text-4xl  text-blue-600 text-center sm:text-left font-semibold ">
              Wasiq Manzoor
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-justify sm:text-left">
  I'm a lifelong problem-solver with a passion for building reliable, efficient systems. From an early age, I’ve been driven to understand how technology works—breaking and rebuilding to learn and improve. I approach development with both creativity and precision, writing clean, functional code that delivers real value. Every project I undertake reflects my commitment to quality, usability, and long-term maintainability.
</p>

          </div>

          {/* Socials */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
            <h2 className="text-xl sm:text-2xl mb-4  text-blue-600  font-semibold">Contact with me</h2>
            <div className="flex gap-6 text-2xl sm:text-3xl text-gray-700">
              <a href="https://github.com/Wasiqmanzoor90" target="_blank" rel="noreferrer" className="hover:text-black">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/wasiqmanzoor1" target="_blank" rel="noreferrer" className="hover:text-blue-700">
                <FaLinkedin />
              </a>
              <a href="mailto:wasiq.manzoor.dev@outlook.com" className="hover:text-red-500">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm">
            <h2 className="text-xl sm:text-2xl mb-6 text-center  text-blue-600  font-semibold">Tech Stack</h2>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {/* Frontend */}
              <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="Angular" title="Angular" className="w-10 h-10 sm:w-12 sm:h-12" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" title="React" className="w-10 h-10 sm:w-12 sm:h-12" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" className="w-10 h-10 sm:w-12 sm:h-12" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" title="TypeScript" className="w-10 h-10 sm:w-12 sm:h-12" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="Bootstrap" title="Bootstrap" className="w-10 h-10 sm:w-12 sm:h-12" />
              <img src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" alt="Tailwind" title="Tailwind CSS" className="w-10 h-10 sm:w-12 sm:h-12" />

              {/* Backend */}
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" title="Node.js" className="w-10 h-10 sm:w-12 sm:h-12" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="Express.js" title="Express.js" className="w-10 h-10 sm:w-12 sm:h-12 bg-white" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" title="MongoDB" className="w-10 h-10 sm:w-12 sm:h-12" />
              <img src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" alt="SQL Server" title="SQL Server" className="w-10 h-10 sm:w-12 sm:h-12" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="MySQL" title="MySQL" className="w-10 h-10 sm:w-12 sm:h-12" />

              {/* Tools */}
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" title="Python" className="w-10 h-10 sm:w-12 sm:h-12" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="C#" title="C#" className="w-10 h-10 sm:w-12 sm:h-12" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg" alt=".NET" title=".NET" className="w-10 h-10 sm:w-12 sm:h-12" />
              <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="Git" title="Git" className="w-10 h-10 sm:w-12 sm:h-12" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="Docker" title="Docker" className="w-10 h-10 sm:w-12 sm:h-12" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" title="AWS" className="w-10 h-10 sm:w-12 sm:h-12" />
              <img src="https://cdn.worldvectorlogo.com/logos/linux-tux.svg" alt="Linux" title="Linux" className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
