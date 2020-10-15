import React from 'react';
import styled from 'styled-components';
import { textShadow, scan, screen } from '../animation';

function CRTCard({ details }) {
  const { link, name, purpose, tech, sourceCode } = details;

  return (
    <CRTWrapper>
      <CRT>
        <CRTScreen>
          <CRTContent>
            <DemoWrapper target="_blank" rel="noopener noreferrer" href={sourceCode}>
              <Demo src={link} alt={name} />
            </DemoWrapper>
            <CRTText>
              <p>[Project Name]: {name}</p>
              <p>[Purpose]: {purpose}</p>
              <p>[Technoloy used]: {tech}</p>
            </CRTText>
            <ScanLine />
          </CRTContent>
        </CRTScreen>
      </CRT>
    </CRTWrapper>
  );
}

const CRTWrapper = styled.div`
  padding: 1em;
  @media (max-width: 752px) {
    padding: 0;
    width: 90vw;
  }
`

const CRT = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');
  font-family: 'Source Code Pro', monospace;
  box-shadow: 0 4px 6px rgba(0, 0, 0, .3);
  background: #161616;
  height: 500px;
  width: 480px;
  border-radius: 5px;
  position: relative;
  animation: ${textShadow} 4s infinite;
  color: #ffffff;
  overflow: auto;

  @media (max-width: 752px) {
    width: 90vw;
    height: auto;
  }
`

const CRTScreen = styled.div`
  position: relative;
  overflow: hidden;

  &&:before,
  &&:after {
    display: block;
    pointer-events: none;
    content: '';
    position: absolute;
  }

  &&:before {
    width: 100%;
    height: 2px;
    z-index: 11;
    background: rgba(0,0,0,.3);
    opacity: 0.75;
  }

  &&:after {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    background: linear-gradient(
        to bottom,
        transparent 50%,
        rgba(0,0,0,.3) 51%
    );
    background-size: 100% 4px;
    animation: ${screen} 100ms steps(60) infinite;
  }
`

const CRTContent = styled.div`
  height: 500px;
  width: 480px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  overflow: auto;
  @media (max-width: 752px) {
    width: 90%;
    height: auto;
    padding: 1em;
  }
`

const CRTText = styled.div`
  padding: 0 1em 1em 1em;
  cursor: default;
`

const ScanLine = styled.div`
  width: 100%;
  height: 50px;
  z-index: 12;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(255, 255, 255, 0.2) 10%,
      rgba(0, 0, 0, 0.1) 100%
  );
  position: absolute;
  bottom: 100%;
  opacity: 0;
  animation: ${scan} 4s linear infinite;
`

const DemoWrapper = styled.a`
  height: 50%;
  margin: 1em;
  object-fit: contain;

  @media (max-width: 752px) {
    height: 30vh;
  }
`
const Demo = styled.img`
  object-fit: contain;
  height: 100%;
  @media (max-width: 752px) {
    width: 100%;
  }
`

export default CRTCard;