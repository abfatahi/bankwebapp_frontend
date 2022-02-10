import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import styled from 'styled-components';

const Index = (props) => {
  return (
    <Container>
      <div className='first__row'>
        <div className='balance__group'>
          <div className='available__balance'>
            # {props.availableBalance.toLocaleString()}
          </div>
          <p>Book Balance: #{props.bookBalance.toLocaleString()}</p>
        </div>
        <FaCheckCircle className='icon' />
      </div>
      <div className='second_row'>
        <h3>{props.accountNumber}</h3>
        <h4>{props.accountName}</h4>
      </div>
    </Container>
  );
};

export const dummyData = {
  availableBalance: 450000,
  bookBalance: 500000,
  accountNumber: '0154305609',
  accountName: 'Ishaq Abdulfatahi',
};

export default Index;

const Container = styled.div`
  position: relative;
  width: 40%;
  height: 200px;
  padding: 2rem 1rem;
  border-radius: 10px;
  background: #3e464e;

  .first__row {
    display: flex;
    justify-content: space-between;

    .icon {
      width: 24px;
      height: 24px;
      color: #057a07;
      background: transparent;
    }

    .balance__group {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .available__balance {
        font-size: 2rem;
        font-weight: bold;
        color: #fff;
      }

      p {
        color: #fff;
      }
    }
  }

  .second_row {
    position: absolute;
    right: 1em;
    bottom: 2em;
    text-align: right;

    h3 {
      font-size: 1rem;
      color: #e24307;
      margin-bottom: 10px;
    }

    h4 {
      font-size: 1rem;
      color: #fff;
    }
  }
`;
