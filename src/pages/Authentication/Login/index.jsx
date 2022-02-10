import { Checkbox } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../../../layouts';
import { Inputfield, Button } from '../../../reusables';
import Aos from 'aos';

const Index = () => {
  React.useEffect(() => {
    Aos.init();
  }, []);
  return (
    <AuthLayout
      title='Login'
      subtitle={
        <>
          New to Internet Banking? <Link to='/register'>Register Here</Link>
        </>
      }
      content={
        <>
          <form action='' data-aos='fade-left' data-aos-duration='1000'>
            <Inputfield placeholder='Account Number, UserID' />
            <Inputfield placeholder='Password' inputType='password' />
            <Checkbox><span style={{ color: '#fff' }}>Remember me</span>
            </Checkbox>
            <br />
            <Button full primary text='LOGIN' />
          </form>
        </>
      }
    />
  );
};

export default Index;
