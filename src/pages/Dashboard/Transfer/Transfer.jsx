import React from 'react';
import { Button, Inputfield, Selectfield } from '../../../reusables';
import Container, { TransferContainer } from './styles';

const Index = () => {
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
            placeholder="Select Beneficiary's Bank"
            data={[
              { key: 1, value: 'First Bank' },
              { key: 2, value: 'Zenith Bank' },
              { key: 3, value: 'Guaranty Trust Bank' },
            ]}
          />
          <Inputfield
            outline
            placeholder='Enter Amount between 100 - 10,000,000'
          />
          <Inputfield
            outline
            placeholder='Remark (Optional)'
          />
        <br />
        <Button full dark text='Continue' />
        </div>
      </TransferContainer>
    </Container>
  );
};
export default Index;
