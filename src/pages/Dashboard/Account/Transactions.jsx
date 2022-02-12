import React from 'react';
import { Table, Space } from 'antd';
import Container from './styles';
import { TransferDetailsModal } from './Modals';
import { useDispatch, useSelector } from 'react-redux';
import { toggleShowTranferModal } from '../../../redux/reducers/account';
import { transferSelector } from '../../../redux/reducers/transfers';

const Index = () => {
  const dispatch = useDispatch();
  const { transfers } = useSelector(transferSelector);
  const transactionColumns = [
    {
      title: 'S/N',
      render: (item, record, index) => index + 1,
    },
    {
      title: 'Beneficiary',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <Space>{text}</Space>,
    },
    {
      title: 'Bank Name',
      dataIndex: 'bank_name',
      key: 'bank_name',
      render: (text) => <Space>{text}</Space>,
    },
    {
      title: 'Beneficiary Number',
      dataIndex: 'account_number',
      key: 'account_number',
      render: (text) => <Space>{text}</Space>,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (text) => <Space>#{text.toLocaleString()}</Space>,
    },
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (text) => <Space>{new Date(text).toLocaleDateString()}</Space>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text) => (
        <Space
          style={{
            fontSize: 13,
            letterSpacing: '0.07rem',
            textAlign: 'center',
            textTransform: 'capitalize',
            color:
              text === 'success'
                ? '#19B729'
                : text === 'pending'
                ? '#FFAD33'
                : text === 'rejected'
                ? '#FF8282'
                : '',
          }}
        >
          <b>{text}</b>
        </Space>
      ),
    },
    {
      title: 'Action',
      render: (text, row) => (
        <Space
          onClick={() => {
            dispatch(toggleShowTranferModal());
            localStorage.setItem('selectedTransaction', JSON.stringify(row));
          }}
          style={{
            cursor: 'pointer',
            fontWeight: 'bold',
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
      <Table dataSource={transfers} columns={transactionColumns} />
    </Container>
  );
};
export default Index;
