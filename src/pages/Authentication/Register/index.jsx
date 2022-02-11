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
            <Inputfield primary full placeholder='Fullname' />
            <Inputfield primary full placeholder='Email' />
            <Inputfield primary full placeholder='Phone Number' />
            <div className='group'>
              <Inputfield
                primary
                full
                placeholder='Password'
                inputType='password'
              />
              <Inputfield
                primary
                full
                placeholder='Confirm Password'
                inputType='password'
              />
            </div>
            <Inputfield
              primary
              full
              placeholder='Transfer Pin'
              inputType='password'
            />
            <Button full primary text='Register' />
          </form>
        </>
      }
    />
  );
};

export default Index;
