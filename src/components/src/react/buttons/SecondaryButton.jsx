import React from 'react';

export const SecondaryButton = ({
  children,
  className = '',
  fullWidth = false,
  size = 'medium',
  color = 'blue',
  ...props
}) => {
  const sizeClasses = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-3 py-1.5 text-base',
    large: 'px-4 py-2 text-lg'
  };

  const colorClasses = {
    blue: 'text-blue-600 after:bg-blue-600/10 hover:text-blue-700 hover:after:bg-blue-600 focus:ring-blue-400/40',
    red: 'text-red-600 after:bg-red-600/10 hover:text-red-700 hover:after:bg-red-600 focus:ring-red-400/40',
    green: 'text-green-600 after:bg-green-600/10 hover:text-green-700 hover:after:bg-green-600 focus:ring-green-400/40',
    purple: 'text-purple-600 after:bg-purple-600/10 hover:text-purple-700 hover:after:bg-purple-600 focus:ring-purple-400/40',
    yellow: 'text-yellow-600 after:bg-yellow-600/10 hover:text-yellow-700 hover:after:bg-yellow-600 focus:ring-yellow-400/40',
    orange: 'text-orange-600 after:bg-orange-600/10 hover:text-orange-700 hover:after:bg-orange-600 focus:ring-orange-400/40',
    gray: 'text-gray-600 after:bg-gray-600/10 hover:text-gray-700 hover:after:bg-gray-600 focus:ring-gray-400/40',
    pink: 'text-pink-600 after:bg-pink-600/10 hover:text-pink-700 hover:after:bg-pink-600 focus:ring-pink-400/40',
    cyan: 'text-cyan-600 after:bg-cyan-600/10 hover:text-cyan-700 hover:after:bg-cyan-600 focus:ring-cyan-400/40',
    teal: 'text-teal-600 after:bg-teal-600/10 hover:text-teal-700 hover:after:bg-teal-600 focus:ring-teal-400/40'
  };

  return (
    <button
      {...props}
      className={`
        inline-flex items-center justify-center
        relative
        ${fullWidth ? 'w-full' : ''}
        ${sizeClasses[size]}
        ${colorClasses[color]}
        font-medium
        after:absolute after:bottom-0 after:left-0 after:h-[2px] 
        after:w-full after:origin-bottom-right after:scale-x-0
        hover:after:origin-bottom-left hover:after:scale-x-100
        after:transition-transform after:duration-300 after:ease-out
        rounded-none
        focus:outline-none focus:ring-4
        disabled:opacity-50 disabled:cursor-not-allowed 
        disabled:after:bg-transparent disabled:hover:after:scale-x-0
        transition-colors duration-200
        ${className}
      `.trim()}
    >
      {children}
    </button>
  );
};
