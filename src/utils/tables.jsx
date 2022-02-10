import { Space } from 'antd';

export const transactionColumns = [
  {
    title: 'S/N',
    render: (item, record, index) => index + 1,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
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
        {text}, &nbsp;
        {record.time}
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
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
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
            text === 'credit' ? '#19B729' : text === 'debit' ? '#FF8282' : '',
          background:
            text === 'credit'
              ? 'rgba(25, 183, 41, 0.1)'
              : text === 'debit'
              ? 'rgba(255, 130, 130, 0.1)'
              : '',
        }}
      >
        <b>{text}</b>
      </Space>
    ),
  },
];

export const dummyTransactions = [
  {
    key: 1,
    description: 'Funds transfer to 029873738 - GTBank',
    date: '20/01/2022',
    time: '9:45am',
    amount: 35090,
    type: 'debit',
  },
  {
    key: 2,
    description: 'Funds transfer from 029873738 - GTBank',
    date: '20/01/2022',
    time: '9:45am',
    amount: 35090,
    type: 'credit',
  },
  {
    key: 3,
    description: 'Funds transfer from 029873738 - GTBank',
    date: '20/01/2022',
    time: '9:45am',
    amount: 45000,
    type: 'credit',
  },
  {
    key: 4,
    description: 'Funds transfer from 029873738 - GTBank',
    date: '20/01/2022',
    time: '9:45am',
    amount: 35090,
    type: 'credit',
  },
  {
    key: 5,
    description: 'Funds transfer to 029873738 - GTBank',
    date: '20/01/2022',
    time: '9:45am',
    amount: 35090,
    type: 'debit',
  },
];
