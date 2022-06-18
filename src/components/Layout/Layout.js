import * as React from 'react';
import styled from 'styled-components';
import NavBar from '../NavBar/NavBar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  height: 100vh;
`;

const Layout = ({ pageTitle, children }) => {
  return (
    <Container className={`container`}>
      <NavBar />
      <main>
        {children}
      </main>
    </Container>
  )
}

export default Layout