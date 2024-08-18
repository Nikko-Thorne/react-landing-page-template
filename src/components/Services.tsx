import React from 'react';

import config from '../config/index.json'; // Assuming index.json is in the config folder
import Divider from './Divider'; // Assuming Divider is another component you want to use

const ServiceItem = ({ title, description}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {

  return (
    <div className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-red-500 sm:text-4xl">
          {config.services.title} {/* Using title from JSON */}
        </h2>
        <Divider /> {/* Insert a divider component if needed */}
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {config.services.items.map((service, index) => (
            <ServiceItem
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};



export default Services;
