import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';

function Contact() {
  const [offSet, setOffSet] = useState({x: window.innerWidth/2, y: window.innerHeight/2});

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    }
  }, []);

  const onMouseMove = (e) => {
    setOffSet({x: e.clientX, y: e.clientY});
  };
  return (
    <IconContainer style={{'textShadow':`${(window.innerWidth - offSet.x)/100}px ${(window.innerHeight - offSet.y)/80}px rgba(247,56,89,.75)`}}>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/vincent-fan/">
        <Icon className="fab fa-linkedin" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/fancent">
        <Icon className="fab fa-github-square" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="mailto:vincent.kc.fan@gmail.com">
        <Icon className="fas fa-envelope-square" />
      </a>
    </IconContainer>
  );
}

const Icon = styled.i`
  font-size: 60px;
  color: #dbedf3;
  margin: 0.5rem;
  opacity: 0.4;
  transition: all ease 1s;
  
  &:hover {
    opacity: 1;
  }
`

const IconContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 1rem;
  @media (max-width: 752px) {
    margin: 3px;
  }
`

export default Contact;