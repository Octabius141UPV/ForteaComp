import React from 'react';

export const IconButton = ({
  children, // Cambiamos icon por children
  className = '',
  size = 'medium',
  color = 'blue',
  ...props
}) => {
  const sizeClasses = {
    small: 'p-1.5 text-sm',
    medium: 'p-2 text-base',
    large: 'p-3 text-lg'
  };

  const iconSizes = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6'
  };

  const colorClasses = {
    blue: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400',
    red: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-400',
    green: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-400',
    purple: 'bg-purple-500 text-white hover:bg-purple-600 focus:ring-purple-400',
    pink: 'bg-pink-500 text-white hover:bg-pink-600 focus:ring-pink-400',
    // ...resto de colores
  };

  return (
    <button
      {...props}
      className={`
        inline-flex items-center justify-center
        ${sizeClasses[size]}
        ${colorClasses[color]}
        rounded-full
        shadow-lg
        hover:transform hover:scale-110
        active:scale-95
        focus:outline-none focus:ring-2 focus:ring-offset-2
        disabled:opacity-60 disabled:cursor-not-allowed
        disabled:hover:transform-none
        transition-all duration-200
        ${className}
      `.trim()}
    >
      <span className={iconSizes[size]}>
        {children}
      </span>
    </button>
  );
};
