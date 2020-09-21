import React from 'react';
import styled from 'styled-components';

const experiences =[
  {
    company: 'Imagine Software',
    title: 'Software Engineer',
    time: 'Jul 2020 - present',
    location: 'Hong Kong',
    descriptions: [
      '- Developed over 50 JavaScript Apps on our in-house platform for each Client which involve data aggregation and visualization, CRUD operation, and numeric analysis',
      '- Created an App template that decreases average production time by 20% and optimized part of old code base by reducing O(n^2) operations to linear time'
    ],
  },
  {
    company: 'University of Toronto',
    title: 'Teaching assitant',
    time: 'Jan 2020 - Apr 2020',
    location: 'Toronto, Canada',
    descriptions: [
      '- Taught freshman and sophomore Python, Java, C, complexity analysis, and software design'
    ],
  },
  {
    company: 'Uprise Credit',
    title: 'Web Developer',
    time: 'Jun 2019 - Aug 2019',
    location: 'Hong Kong',
    descriptions: [
      '- Developed and designed the front end of our desktop and mobile websites using React and Redux',
      '- Helped building the back end with REST API Design in Python'
    ],
  },
  {
    company: 'UGO Mobile Solutions',
    title: 'iOS Engineer',
    time: 'Sep 2018 - Apr 2019',
    location: 'Toronto, Canada',
    descriptions: [
      '- Implemented features and functionality including custom gestures, UI interface and animation. Integrated Apple Pay into UGO Wallet, and became the 1st mobile app able to purchase e-gift cards in Canada',
      '- Developed accessibility for the entire TD Wheels by myself, resulted in 5% increase of user base',
      '- Developed Proof of Concepts that visualize financial data in AR and deployed apps to payment terminals'
    ],
  },
]
function Experience() {

  const renderDescriptions = (descriptions) => {
    return descriptions.map((description) => <BodyText key={description}>{description}</BodyText>);
  }
  const renderExperience = () => {
    return experiences.map(({ company, title, time, location, descriptions}) => {
      return (
        <BodyWrapper key={company}>
          <BodyTitle>
            <h1 style={{color:'rgba(247, 56, 89, 0.6)'}}>{company}</h1>
            <h4>{title} | {time} | {location}</h4>
          </BodyTitle>
          <BodyTextWrapper>
            {renderDescriptions(descriptions)}
          </BodyTextWrapper>
          
        </BodyWrapper>
      );
    });
  }

  return (
    <ExperienceWrapper>
      {renderExperience()}
    </ExperienceWrapper>
  );
}

const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3em 9em 3em 9em;
  height: 70vh;
  cursor: default;
  overflow: scroll;
  font-weight: 300;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const BodyTitle = styled.div`
  color: #dbedf3;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 40%;
`

const BodyTextWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: auto;
`

const BodyText = styled.h4`
  color: #dbedf3;
  margin: 0.5em 0 0.5em 2em;
`

export default Experience;