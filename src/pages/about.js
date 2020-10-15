import React from 'react';
import styled from 'styled-components';

const abouts = [
  {
    title: "Background",
    body: [
      "A Canadian born and raised in Hong Kong. Bilingual in English and Chinese (Cantonese/Manderin).",
      "An aspiring Data/ Machine Learning Engineer and currently pursuing Masters of Science in Big Data Technology at Hong Kong University of Science and Technology.",
      "Did my undergrad at University of Toronto (St. George) with a Double Major in Computer Science and Physics, with a Minor in Mathematics."
    ],
  },
  {
    title: "Current Work",
    body: [
      "I am currently working part time as a Data Engineer at Imagine Software at Hong Kong.",
      "At the same time, I am also working as a research assistant at Jasmine Project at HKUST."
    ],
  },
  {
    title: "Personal Interest",
    body: [
      "A big fan of sports, particularly basketball. Also getting into the mechanical keyboard rabbit hole recently.",
      "Huge interest in retro stuff related to technology like vinyl records, CRT monitors, etc. That is why I put these stuff in this website."
    ],
  },
]

function About() {

  const renderAbouts = () => {
    return abouts.map(({ title, body }) => (
      <BodyWrapper key={title}>
        <BodyTitle key={title}>
          {title}
        </BodyTitle>
        {body.map((point) => <BodyText key={point}>{point}</BodyText>)}
      </BodyWrapper>
    ));
  };

  return (
    <AboutWrapper>
      {renderAbouts()}
    </AboutWrapper>
  );
}

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5em 5em 5em 9em;
  cursor: default;
  height: 100%;
  @media (max-width: 752px) {
    width: 100%;
    margin: 0;
    overflow-y: scroll;
  }
`

const BodyWrapper = styled.div`
  @media (max-width: 752px) {
    width: 100%;
  }
`

const BodyTitle = styled.h1`
  color: #dbedf3;
  padding: 0 1em 0 1em;
`

const BodyText = styled.h4`
  color: #dbedf3;
  margin: 0.5em 0 0.5em 2em;
  width: 60%;
  @media (max-width: 752px) {
    font-size: 14px;
    width: auto;
    margin: 0;
    padding: 0 3em 0 3em;
  }
`

export default About;