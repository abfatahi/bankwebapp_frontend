import React from 'react';
import { Table } from 'antd';
import Container from './styles';
import { dummyTransactions, columns } from '../../../utils/tables';

const Index = () => {
  return (
    <Container>
      <h1>Account Statement</h1>
      <p>
        View your account statements over a selected range of time, default
        range is set to one week from current date
      </p>
      <h3>Recent Transactions</h3>
      <br />

      <Table dataSource={dummyTransactions} columns={columns} />
    </Container>
  );
};
export default Index;
