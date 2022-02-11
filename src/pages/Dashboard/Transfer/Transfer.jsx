import React from 'react';
// import { useSelector } from 'react-redux';
import { Button, Inputfield, Selectfield } from '../../../reusables';
import Container, { TransferContainer } from './styles';
// import { transferSelector } from '../../../redux/actions/transfer';

const Index = () => {
  const [newTransfer, setNewTransfer] = React.useState({
    beneficaryBank: '',
    beneficiaryName: '',
    beneficiaryNumber: 0,
    amount: 0,
    remark: '',
  });

  const {
    beneficiaryBank,
    beneficiaryName,
    beneficiaryNumber,
    amount,
    remark,
  } = newTransfer;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTransfer((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Container>
      <h1>Funds Transfer</h1>
      <p>Send money to anyone. it's Quick and Easy</p>
      <TransferContainer>
        <h3>Daily Transfer limit: #10,000,0000</h3>
        <p>
          Min Transaction Amount: <b>#100</b>{' '}
        </p>
        <p>
          Min Transaction Amount: <b>#10,000,000</b>
        </p>
        <br />
        <div className='input__group'>
          <Selectfield
            onValueChange={(e) =>
              setNewTransfer((prevState) => ({
                ...prevState,
                beneficiaryBank: e.target.value,
              }))
            }
            placeholder="Select Beneficiary's Bank"
            data={[
              { key: 1, value: 'First Bank' },
              { key: 2, value: 'Zenith Bank' },
              { key: 3, value: 'Guaranty Trust Bank' },
            ]}
          />
          {beneficiaryBank && (
            <Inputfield
              fieldname='beneficiaryNumber'
              outline
              value={beneficiaryNumber}
              placeholder='Enter Account Number'
              onTextChange={handleChange}
            />
          )}
          {beneficiaryName && (
            <Inputfield
              fieldname='beneficiaryName'
              outline
              value={beneficiaryName}
              placeholder='Enter Account Number'
              onTextChange={handleChange}
            />
          )}
          <Inputfield
            fieldname='amount'
            outline
            value={amount}
            placeholder='Enter Amount between 100 - 10,000,000'
            onTextChange={handleChange}
          />
          <Inputfield
            fieldname='remark'
            outline
            value={remark}
            placeholder='Remark (Optional)'
            onTextChange={handleChange}
          />
          <br />
          <Button full dark text='Continue' />
        </div>
      </TransferContainer>
    </Container>
  );
};
export default Index;
