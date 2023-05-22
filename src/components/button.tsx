import React, { useState } from 'react';
import './button.scss';

type ButtonProps = {
  onClick: () => number[]
};

function Button(props: ButtonProps) {
  const { onClick } = props;
  const [num, setNum] = useState(0);
  const handleClick = () => {
    if (onClick) {
      setNum(onClick()[0]);
    }
  };
  return (
    <button className='button' style={{ color: 'red' }} onClick={handleClick}>
      <span>button {num}</span>
    </button>
  );
}

export default Button;
