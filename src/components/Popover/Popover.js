import React, { useState } from 'react';

import { Container, DropDown } from './Popover.styles';

const Popover = ({ icon, children, onClick, forwardRef }) => {
  const [isOpen, togglePopover] = useState(false);

  const handleClick = () => {
    if(onClick) {
      onClick();
    }

    togglePopover(!isOpen);
  };

  return (
    <Container onClick={handleClick}  ref={forwardRef}>
      {icon}
      <DropDown isOpen={isOpen}>
        {children}
      </DropDown>
    </Container>
  );
}

export default Popover;
