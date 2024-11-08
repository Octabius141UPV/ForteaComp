// src/components/src/react/buttons/ButtonGroup.jsx
import React from 'react';

// Quitar el "export" de las declaraciones individuales
const ButtonGroup = ({
  children,
  className = '',
  variant = 'default',
  size = 'medium',
  vertical = false,
  fullWidth = false,
  ...props
}) => {
  const variantClasses = {
    default: 'bg-white dark:bg-gray-800',
    solid: 'bg-gray-100 dark:bg-gray-700',
    outline: 'border border-gray-200 dark:border-gray-600'
  };

  return (
    <div
      className={`
        inline-flex gap-2 p-4 ${vertical ? 'flex-col gap-2' : 'flex-row gap-2'}
        ${fullWidth ? 'w-full' : ''}
        ${variantClasses[variant]}
        rounded-lg overflow-hidden
        ${className}
      `.trim()}
      {...props}
    >
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        
        return React.cloneElement(child, {
          className: `
            ${child.props.className || ''}
            ${vertical ? 'first:rounded-t-lg last:rounded-b-lg' : 'first:rounded-l-lg last:rounded-r-lg'}
            ${vertical ? (index !== 0 && 'border-t dark:border-gray-600') : (index !== 0 && 'border-l dark:border-gray-600')}
            ${fullWidth ? 'flex-1' : ''}
          `.trim(),
          size: child.props.size || size
        });
      })}
    </div>
  );
};

const IconButtonGroup = ({
  children,
  className = '',
  size = 'medium',
  vertical = false,
  ...props
}) => {
  return (
    <div
      className={`
        inline-flex ${vertical ? 'flex-col gap-1' : 'flex-row gap-1'}
        rounded-lg overflow-hidden shadow-sm p-4 gap-1
        ${className}
      `.trim()}
      {...props}
    >
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        
        return React.cloneElement(child, {
          className: `
            ${child.props.className || ''}
            rounded-none
            ${vertical ? 'first:rounded-t-lg last:rounded-b-lg' : 'first:rounded-l-lg last:rounded-r-lg'}
          `.trim(),
          size: child.props.size || size
        });
      })}
    </div>
  );
};

// Solo exportar ButtonGroup e IconButtonGroup
export { ButtonGroup, IconButtonGroup };