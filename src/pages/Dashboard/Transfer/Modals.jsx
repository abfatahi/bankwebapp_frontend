import { Modal } from 'antd';
import React from 'react';
import styled from 'styled-components';

export const TransferDetailsModal = (props) => {
  return (
    <ModalContainer centered={true} visible={true} footer={false}>
      <div className='container'>
        <h2>Transfer Details</h2>
        <br />
        <h3>Pending</h3>
        <div className='group'>
          <div className='title'>Transaction ID:</div>
          <div className='value'>5276537657</div>
        </div>
        <div className='group'>
          <div className='title'>Recipient Name:</div>
          <div className='value'>John Doe</div>
        </div>
        <div className='group'>
          <div className='title'>Recipient Account:</div>
          <div className='value'>5276537657 (Zenith Bank)</div>
        </div>
        <div className='group'>
          <div className='title'>Amount</div>
          <div className='value'>50,000</div>
        </div>
        <div className='group'>
          <div className='title'>Date</div>
          <div className='value'>29-12-2021</div>
        </div>
      </div>
    </ModalContainer>
  );
};

const ModalContainer = styled(Modal)`
  height: 356px !important;
  width: 400px !important;
  text-align: center;
  display: flex;
  align-items: center;

  .container {
    display: flex;
    // align-items: center;
    flex-direction: column;
    gap: 1rempx;
    padding: 0 75px;

    h2 {
      margin-bottom: 1rem !important;
      width: 100%;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      color: #000000;
      text-align: center;
      text-transform: capitalize;
    }

    h3 {
      margin-bottom: 1rem !important;
      width: 100%;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      color: #000000;
      text-align: center;
      text-transform: capitalize;
    }

    .group {
      display: flex;
      width: 100%;
      margin-bottom: 0.5rem !important;
    }

    .title {
      flex: 1;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      color: #000000;
    }

    .value {
      flex: 1;
      font-style: normal;
      font-size: 16px;
      color: #000000;
    }
  }
`;
