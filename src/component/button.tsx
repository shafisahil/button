import React from "react";

interface Props {
  border: string;
  color: string;
  text: string;
  height: string;
  onClick: () => void;
  radius: string;
  width: string;
  className:string
}

const Button: React.FC<Props> = ({ 
    border,
    color,
    text,
    height,
    onClick, 
    radius,
    width,
  }) => { 
  return (
    <button 
      onClick={onClick}
    
      style={{
         backgroundColor: color,
         border,
         borderRadius: radius,
         height,
         width
      }}
    >
    {text}
    </button>
  );
}

export default Button;