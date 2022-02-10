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
      title='Register'
      subtitle={
        <>
          Already have login details? <Link to='/login'>Login Here</Link>
        </>
      }
      content={
        <>
          <form action='' data-aos='fade-left' data-aos-duration='1000'>
            <Inputfield placeholder='Fullname' />
            <Inputfield placeholder='Email' />
            <Inputfield placeholder='Phone Number' />
            <Inputfield placeholder='Transfer Pin' inputType='password' />
            <Inputfield placeholder='Password' inputType='password' />
            <Inputfield placeholder='Confirm Password' inputType='password' />
            <br />
            <Button full primary text='Register' />
          </form>
        </>
      }
    />
  );
};

export default Index;
