import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';

const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width, handleClick,  props}) => {
  const { setIsClicked, initialState } = useStateContext();

  return (
    <button
      type="button"
      onClick={handleClick}
      style={{ backgroundColor: bgColor, color, borderRadius, display: 'flex', flexDirection: 'row' }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
      {...props}
    >
      {icon} 
      <span>{text}</span>
    </button>
  );
};

export default Button;
