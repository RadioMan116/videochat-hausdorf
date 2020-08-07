import React from 'react';

interface Props {
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<Props> = (props) => {
  const { className, onClick, children } = props;
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
