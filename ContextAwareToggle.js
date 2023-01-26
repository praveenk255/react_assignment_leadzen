import React , { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import AccordionContext from "react-bootstrap/AccordionContext";
import Button from 'react-bootstrap/Button';

function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);
    
  
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey), 
    );
  
    const isCurrentEventKey = activeEventKey === eventKey;

//Toggle text onClick
    const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  const clickHandler = event => {
    decoratedOnClick();
    handleClick();
  };
  
    return (
      <Button
        type="button"
        //style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
        onClick={clickHandler}
      >{ active ? "Hide Details" : "View Details" }
        {children}
      </Button>
    );
  }

  export default ContextAwareToggle