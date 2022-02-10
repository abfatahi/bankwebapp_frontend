import React from 'react';
import { DashboardLayout } from '../../../layouts';
import Container from './styles';

const Index = () => {
  return (
    <DashboardLayout
      content={
        <Container>
          <p>Manage your accounts, view balance and do more</p>
        </Container>
      }
    />
  );
};
export default Index;
