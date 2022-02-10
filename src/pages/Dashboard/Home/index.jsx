import React from 'react';
import { Switch, Table } from 'antd';
import { DashboardLayout } from '../../../layouts';
import Container from './styles';
import { AccountSummaryCard } from '../../../components/Dashboard';
import { dummyData } from '../../../components/Dashboard/AccountSummaryCard';
import { dummyTransactions, transactionColumns } from '../../../utils/tables';

const Index = () => {
  return (
    <DashboardLayout
      content={
        <Container>
          <p>Quickly perform task from the dashboard or view reprots</p>
          <div className='header'>
            <h3>ACCOUNT SUMMARY</h3>
            <div className='balance__group'>
              <b>SHOW BALANCE</b>
              <Switch />
            </div>
          </div>
          <AccountSummaryCard {...dummyData} />
          <br />
          <br />
          <h3>Recent Transactions</h3>
          <br />
          <Table dataSource={dummyTransactions} columns={transactionColumns} />
        </Container>
      }
    />
  );
};
export default Index;
