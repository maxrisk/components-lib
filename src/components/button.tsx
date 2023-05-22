import React from 'react';
import './button.scss';

type ButtonProps = {
  onClick: () => void
};

function Button(props: ButtonProps) {
  const { onClick } = props;
  return (
    <button className='button' style={{ color: 'red' }} onClick={onClick}>
      <span>button</span>
    </button>
  );
}

export default Button;
