import React from 'react';
import Image from 'next/image';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,

} from 'react-icons/fa';


export default function About() {
  return (
    <>
    <h1 className='ms-4' style={{fontSize:'2.7rem'}}><b>Self-Summary</b></h1>
    <div className="min-h-screen bg-[#f6f9ff] px-6 py-12 text-gray-800 font-sans">
      
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Intro Section */}
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h1 className="text-4xl font-bold  text-blue-600">Wasiq Manzoor</h1>
          <p className="mt-4 text-lg leading-relaxed">
           I'm a Tinkering with computers since I was a kid, breaking 'em just to learn how to fix 'em. I write code like it's poetry, but don’t get it twisted, I’m here to build, break, and rebuild better. I think in Web, hustle in lines of JavaScript, For me, it’s not just about the code—it’s about making the system work for me. Every project I touch? It’s got my signature, raw and unapologetic.
          </p>
        </div>

        {/* Socials */}
        <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Stay with me</h2>
          <div className="flex gap-6 text-3xl text-gray-700">
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

        <div className="bg-white p-8 rounded-xl shadow-sm">
  <h2 className="text-2xl font-bold mb-6 text-center">🧠 Tech Stack</h2>
  <div className="flex flex-wrap justify-center items-center gap-6">
    {/* Core Frontend */}
    <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="Angular" title="Angular" className="w-12 h-12" />
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" title="React" className="w-12 h-12" />
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" className="w-12 h-12" />
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" title="TypeScript" className="w-12 h-12" />
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="Bootstrap" title="Bootstrap" className="w-12 h-12" />
    <img src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" alt="Tailwind" title="Tailwind CSS" className="w-12 h-12" />

    {/* Backend */}
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" title="Node.js" className="w-12 h-12" />
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="Express.js" title="Express.js" className="w-12 h-12 bg-white" />
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" title="MongoDB" className="w-12 h-12" />
    <img src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" alt="SQL Server" title="SQL Server" className="w-12 h-12" />
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="MySQL" title="MySQL" className="w-12 h-12" />

    {/* Languages & Tools */}
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" title="Python" className="w-12 h-12" />
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="C#" title="C#" className="w-12 h-12" />
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg" alt=".NET" title=".NET" className="w-12 h-12" />
    <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="Git" title="Git" className="w-12 h-12" />
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="Docker" title="Docker" className="w-12 h-12" />
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" title="AWS" className="w-12 h-12" />
    <img src="https://cdn.worldvectorlogo.com/logos/linux-tux.svg" alt="Linux" title="Linux" className="w-12 h-12" />
  </div>
</div>

      </div>
    </div>
    </>
  );
}
