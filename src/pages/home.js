import React from 'react';
import styled from 'styled-components';

function Home() {
  return (
    <HomeWrapper>
      <BodyTitle>
        Hi I'm Vincent Fan
      </BodyTitle>
      <BodyText>
        This is my portfolio showcasing a bit more about me than my resume
      </BodyText>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5em;
  cursor: default;
`
const BodyTitle = styled.h1`
  color: #dbedf3;
`
const BodyText = styled.h4`
  color: #dbedf3;
`

export default Home;