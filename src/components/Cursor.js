import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Cursor() {
  const [position, setPosition] = useState({x: window.innerWidth/2, y: window.innerHeight/2});
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseover", onMouseEnter);
    document.addEventListener("mouseout", onMouseLeave);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", onMouseEnter);
      document.removeEventListener("mouseout", onMouseLeave);
    }
  }, []);

  const onMouseMove = (e) => {
    setTimeout(() => {
      setPosition({x: e.clientX, y: e.clientY});
    }, 150);
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const onMouseEnter = () => {
    setTimeout(() => {
      setHidden(false);
    }, 150);
  };

  const onMouseLeave = () => {
    setTimeout(() => {
      setHidden(true);
    }, 150);
  };

  return (
    <CursorWrapper 
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }} 
      $clicked={clicked}
      $hidden={hidden}
    />
  );
}

const CursorWrapper = styled.div.attrs(props => ({
  className: (props.$clicked ? 'cursor--clicked' : '') + (props.$hidden ? ' cursor--hidden' : '')
}))`
  height: 5rem;
  width: 5rem;
  background: white;
  border: 2px solid white;
  border-radius: 100%;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  transition: all 150ms ease;
  transition-property: opacity, background-color, transform, mix-blend-mode;;

  &.cursor--clicked {
    transform: translate(-50%, -50%) scale(0.7);
    background-color: #fefefe;
  }
  
  &.cursor--hidden {
    opacity: 0;
  }

  @media (max-width: 752px) {
    display: none;
  }
`

export default Cursor;