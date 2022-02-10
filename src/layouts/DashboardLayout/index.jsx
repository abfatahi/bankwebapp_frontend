import React from 'react';
import styled from 'styled-components';
import Content from './Content';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Index = (props) => {
  return (
    <React.Fragment>
      <Container id='container'>
        <Navbar />
        <Sidebar />
        <Content content={props.content} />
      </Container>
    </React.Fragment>
  );
};

export default Index;

const Container = styled.div``;
