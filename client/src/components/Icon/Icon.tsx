import React from 'react';
import { IconType } from 'react-icons';

interface IconProps {
  icon: IconType;
  size?: string | number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Icon: React.FC<IconProps> = ({ 
  icon: IconComponent, 
  size, 
  color, 
  className, 
  style,
  ...props 
}) => {
  return (
    <IconComponent
      size={size}
      color={color}
      className={className}
      style={style}
      {...props}
    />
  );
};

export default Icon;
