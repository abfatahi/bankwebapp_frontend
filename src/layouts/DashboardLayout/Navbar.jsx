import React from 'react';
import { Dropdown, Menu } from 'antd';
import styled from 'styled-components';
import { FaUser, FaSignOutAlt, FaBell, FaChevronDown } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { clearState } from '../../redux/reducers/auth/login';
import { useDispatch } from 'react-redux';
import { Logo as logo } from '../../assets/images';

const Navbar = () => {
  // const loggedInUser = JSON.parse(sessionStorage.getItem('user'));
  const dispatch = useDispatch();
  const history = useHistory();
  const signout = () => {
    sessionStorage.clear();
    dispatch(clearState());
    history.push('/login');
  };
  const menu = (
    <Menu>
      <Menu.Item onClick={signout}>
        <FaSignOutAlt className='logout' />
        <span
          style={{ marginLeft: '1rem', color: '#e20b8c', fontSize: '1rem' }}
        >
          Log out
        </span>
      </Menu.Item>
    </Menu>
  );
  return (
    <Container>
      <Logo src={logo} />
      <NavMenu>
        <NotificationIcon />
        <Avatar />
        <UserProfile>
          <p>Nicola Tesla</p>
          <span>0143506867</span>
          {/* <p>{loggedInUser.firstName + ' ' + loggedInUser.lastName}</p>
          <span>{loggedInUser.isSuper ? 'Super Admin' : 'Sub Admin'}</span> */}
        </UserProfile>
        <Dropdown overlay={menu}>
          <ArrowDown />
        </Dropdown>
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

  h4 {
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.005em;
    color: #e20b8c;
  }
`;

const Logo = styled.img``;

const NavMenu = styled.div`
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
    margin-bottom: 0.4em;
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
  width: 2rem;
  height: 2rem;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
    transition: 0.2s all ease-in-out;
  }
`;

const Avatar = styled(FaUser)`
  margin-right: 0.5rem;
  width: 40px;
  height: 40px;
`;

const ArrowDown = styled(FaChevronDown)`
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  :hover {
    transform: scale(1.1);
    transition: 0.2s all ease-in-out;
  }
`;
