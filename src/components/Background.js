import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
import { Noise, ArmImg } from '../images';
import { noise, spin } from '../animation';

function Background() {
  const [offSet, setOffSet] = useState({x: window.innerWidth/2, y: window.innerHeight/2});

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    }
  }, []);

  const onMouseMove = (e) => {
    setTimeout(() => {
      setOffSet({x: e.clientX, y: e.clientY});
    }, 150);
  };

  return (
      <>
        <AppBackground />
        <div style={{transform: `translate3d(${(window.innerWidth/2 - offSet.x)/40}px, ${(window.innerHeight/2 - offSet.y)/40}px, 0)`}}>
          <Arm />
        </div>
        <CircleContainer>
          {[40,50,60,70,80,90].map((length, index) => {
            return (
              <OuterCircle 
                key={length}
                style={{transform: `translate3d(${(window.innerWidth/2 - offSet.x)/100 * (index + 1)*1.5}px, ${(window.innerHeight/2 - offSet.y)/100 * (index + 1)*1.5}px, 0)`}}
              >
                <Circle 
                    key={length} 
                    $length={length + "vw"}
                />
              </OuterCircle>
            );
          })}
          <Circle $length="30vw" $fill='#4b4b4b' $speed={2} $offSet={offSet} />
          <Circle $length="2vw" $fill='black' $shadow='none' $speed={1} $offSet={offSet} />
        </CircleContainer>
      </>
  );
}

const AppBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
  opacity: 0.03;

  &:before {
    content: '';
    position: absolute;
    top: -100%;
    left: -100%;
    height: 300%;
    width: 300%;
    background: url(${Noise});
    pointer-events: none;
    display: block;
    opacity: 1;
    -webkit-animation: ${noise} 2s steps(6) infinite;
    animation: ${noise} 2s steps(6) infinite;
    will-change: transform;
  }
`

const Arm = styled.div`
  background-image: url(${ArmImg});
  background-size: cover;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 10vw;
  overflow: hidden;
  z-index: -2;
  opacity: 0.1;
  transform: rotate(20deg);
  @media (max-width: 752px) {
    display: none;
  }
`

const CircleContainer = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: -10;
  position: absolute;
  opacity: .05;
  @media (max-width: 752px) {
    display: none;
  }
`

const OuterCircle = styled.div`
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  position: fixed;
`

const Circle = styled.div`
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  position: fixed;
  overflow: hidden;
  background: ${props => props.$fill || "transparent"};
  border: 0.1875em solid #FFFFFF;
  border-radius: 50%;
  box-shadow: ${props => props.$shadow || "0.375em 0.375em 0 0 #8f8f8f, -0.375em -0.375em 0 0 #8f8f8f"};
  height: ${props => props.$length};
  width: ${props => props.$length};
  animation: ${spin} 3s steps(60) infinite;
`

export default Background;