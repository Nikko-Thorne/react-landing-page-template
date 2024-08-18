import React from 'react';
import config from '../config/index.json';

const About = () => {
  const { about } = config;
  const { title, items: aboutsList } = about;

  return (
    <div className={`py-12 bg-background`} id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className={`text-3xl font-extrabold text-red-500 sm:text-4x`}>
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          {aboutsList.slice(1).map((item, index) => (
            <div
              key={index}
              className={`
                ${index === 0 ? 'col-start-1 row-start-1' : ''}
                ${index === 1 ? 'col-start-2 row-start-1' : ''}
                ${index === 2 ? 'col-start-1 col-span-2 justify-self-center max-w-md' : ''}
                ${index === 3 ? 'col-start-1 row-start-3' : ''}
                ${index === 4 ? 'col-start-2 row-start-3' : ''}
              `}
            >
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-base text-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;