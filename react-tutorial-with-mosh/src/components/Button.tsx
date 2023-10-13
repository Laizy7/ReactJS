import React from 'react';

interface Props {
  children: string;
  // Q mark means optional, this set color value only these values
  color?: 'primary' | 'secondary' | 'warning';
  onClick: () => void;
}

const Button = ({ children, onClick, color = 'primary' }: Props) => {
  return (
    <button className={'btn btn-' + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
