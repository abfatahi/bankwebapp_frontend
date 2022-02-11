import React from 'react';
import styled from 'styled-components';
import { FaUser, FaBell, FaChevronCircleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
// import { clearState } from '../../redux/reducers/auth/login';
// import { useDispatch } from 'react-redux';
import { Logo as logo } from '../../assets/images';

const Navbar = () => {
  const loggedInUser = JSON.parse(localStorage.getItem('user'));
  // const dispatch = useDispatch();
  const Navigate = useNavigate();
  const signout = () => {
    localStorage.removeItem('token');
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
          <p>{loggedInUser.fullname}</p>
          <span>0089728686</span>
        </UserProfile>
        <Logo src={logo} />
      </NavMenu>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
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
  justify-content: center;

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    text-align: center;
    letter-spacing: 0.001em;
    color: #666666;
    margin-bottom: 0.2em !important;
  }
  span {
    font-style: normal;
    font-weight: normal;
    font-size: 0.9rem;
    text-align: center;
    letter-spacing: 0.015em;
    color: #e24307;
    margin: 0 !important;
    padding: 0 !important;
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
  width: 2.5rem;
  height: 2.5rem;
  color: #e24307;
  border-radius: 50%;
  padding: 1px;
`;

const Logout = styled(FaChevronCircleLeft)`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  color: #e24307;

  :hover {
    opacity: 0.7;
    transition: 0.2s all ease-in-out;
  }
`;
