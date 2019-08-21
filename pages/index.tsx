import React from "react";
import styled from "styled-components";
import Head from "../components/Head";

const Container = styled.main`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  height: 100vh;
  justify-content: center;
  padding: 1rem;
  width: 100vw;
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 2.5rem;
  letter-spacing: 0.02em;
  margin: 0;
`;

const Role = styled.span`
  display: block;
  font-size: 1.5rem;
`

const Index: React.FC = () => (
  <>
    <Head title="Alexander Anderson - Front-End Developer" />
    
    <Container>
      <Header>
        Alexander Anderson
        <Role>Front-End Developer</Role>
      </Header>
    </Container>
  </>
);

export default Index;
