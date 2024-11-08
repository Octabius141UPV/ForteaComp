import React from 'react';

export const PrimaryButton = ({
  children,
  className = '',
  fullWidth = false,
  size = 'medium',
  color = 'blue',
  ...props
}) => {
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-5 py-2.5 text-base',
    large: 'px-7 py-3.5 text-lg'
  };

  const colorClasses = {
    blue: 'bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 shadow-blue-500/30 border-blue-400/20 hover:from-blue-600 hover:via-blue-700 hover:to-indigo-800 hover:shadow-blue-600/40 focus:ring-blue-400 focus:shadow-[0_0_20px_rgba(59,130,246,0.5)]',
    red: 'bg-gradient-to-br from-red-500 via-red-600 to-rose-700 shadow-red-500/30 border-red-400/20 hover:from-red-600 hover:via-red-700 hover:to-rose-800 hover:shadow-red-600/40 focus:ring-red-400 focus:shadow-[0_0_20px_rgba(239,68,68,0.5)]',
    green: 'bg-gradient-to-br from-green-500 via-green-600 to-emerald-700 shadow-green-500/30 border-green-400/20 hover:from-green-600 hover:via-green-700 hover:to-emerald-800 hover:shadow-green-600/40 focus:ring-green-400 focus:shadow-[0_0_20px_rgba(34,197,94,0.5)]',
    purple: 'bg-gradient-to-br from-purple-500 via-purple-600 to-fuchsia-700 shadow-purple-500/30 border-purple-400/20 hover:from-purple-600 hover:via-purple-700 hover:to-fuchsia-800 hover:shadow-purple-600/40 focus:ring-purple-400 focus:shadow-[0_0_20px_rgba(168,85,247,0.5)]',
    yellow: 'bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 shadow-yellow-400/30 border-yellow-300/20 hover:from-yellow-500 hover:via-yellow-600 hover:to-amber-700 hover:shadow-yellow-500/40 focus:ring-yellow-400 focus:shadow-[0_0_20px_rgba(250,204,21,0.5)]',
    orange: 'bg-gradient-to-br from-orange-400 via-orange-500 to-red-600 shadow-orange-400/30 border-orange-300/20 hover:from-orange-500 hover:via-orange-600 hover:to-red-700 hover:shadow-orange-500/40 focus:ring-orange-400 focus:shadow-[0_0_20px_rgba(251,146,60,0.5)]',
    gray: 'bg-gradient-to-br from-gray-500 via-gray-600 to-slate-700 shadow-gray-400/30 border-gray-400/20 hover:from-gray-600 hover:via-gray-700 hover:to-slate-800 hover:shadow-gray-500/40 focus:ring-gray-400 focus:shadow-[0_0_20px_rgba(156,163,175,0.5)]',
    pink: 'bg-gradient-to-br from-pink-400 via-pink-500 to-rose-600 shadow-pink-400/30 border-pink-300/20 hover:from-pink-500 hover:via-pink-600 hover:to-rose-700 hover:shadow-pink-500/40 focus:ring-pink-400 focus:shadow-[0_0_20px_rgba(244,114,182,0.5)]',
    cyan: 'bg-gradient-to-br from-cyan-400 via-cyan-500 to-sky-600 shadow-cyan-400/30 border-cyan-300/20 hover:from-cyan-500 hover:via-cyan-600 hover:to-sky-700 hover:shadow-cyan-500/40 focus:ring-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.5)]',
    teal: 'bg-gradient-to-br from-teal-400 via-teal-500 to-emerald-600 shadow-teal-400/30 border-teal-300/20 hover:from-teal-500 hover:via-teal-600 hover:to-emerald-700 hover:shadow-teal-500/40 focus:ring-teal-400 focus:shadow-[0_0_20px_rgba(45,212,191,0.5)]'
  };

  return (
    <button
      {...props}
      className={`
        inline-flex items-center justify-center
        overflow-hidden relative
        ${fullWidth ? 'w-full' : ''}
        ${sizeClasses[size]}
        ${colorClasses[color]}
        font-semibold rounded-lg
        text-white shadow-lg
        border
        before:absolute before:inset-0
        before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
        before:translate-x-[-200%] before:animate-[shine_3s_infinite]
        hover:transform hover:-translate-y-0.5
        hover:before:animate-[shine_2s_infinite]
        active:transform active:scale-95 active:shadow-inner
        focus:outline-none focus:ring-2 focus:ring-offset-2
        disabled:opacity-60 disabled:cursor-not-allowed 
        disabled:hover:transform-none disabled:before:animate-none
        transition-all duration-300 ease-out
        ${className}
      `.trim()}
    >
      {children}
    </button>
  );
};
