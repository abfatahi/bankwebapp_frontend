import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { validateAccount } from '../../../redux/actions/account';
import { Button, Inputfield, Selectfield } from '../../../reusables';
import { bankList } from '../../../utils/data';
import Container, { TransferContainer } from './styles';
import { accountSelector } from '../../../redux/reducers/account';

const Index = () => {
  const dispatch = useDispatch();

  const {
    validateBankLoading,
    validateBankError,
    validateBankSuccess,
    accountName,
  } = useSelector(accountSelector);

  const [newTransfer, setNewTransfer] = React.useState({
    beneficiaryBank: '',
    beneficiaryBankCode: '',
    beneficiaryName: '',
    beneficiaryNumber: '',
    amount: '',
    remark: '',
    submitted: false,
    isValidAccount: null,
  });

  const {
    beneficiaryBank,
    beneficiaryBankCode,
    beneficiaryName,
    beneficiaryNumber,
    amount,
    remark,
    submitted,
    isValidAccount,
  } = newTransfer;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTransfer((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTransfer((prevState) => ({ ...prevState, submitted: true }));
    // if()
  };

  const handleValidateAccount = (e) => {
    e.preventDefault();
    console.log(beneficiaryNumber.length);
    if (beneficiaryNumber.length === 10) {
      setNewTransfer((prevState) => ({
        ...prevState,
        isValidAccount: true,
      }));
      const payload = {
        beneficiaryBankCode,
        beneficiaryNumber,
      };
      dispatch(validateAccount(payload));
    } else if (beneficiaryNumber.length < 10 || beneficiaryNumber.length > 10) {
      setNewTransfer((prevState) => ({
        ...prevState,
        isValidAccount: false,
      }));
    }
  };

  React.useEffect(() => {
    if (validateBankSuccess) {
      setNewTransfer((prevState) => ({
        ...prevState,
        beneficiaryName: accountName,
      }));
    }
  }, [setNewTransfer, validateBankSuccess, accountName]);

  return (
    <Container>
      <h1>Funds Transfer</h1>
      <p>Send money to anyone. it's Quick and Easy</p>
      <TransferContainer onSubmit={handleSubmit}>
        <h3>Daily Transfer limit: #10,000,0000</h3>
        <p>
          Min Transaction Amount: <b>#100</b>{' '}
        </p>
        <p>
          Min Transaction Amount: <b>#10,000,000</b>
        </p>
        <br />
        <div className='input__group'>
          <div className='input'>
            <Selectfield
              onValueChange={(e) =>
                setNewTransfer((prevState) => ({
                  ...prevState,
                  beneficiaryBankCode: e.target.value,
                  beneficiaryBank: e.target.name,
                }))
              }
              placeholder="Select Beneficiary's Bank"
              data={bankList}
            />
            {submitted && !beneficiaryBank && (
              <p className='error-msg'>Beneficiary bank is required</p>
            )}
          </div>
          {beneficiaryBankCode && (
            <div className='group'>
              <Inputfield
                fieldname='beneficiaryNumber'
                inputType='number'
                outline
                value={beneficiaryNumber}
                placeholder='Enter Account Number'
                onTextChange={handleChange}
              />
              {!beneficiaryName && (
                <Button
                  onClick={handleValidateAccount}
                  loading={validateBankLoading}
                  primary
                  text='Validate'
                />
              )}
            </div>
          )}
          {validateBankError && (
            <p className='error-msg'>Unable to validate account!</p>
          )}
          {submitted && !beneficiaryNumber && (
            <p className='error-msg'>Beneficiary account number is required</p>
          )}
          {isValidAccount === false &&
            (beneficiaryNumber.length < 10 ||
              beneficiaryNumber.length > 10) && (
              <p className='error-msg'>Invalid Account Number</p>
            )}
          {beneficiaryName && (
            <div className='input'>
              <Inputfield
                fieldname='beneficiaryName'
                outline
                value={beneficiaryName}
                readOnly
                onTextChange={handleChange}
              />
              {submitted && !beneficiaryName && (
                <p className='error-msg'>Beneficiary name is required</p>
              )}
            </div>
          )}
          {beneficiaryBankCode && !beneficiaryName && (
            <p>
              <b> Validate Account Number to Proceed</b>
            </p>
          )}
          <div className='input'>
            <Inputfield
              fieldname='amount'
              outline
              inputType='number'
              value={amount}
              placeholder='Enter Amount between 100 - 10,000,000'
              readOnly={!beneficiaryName ? true : false}
              onTextChange={handleChange}
            />
            {submitted && !amount && (
              <p className='error-msg'>Transfer amount is required</p>
            )}
            {submitted && amount && parseInt(amount) > 10000000 && (
              <p className='error-msg'>Maximum transfer amount is #1000000</p>
            )}
            {submitted && amount && parseInt(amount) < 100 && (
              <p className='error-msg'>Minimum transfer amount is #100</p>
            )}
          </div>
          <div className='input'>
            <Inputfield
              fieldname='remark'
              outline
              value={remark}
              readOnly={!beneficiaryName ? true : false}
              placeholder='Remark (Optional)'
              onTextChange={handleChange}
            />
          </div>
          <br />
          <Button
            disabled={!beneficiaryName ? true : false}
            full
            dark
            text='Continue'
          />
        </div>
      </TransferContainer>
    </Container>
  );
};
export default Index;
