import React, { useState } from 'react';
import  ButtonBootstrap   from 'react-bootstrap/Button';
import { Button as ButtonChakra } from '@chakra-ui/react';

function Button() {
  const [buttonIndex, setButtonIndex] = useState(0);

  const handleClick = () => {
    setButtonIndex((buttonIndex + 1) % 6);
  };

  const button = buttonIndex < 3 ? 
    <ButtonBootstrap variant={["primary", "secondary", "success"][buttonIndex]} size="md" >
      Button Bootstrap Style {["Primary", "Secondary", "Success"][buttonIndex]}
    </ButtonBootstrap> : 
    <ButtonChakra colorScheme={["teal", "pink", "yellow"][buttonIndex - 3]} size='lg'>
      Button Chakra Style {["Teal", "Pink", "Yellow"][buttonIndex - 3]}
    </ButtonChakra>;

  return (
    <div onClick={handleClick}>
      {button}
    </div>
  );
}

export default Button;
