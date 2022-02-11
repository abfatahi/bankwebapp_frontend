import { Space } from 'antd';

export const columns = [
  {
    title: 'S/N',
    render: (item, record, index) => index + 1,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    width:'700px',
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
export const transactionColumns = [
  {
    title: 'S/N',
    render: (item, record, index) => index + 1,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    width:'700px',
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
  {
    title: '...',
    render: () => (
      <Space
        style={{
          cursor: 'pointer',
          color:'#e24307'
        }}
      >
        View
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
  {
    key: 6,
    description: 'Funds transfer to 029873738 - GTBank',
    date: '20/01/2022',
    time: '9:45am',
    amount: 35090,
    type: 'debit',
  },
  {
    key: 7,
    description: 'Funds transfer from 029873738 - GTBank',
    date: '20/01/2022',
    time: '9:45am',
    amount: 35090,
    type: 'credit',
  },
  {
    key: 8,
    description: 'Funds transfer from 029873738 - GTBank',
    date: '20/01/2022',
    time: '9:45am',
    amount: 45000,
    type: 'credit',
  },
  {
    key: 9,
    description: 'Funds transfer from 029873738 - GTBank',
    date: '20/01/2022',
    time: '9:45am',
    amount: 35090,
    type: 'credit',
  },
  {
    key: 10,
    description: 'Funds transfer to 029873738 - GTBank',
    date: '20/01/2022',
    time: '9:45am',
    amount: 35090,
    type: 'debit',
  },
  {
    key: 11,
    description: 'Funds transfer to 029873738 - GTBank',
    date: '20/01/2022',
    time: '9:45am',
    amount: 35090,
    type: 'debit',
  },
  {
    key: 12,
    description: 'Funds transfer from 029873738 - GTBank',
    date: '20/01/2022',
    time: '9:45am',
    amount: 35090,
    type: 'credit',
  },
  {
    key: 13,
    description: 'Funds transfer from 029873738 - ZenithBank',
    date: '20/01/2022',
    time: '9:45am',
    amount: 45000,
    type: 'credit',
  },
  {
    key: 14,
    description: 'Funds transfer from 029873738 - Fidelity Bank',
    date: '20/01/2022',
    time: '9:45am',
    amount: 35090,
    type: 'credit',
  },

  {
    key: 17,
    description:
      'Funds transfer from Bamidele Aminat Olanike - 1287736333 - First Bank',
    date: '20/01/2022',
    time: '9:45am',
    amount: 35090,
    type: 'credit',
  },
  {
    key: 18,
    description:
      'Funds transfer from Bamidele Aminat Olanike - 1287736333 - First Bank',
    date: '20/01/2022',
    time: '9:45am',
    amount: 45000,
    type: 'credit',
  },
  {
    key: 15,
    description: 'Wire transfer to John Doe - 1872668733 - ChaseBank',
    date: '20/01/2022',
    time: '9:45am',
    amount: 35090,
    type: 'debit',
  },
  {
    key: 19,
    description:
      'Funds transfer from Bamidele Aminat Olanike - 1287736333 - First Bank',
    date: '20/01/2022',
    time: '9:45am',
    amount: 35090,
    type: 'credit',
  },
  {
    key: 16,
    description:
      'Funds transfer to Shakirat Ishaq Folashade - 0298473738 - Polaris Bank',
    date: '20/01/2022',
    time: '9:45am',
    amount: 35090,
    type: 'debit',
  },
  {
    key: 20,
    description: 'Funds transfer to Bamidele Aminat - 0298737385 - Kuda Bank',
    date: '20/01/2022',
    time: '9:45am',
    amount: 35090,
    type: 'debit',
  },
];
