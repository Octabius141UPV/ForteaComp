import React from 'react';

export const IconPrimaryButton = ({
  children,
  iconPosition = 'left',
  className = '',
  fullWidth = false,
  size = 'medium',
  color = 'blue',
  ...props
}) => {
  const sizeClasses = {
    small: 'px-2.5 py-1.5 text-sm gap-1.5',
    medium: 'px-3.5 py-2 text-base gap-2',
    large: 'px-4 py-2.5 text-lg gap-2.5'
  };

  const iconSizes = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6'
  };

  const colorClasses = {
    blue: 'bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 shadow-blue-500/30',
    red: 'bg-gradient-to-br from-red-500 via-red-600 to-rose-700 shadow-red-500/30',
    green: 'bg-gradient-to-br from-green-500 via-green-600 to-emerald-700 shadow-green-500/30',
    // ...resto de colores
  };

  // Encontrar el icono del slot
  const icon = React.Children.toArray(children).find(
    child => child.props && child.props.slot === 'icon'
  );
  
  // Encontrar el contenido que no es icono
  const content = React.Children.toArray(children).filter(
    child => !child.props || child.props.slot !== 'icon'
  );

  return (
    <button
      {...props}
      className={`
        inline-flex items-center justify-center
        ${fullWidth ? 'w-full' : ''}
        ${sizeClasses[size]}
        ${colorClasses[color]}
        font-semibold rounded-lg
        text-white shadow-lg
        hover:transform hover:-translate-y-0.5
        active:transform active:scale-95
        focus:outline-none focus:ring-2 focus:ring-offset-2
        disabled:opacity-60 disabled:cursor-not-allowed
        transition-all duration-200
        ${className}
      `.trim()}
    >
      {iconPosition === 'left' && icon}
      {content}
      {iconPosition === 'right' && icon}
    </button>
  );
};
