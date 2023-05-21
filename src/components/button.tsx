import React from 'react';
import './button.scss';

function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { onClick } = props;
  return (
    <button className='button' style={{ color: 'red' }} onClick={onClick}>
      <span>button</span>
    </button>
  );
}

export default Button;
