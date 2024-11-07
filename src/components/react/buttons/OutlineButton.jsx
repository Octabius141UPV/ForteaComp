import React from 'react';

export const OutlineButton = ({
  children,
  className = '',
  fullWidth = false,
  size = 'medium',
  color = 'blue',
  ...props
}) => {
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };

  const colorClasses = {
    blue: 'border-blue-500 text-blue-600 hover:bg-blue-50 hover:border-blue-600 hover:text-blue-700 focus:ring-blue-200 active:bg-blue-100/70',
    red: 'border-red-500 text-red-600 hover:bg-red-50 hover:border-red-600 hover:text-red-700 focus:ring-red-200 active:bg-red-100/70',
    green: 'border-green-500 text-green-600 hover:bg-green-50 hover:border-green-600 hover:text-green-700 focus:ring-green-200 active:bg-green-100/70',
    purple: 'border-purple-500 text-purple-600 hover:bg-purple-50 hover:border-purple-600 hover:text-purple-700 focus:ring-purple-200 active:bg-purple-100/70',
    yellow: 'border-yellow-500 text-yellow-600 hover:bg-yellow-50 hover:border-yellow-600 hover:text-yellow-700 focus:ring-yellow-200 active:bg-yellow-100/70',
    orange: 'border-orange-500 text-orange-600 hover:bg-orange-50 hover:border-orange-600 hover:text-orange-700 focus:ring-orange-200 active:bg-orange-100/70',
    gray: 'border-gray-500 text-gray-600 hover:bg-gray-50 hover:border-gray-600 hover:text-gray-700 focus:ring-gray-200 active:bg-gray-100/70',
    pink: 'border-pink-500 text-pink-600 hover:bg-pink-50 hover:border-pink-600 hover:text-pink-700 focus:ring-pink-200 active:bg-pink-100/70',
    cyan: 'border-cyan-500 text-cyan-600 hover:bg-cyan-50 hover:border-cyan-600 hover:text-cyan-700 focus:ring-cyan-200 active:bg-cyan-100/70',
    teal: 'border-teal-500 text-teal-600 hover:bg-teal-50 hover:border-teal-600 hover:text-teal-700 focus:ring-teal-200 active:bg-teal-100/70'
  };

  return (
    <button
      {...props}
      className={`
        inline-flex items-center justify-center
        relative overflow-hidden
        ${fullWidth ? 'w-full' : ''}
        ${sizeClasses[size]}
        ${colorClasses[color]}
        font-medium rounded-lg
        border-2
        shadow-sm
        before:absolute before:inset-0
        before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent
        before:translate-x-[-200%] before:animate-[shine_4s_infinite]
        hover:shadow-md hover:transform hover:-translate-y-0.5
        hover:before:animate-[shine_2s_infinite]
        active:transform active:scale-[0.98] active:translate-y-0
        focus:outline-none focus:ring-4 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none
        disabled:hover:shadow-sm disabled:before:animate-none
        transition-all duration-200 ease-out
        ${className}
      `.trim()}
    >
      {children}
    </button>
  );
};
