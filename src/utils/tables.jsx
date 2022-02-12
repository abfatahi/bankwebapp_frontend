import { Space } from 'antd';

export const columns = [
  {
    title: 'S/N',
    render: (item, record, index) => index + 1,
  },
  {
    title: 'Beneficiary',
    dataIndex: 'account_name',
    key: 'account_name',
    render: (text) => (
      <Space>
        <b>{text}</b>
      </Space>
    ),
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
];

export const dummyTransactions = [
  {
    key: 1,
    description: 'Funds transfer to 029873738 - GTBank',
    date: '20/01/2022',
    account_name: 'John Doe',
    bank_name: 'Zenith Bank',
    account_number: '3736838633',
    time: '9:45am',
    amount: 35090,
    status: 'pending',
  },
  {
    key: 2,
    description: 'Funds transfer from 029873738 - GTBank',
    date: '20/01/2022',
    account_name: 'John Doe',
    bank_name: 'Zenith Bank',
    account_number: '3736838633',
    time: '9:45am',
    amount: 35090,
    status: 'success',
  },
  {
    key: 3,
    description: 'Funds transfer from 029873738 - GTBank',
    date: '20/01/2022',
    account_name: 'John Doe',
    bank_name: 'Zenith Bank',
    account_number: '3736838633',
    time: '9:45am',
    amount: 45000,
    status: 'success',
  },
  {
    key: 4,
    description: 'Funds transfer from 029873738 - GTBank',
    date: '20/01/2022',
    account_name: 'John Doe',
    bank_name: 'Zenith Bank',
    account_number: '3736838633',
    time: '9:45am',
    amount: 35090,
    status: 'success',
  },
  {
    key: 5,
    description: 'Funds transfer to 029873738 - GTBank',
    date: '20/01/2022',
    account_name: 'John Doe',
    bank_name: 'Zenith Bank',
    account_number: '3736838633',
    time: '9:45am',
    amount: 35090,
    status: 'pending',
  },
  {
    key: 6,
    description: 'Funds transfer to 029873738 - GTBank',
    date: '20/01/2022',
    account_name: 'John Doe',
    bank_name: 'Zenith Bank',
    account_number: '3736838633',
    time: '9:45am',
    amount: 35090,
    status: 'pending',
  },
  {
    key: 7,
    description: 'Funds transfer from 029873738 - GTBank',
    date: '20/01/2022',
    account_name: 'John Doe',
    bank_name: 'Zenith Bank',
    account_number: '3736838633',
    time: '9:45am',
    amount: 35090,
    status: 'success',
  },
  {
    key: 8,
    description: 'Funds transfer from 029873738 - GTBank',
    date: '20/01/2022',
    account_name: 'John Doe',
    bank_name: 'Zenith Bank',
    account_number: '3736838633',
    time: '9:45am',
    amount: 45000,
    status: 'success',
  },
  {
    key: 9,
    description: 'Funds transfer from 029873738 - GTBank',
    date: '20/01/2022',
    account_name: 'John Doe',
    bank_name: 'Zenith Bank',
    account_number: '3736838633',
    time: '9:45am',
    amount: 35090,
    status: 'success',
  },
  {
    key: 10,
    description: 'Funds transfer to 029873738 - GTBank',
    date: '20/01/2022',
    account_name: 'John Doe',
    bank_name: 'Zenith Bank',
    account_number: '3736838633',
    time: '9:45am',
    amount: 35090,
    status: 'pending',
  },
  {
    key: 11,
    description: 'Funds transfer to 029873738 - GTBank',
    date: '20/01/2022',
    account_name: 'John Doe',
    bank_name: 'Zenith Bank',
    account_number: '3736838633',
    time: '9:45am',
    amount: 35090,
    status: 'pending',
  },
  {
    key: 12,
    description: 'Funds transfer from 029873738 - GTBank',
    date: '20/01/2022',
    account_name: 'John Doe',
    bank_name: 'Zenith Bank',
    account_number: '3736838633',
    time: '9:45am',
    amount: 35090,
    status: 'success',
  },
  {
    key: 13,
    description: 'Funds transfer from 029873738 - ZenithBank',
    date: '20/01/2022',
    account_name: 'John Doe',
    bank_name: 'Zenith Bank',
    account_number: '3736838633',
    time: '9:45am',
    amount: 45000,
    status: 'success',
  },
  {
    key: 14,
    description: 'Funds transfer from 029873738 - Fidelity Bank',
    date: '20/01/2022',
    account_name: 'John Doe',
    bank_name: 'Zenith Bank',
    account_number: '3736838633',
    time: '9:45am',
    amount: 35090,
    status: 'success',
  },

  {
    key: 17,
    description:
      'Funds transfer from Bamidele Aminat Olanike - 1287736333 - First Bank',
    date: '20/01/2022',
    account_name: 'John Doe',
    bank_name: 'Zenith Bank',
    account_number: '3736838633',
    time: '9:45am',
    amount: 35090,
    status: 'success',
  },
  {
    key: 18,
    description:
      'Funds transfer from Bamidele Aminat Olanike - 1287736333 - First Bank',
    date: '20/01/2022',
    account_name: 'John Doe',
    bank_name: 'Zenith Bank',
    account_number: '3736838633',
    time: '9:45am',
    amount: 45000,
    status: 'success',
  },
  {
    key: 15,
    description: 'Wire transfer to John Doe - 1872668733 - ChaseBank',
    date: '20/01/2022',
    account_name: 'John Doe',
    bank_name: 'Zenith Bank',
    account_number: '3736838633',
    time: '9:45am',
    amount: 35090,
    status: 'pending',
  },
  {
    key: 19,
    description:
      'Funds transfer from Bamidele Aminat Olanike - 1287736333 - First Bank',
    date: '20/01/2022',
    account_name: 'John Doe',
    bank_name: 'Zenith Bank',
    account_number: '3736838633',
    time: '9:45am',
    amount: 35090,
    status: 'success',
  },
  {
    key: 16,
    description:
      'Funds transfer to Shakirat Ishaq Folashade - 0298473738 - Polaris Bank',
    date: '20/01/2022',
    account_name: 'John Doe',
    bank_name: 'Zenith Bank',
    account_number: '3736838633',
    time: '9:45am',
    amount: 35090,
    status: 'pending',
  },
  {
    key: 20,
    description: 'Funds transfer to Bamidele Aminat - 0298737385 - Kuda Bank',
    date: '20/01/2022',
    account_name: 'John Doe',
    bank_name: 'Zenith Bank',
    account_number: '3736838633',
    time: '9:45am',
    amount: 35090,
    status: 'pending',
  },
];
