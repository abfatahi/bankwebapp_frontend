import React from 'react';
import { FaExchangeAlt} from 'react-icons/fa';
import { AccountTab } from '../../../components/Account';
import Container, { CardWrapper } from './styles';

const Index = () => {
  const tab = localStorage.getItem('tab');
  return (
    <Container>
      <h1>{tab}</h1>
      <p>Transfer money betwen your accounts or other accounts</p>
      <CardWrapper>
        <AccountTab
          text='Transfer Funds'
          icon={<FaExchangeAlt className='icon' />}
          link='/transfer/funds-transfer'
        />
      </CardWrapper>
    </Container>
  );
};
export default Index;
