import React from 'react';
import styled from 'styled-components';
import {
  FaUser,
  FaBell,
  FaChevronCircleLeft,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
// import { clearState } from '../../redux/reducers/auth/login';
// import { useDispatch } from 'react-redux';
import { Logo as logo } from '../../assets/images';

const Navbar = () => {
  // const loggedInUser = JSON.parse(sessionStorage.getItem('user'));
  // const dispatch = useDispatch();
  const Navigate = useNavigate();
  const signout = () => {
    sessionStorage.clear();
    // dispatch(clearState());
    Navigate('/login');
  };

  return (
    <Container>
      <div className='group'>
        <Logout onClick={signout} />
        <h4>
          internet<span>Banking ...</span>{' '}
        </h4>
      </div>
      <NavMenu>
        <NotificationIcon />
        <Avatar />
        <UserProfile>
          <p>Nicola Tesla</p>
          <span>0143506867</span>
          {/* <p>{loggedInUser.firstName + ' ' + loggedInUser.lastName}</p>
          <span>{loggedInUser.isSuper ? 'Super Admin' : 'Sub Admin'}</span> */}
        </UserProfile>
        <Logo src={logo} />
      </NavMenu>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  position: fixed;
  height: 64px;
  width: 100vw;
  background: #ffffff;
  border-bottom: 1px solid #e24307;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  z-index: 999;

  .group {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }

  h4 {
    font-weight: normal;
    font-size: 18px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #e24307;

    span {
      font-weight: bold;
    }
  }
`;

const Logo = styled.img`
  width: 60px;
  height: 80%;
  object-fit: fill;
`;

const NavMenu = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
`;

const UserProfile = styled.div`
  margin-right: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.001em;
    color: #666666;
    margin-bottom: 0.4em !important;
  }
  span {
    font-style: normal;
    font-weight: normal;
    font-size: 0.9rem;
    line-height: 12px;
    text-align: center;
    letter-spacing: 0.015em;
    color: #e24307;
  }
`;

const NotificationIcon = styled(FaBell)`
  margin-right: 2.5rem;
  width: 1.5rem;
  height: 1.5rem;
  color: #e24307;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
    transition: 0.2s all ease-in-out;
  }
`;

const Avatar = styled(FaUser)`
  margin-right: 0.5rem;
  width: 2rem;
  height: 2rem;
  color: #e24307;
`;

const Logout = styled(FaChevronCircleLeft)`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  color: #e24307;
  :hover {
    transform: scale(1.1);
    transition: 0.2s all ease-in-out;
  }
`;
