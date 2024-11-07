import React from 'react';
import PropTypes from 'prop-types';

const Card1 = ({ 
  title, 
  description, 
  price, 
  image, 
  category,
  isNew 
}) => {
  return (
    <div className="bg-white dark:bg-dark-surface rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      {/* Badge de Nuevo */}
      {isNew && (
        <div className="absolute top-4 right-4 bg-accent dark:bg-dark-accent text-white text-sm font-bold px-3 py-1 rounded-full">
          Nuevo
        </div>
      )}
      
      {/* Imagen */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {/* Badge de categoría */}
        <div className="absolute bottom-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
          {category}
        </div>
      </div>

      {/* Contenido */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primaryColor dark:text-dark-accent">${price}</span>
          <button className="bg-primaryColor dark:bg-dark-accent text-white px-4 py-2 rounded-lg hover:bg-secondaryColor dark:hover:bg-dark-primary transition-colors duration-300">
            Ver detalles
          </button>
        </div>
      </div>
    </div>
  );
};

Card1.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  isNew: PropTypes.bool
};

Card1.defaultProps = {
  isNew: false
};

export default Card1;
