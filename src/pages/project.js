import React from 'react';
import styled from 'styled-components';
import { CRTCard } from '../components';
import { DemoImg } from '../images';

const projects = [
  {
    link:`${DemoImg}`,
    name:'Portfolio website',
    purpose: 'Trying out different CSS animations with Styled-Components and using functional components in React',
    tech:'React, Styled-Component, React-Router-Dom',
    sourceCode: "https://github.com/fancent/portfolio",
  },
  {
    link:"https://github.com/fancent/WordGame/blob/master/demo.gif?raw=true",
    name:'iOS Word Game',
    purpose: 'Simple word search game showcasing 8 possible directions for each word, custom slide gestures, and custom native animations. All UI elements are done programmatically in Swift', 
    tech:'Swift',
    sourceCode: "https://github.com/fancent/WordGame",
  },
  {
    link:"https://media.giphy.com/media/ek9eln6lCCohWMiyR4/giphy.gif",
    name:'Win To Die',
    purpose: 'Created a 3D racing game built with Unity3D in C# that uses real physics-based car models in order to perform real-time physics calculation along with other computer science, art and music students.', 
    tech:'C#, Unity3D',
    sourceCode: "https://github.com/fancent/Win-to-Die",
  },
  {
    link:"https://github.com/fancent/CSC420/blob/master/Project/predicted-1.gif?raw=true",
    name:'NBA Player Detector',
    purpose: 'Object detection model that can detect and track a selected player during game time, using Faster R-CNN with ResNet-50-FPN Backbone. Used Python scripting with FFMPEG and LabelImg to create our own data set. Used patch comparison and MNIST for score detection.', 
    tech:'Python, PyTorch',
    sourceCode: "https://github.com/fancent/CSC420/tree/master/Project",
  },
  {
    link:"https://github.com/fancent/PHY407/blob/master/Project/MonteMethod3D.png?raw=true",
    name:'Monte Carlo Solution to PDEs',
    purpose: 'Created a stable Monte Carlo method to approximate the solutions of 2D partial differential equation. Resulted in less than 3% error and 99% faster on average.',
    tech:'Python',
    sourceCode: "https://github.com/fancent/PHY407/tree/master/Project",
  },
]

function Project() {
  const renderCRTs = () => {
    return projects.map((details) => <CRTCard key={details.name} details={details}/>)
  }

  return (
    <ProjectWrapper>
      <BodyTitle>Projects</BodyTitle>
      <CardsWrapper>
        {renderCRTs()}
      </CardsWrapper>
    </ProjectWrapper>
  );
}

const ProjectWrapper = styled.div`
  margin: 5em;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 752px) {
    margin: 0;
    width: 100%;
  }
`

const BodyTitle = styled.h1`
  color: #dbedf3;
  @media (max-width: 752px) {
    padding: 0 1em 0 1em;
  }
`

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(480px, 1fr) );
  grid-gap: 10px;
  overflow-y: scroll;
  margin-bottom: 8vh;

  @media (max-width: 752px) {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export default Project;