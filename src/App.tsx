import React from 'react';
import './App.css';
import viteLogo from './assets/vite.svg';
import reactLogo from './assets/react.svg';
import typescriptLogo from './assets/typescript.svg';
import tailwindLogo from './assets/tailwind-css.svg';
import eslintLogo from './assets/eslint.svg';

const App: React.FC = () => {
  const technologies = [
    {
      logo: viteLogo,
      name: 'Vite',
      color: 'text-[#FF0080]',
      url: 'https://vitejs.dev',
    },
    {
      logo: reactLogo,
      name: 'React',
      color: 'text-[#61DAFB]',
      url: 'https://react.dev',
    },
    {
      logo: typescriptLogo,
      name: 'TypeScript',
      color: 'text-[#3178C6]',
      url: 'https://www.typescriptlang.org',
    },
    {
      logo: tailwindLogo,
      name: 'Tailwind CSS',
      color: 'text-[#38B2AC]',
      url: 'https://tailwindcss.com',
    },
    {
      logo: eslintLogo,
      name: 'ESLint',
      color: 'text-[#4B32C3]',
      url: 'https://eslint.org',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6 text-center">
      <div className="w-full max-w-4xl">
        <h1 className="animate-fade-in mb-8 text-5xl font-bold text-blue-800">React Boilerplate</h1>

        <div className="mb-12 flex justify-center space-x-8">
          {technologies.map((tech, index) => (
            <a
              key={tech.name}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:rotate-6 hover:scale-110"
              title={`Visit ${tech.name} website`}
            >
              <img
                src={tech.logo}
                alt={`${tech.name} Logo`}
                className="animate-bounce-in mx-auto mb-2 h-24 w-24"
                style={{ animationDelay: `${index * 200}ms` }}
              />
              <p className={`font-semibold ${tech.color}`}>{tech.name}</p>
            </a>
          ))}
        </div>

        <div className="animate-slide-in mb-8 rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-3xl font-semibold text-blue-700">Boilerplate Features</h2>
          <ul className="space-y-4 text-left text-gray-700">
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span>
              Vite Build Tool for Lightning Fast Development
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span>
              TypeScript for Type-Safe Development
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span>
              Tailwind CSS for Rapid UI Development
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span>
              ESLint and Prettier for Code Quality
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span>
              Pre-configured Development Workflow
            </li>
          </ul>
        </div>

        <div className="animate-pulse rounded-xl bg-blue-600 p-6 text-white">
          <p className="text-xl font-medium">
            🚀 Ready to Test? Edit{' '}
            <code className="rounded bg-blue-700 px-2 py-1">.\src\App.tsx</code> and save to test
            HMR.
          </p>
        </div>

        <div className="mt-8 text-sm text-gray-600">
          <p>
            👆 Click on the technology logos above to learn more about each tool used in this
            boilerplate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
