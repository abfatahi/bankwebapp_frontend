import React from 'react';
import { Table } from 'antd';
import Container from './styles';
import { columns } from '../../../utils/tables';
import { useSelector } from 'react-redux';
import { transferSelector } from '../../../redux/reducers/transfers';

const Index = () => {
  const { transfers } = useSelector(transferSelector);
  return (
    <Container>
      <h1>Account Statement</h1>
      <p>
        View your account statements over a selected range of time, default
        range is set to one week from current date
      </p>
      <h3>Recent Transactions</h3>
      <br />

      <Table dataSource={transfers} columns={columns} scroll={{ x: 1250 }} />
    </Container>
  );
};
export default Index;
