import React from 'react';

import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  return (
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">{mainHero.title}</span>{' '}
            <span className={`block text-primary xl:inline text-4xl`}>
            {/* Increased font size to 2xl */}
              {mainHero.subtitle}
          </span>
          </h1>
          {/* ... rest of your component */}
        </div>
      </main>
  );
};

export default MainHero;
