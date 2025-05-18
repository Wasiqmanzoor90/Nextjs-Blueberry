import React from 'react';

function Page() {
  return (
    <div className="min-h-screen bg-[#FAF9F8] p-6 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl  mb-10 text-blue-600 font-semibold">
        Project Summary
      </h1>
      <div className="flex flex-col gap-8 w-full max-w-4xl">

        {[ // Optional: semantic improvement to loop over projects if needed in the future
          {
            title: 'E-Commerce System (ASP.NET MVC)',
            description: 'Full-featured e-commerce web app with product catalog, user authentication, cart, and order processing.',
            tech: 'ASP.NET MVC, Entity Framework, SQL Server, Bootstrap',
          },
          {
            title: 'Expense Tracker (CQRS .NET + React)',
            description: 'Expense tracking system with CQRS backend (.NET Core) and React frontend for seamless expense management.',
            tech: '.NET Core, MediatR, EF Core, React, REST APIs',
          },
          {
            title: 'Recipe Finder (Express + React)',
            description: 'Recipe search app with Express backend and React frontend supporting real-time filtering and details.',
            tech: 'Node.js, Express, MongoDB, React, Axios',
          },
          {
            title: 'ChatGram (.NET Backend + React + RTK)',
            description: 'Real-time chat app with scalable CQRS .NET backend using MongoDB and React with Redux Toolkit frontend.',
            tech: '.NET Core, MongoDB, CQRS, React, Redux Toolkit',
          },
          {
            title: 'Malcon Pro (Next.js)',
            description: 'Next.js app for static code analysis and error detection, improving development quality and reliability.',
            tech: 'Next.js, TypeScript, ESLint, Custom Static Analysis',
          },
        ].map(({ title, description, tech }) => (
          <section
            key={title}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer w-full"
            tabIndex={0} // improves keyboard accessibility
            aria-label={title}
          >
            <h2 className="text-xl font-semibold mb-4 text-blue-600">{title}</h2>
            <p className="text-gray-700">{description}</p>
            <p className="text-gray-600 text-sm mt-2">Tech: {tech}</p>
          </section>
        ))}

      </div>
    </div>
  );
}

export default Page;
