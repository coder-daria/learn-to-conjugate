import React, { useState, useRef } from 'react';

import { useClickOutside } from '../../utils/useClickOutside';

import { Container, DropDown } from './Popover.styles';

const Popover = ({ icon, children, onClick }) => {
  const ref = useRef();

  const [isOpen, togglePopover] = useState();

  const handleClick = () => {
    if(onClick) {
      onClick();
    }

    togglePopover(!isOpen);
  };

  useClickOutside((ref), () => {
    if(ref) {
      togglePopover();
    }
  });

  return (
    <Container onClick={handleClick}  ref={ref}>
      {icon}
      <DropDown isOpen={isOpen}>
        {children}
      </DropDown>
    </Container>
  );
}

export default Popover;
