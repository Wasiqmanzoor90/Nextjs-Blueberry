import React from 'react';

function Page() {
  return (
    <div className="min-h-screen bg-[#FAF9F8] p-6 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-blue-600">
        Project Summary
      </h1>
      <div className="flex flex-col gap-8 w-full max-w-4xl">

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer w-full">
          <h2 className="text-xl font-semibold mb-4">E-Commerce System (ASP.NET MVC)</h2>
          <p className="text-gray-700">
            Full-featured e-commerce web app with product catalog, user authentication, cart, and order processing.
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Tech: ASP.NET MVC, Entity Framework, SQL Server, Bootstrap.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer w-full">
          <h2 className="text-xl font-semibold mb-4">Expense Tracker (CQRS .NET + React)</h2>
          <p className="text-gray-700">
            Expense tracking system with CQRS backend (.NET Core) and React frontend for seamless expense management.
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Tech: .NET Core, MediatR, EF Core, React, REST APIs.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer w-full">
          <h2 className="text-xl font-semibold mb-4">Recipe Finder (Express + React)</h2>
          <p className="text-gray-700">
            Recipe search app with Express backend and React frontend supporting real-time filtering and details.
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Tech: Node.js, Express, MongoDB, React, Axios.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer w-full">
          <h2 className="text-xl font-semibold mb-4">ChatGram (.NET Backend + React + RTK)</h2>
          <p className="text-gray-700">
            Real-time chat app with scalable CQRS .NET backend using MongoDB and React with Redux Toolkit frontend.
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Tech: .NET Core, MongoDB, CQRS, React, Redux Toolkit.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer w-full">
          <h2 className="text-xl font-semibold mb-4">Malcon Pro (Next.js)</h2>
          <p className="text-gray-700">
            Next.js app for static code analysis and error detection, improving development quality and reliability.
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Tech: Next.js, TypeScript, ESLint, Custom Static Analysis.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Page;
