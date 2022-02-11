import React from 'react';
import { Switch, Table } from 'antd';
import { DashboardLayout } from '../../../layouts';
import Container from './styles';
import { AccountSummaryCard } from '../../../components/Dashboard';
import { dummyData } from '../../../components/Dashboard/AccountSummaryCard';
import { dummyTransactions, columns } from '../../../utils/tables';
import { useDispatch } from 'react-redux';
import { toggleShowBalance } from '../../../redux/reducers/account';

const Index = () => {
  const tab = localStorage.getItem('tab');
  const dispatch = useDispatch();
  return (
    <DashboardLayout
      content={
        <Container>
          <h1>{tab}</h1>
          <p>Quickly perform task from the dashboard or view reprots</p>
          <div className='header'>
            <h3>ACCOUNT SUMMARY</h3>
            <div className='balance__group'>
              <b>SHOW BALANCE</b>
              <Switch
                style={{ background: '#e24307' }}
                onChange={() => dispatch(toggleShowBalance())}
              />
            </div>
          </div>
          <AccountSummaryCard {...dummyData} />
          <br />
          <br />
          <h3>Recent Transactions</h3>
          <br />
          <Table
            dataSource={
              dummyTransactions.length > 0
                ? dummyTransactions.slice(-5)
                : dummyTransactions
            }
            columns={columns}
            pagination={false}
          />
        </Container>
      }
    />
  );
};
export default Index;
