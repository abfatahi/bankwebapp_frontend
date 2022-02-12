import React from 'react';
import { Table, Space } from 'antd';
import Container from './styles';
import { dummyTransactions } from '../../../utils/tables';
import { TransferDetailsModal } from './Modals';
import { useDispatch } from 'react-redux';
import { toggleShowTranferModal } from '../../../redux/reducers/account';

const Index = () => {
  const dispatch = useDispatch();
  const transactionColumns = [
    {
      title: 'S/N',
      render: (item, record, index) => index + 1,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      width: '700px',
      render: (text) => <Space>{text}</Space>,
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (text, record) => (
        <Space>
          {/* {new Date(text).toLocaleDateString()}, &nbsp;
          {new Date(text).toLocaleTimeString()} */}
          {text},{record.time}
        </Space>
      ),
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (text) => <Space>#{text.toLocaleString()}</Space>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text) => (
        <Space
          style={{
            width: '90px',
            fontSize: 13,
            padding: '0.5em 1em',
            margin: '0.5em',
            display: 'flex',
            justifyContent: 'center',
            letterSpacing: '0.07rem',
            textAlign: 'center',
            textTransform: 'capitalize',
            borderRadius: '5px',
            color:
              text === 'success'
                ? '#19B729'
                : text === 'pending'
                ? '#FFAD33'
                : text === 'rejected'
                ? '#FF8282'
                : '',
            background:
              text === 'success'
                ? 'rgba(25, 183, 41, 0.1)'
                : text === 'pending'
                ? 'rgba(255, 173, 51, 0.1)'
                : text === 'rejected'
                ? 'rgba(255, 130, 130, 0.1)'
                : '',
          }}
        >
          <b>{text}</b>
        </Space>
      ),
    },
    {
      title: '...',
      render: (text, row) => (
        <Space
          onClick={() => {
            dispatch(toggleShowTranferModal());
            localStorage.setItem('selectedTransaction', JSON.stringify(row));
          }}
          style={{
            cursor: 'pointer',
            color: '#e24307',
          }}
        >
          View
        </Space>
      ),
    },
  ];
  return (
    <Container>
      <TransferDetailsModal />
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
