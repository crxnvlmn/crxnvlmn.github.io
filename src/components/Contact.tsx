import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

interface Props {}

export const Contact: React.FC<Props> = () => {
  return (
    <Element name="contact">
      <Container>
        <h1>@Contact</h1>
      </Container>
    </Element>
  );
};

const Container = styled.div`
  background: mediumseagreen;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;