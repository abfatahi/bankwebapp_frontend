import React from 'react';
import { Table } from 'antd';
import Container from './styles';
import { dummyTransactions, transactionColumns } from '../../../utils/tables';

const Index = () => {
  return (
    <Container>
      <h1>Transaction History</h1>
      <p>
        View your transactions over a selected range of time, default range is
        set to one week from current date
      </p>
      <h3>Recent Transactions</h3>
      <br />
      <Table dataSource={dummyTransactions} columns={transactionColumns} />
    </Container>
  );
};
export default Index;
