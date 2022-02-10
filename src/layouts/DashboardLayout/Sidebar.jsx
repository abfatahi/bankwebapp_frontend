import React from 'react';
import styled from 'styled-components';
import {
  FaBuffer,
  FaWallet,
  FaExchangeAlt,
  FaSignOutAlt,
  FaUserAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [activeTab, setActiveTab] = React.useState('Dashboard');

  React.useEffect(() => {
    const tab = localStorage.getItem('tab');
    setActiveTab(tab);
  }, []);

  return (
    <Container>
      <div className='user_info'>
        <FaUserAlt className='avatar' />
        <div className='group'>
          <h2>Ishaq Abdulfatahi</h2>
          <h3>0154305609</h3>
        </div>
      </div>

      <SidebarTabs
        onClick={() => {
          localStorage.setItem('tab', 'Dashboard');
        }}
        className={activeTab === 'Dashboard' ? 'active' : ''}
        to={'/'}
      >
        <FaBuffer className='icon' />
        <p>Dashboard</p>
      </SidebarTabs>
      <SidebarTabs
        onClick={() => {
          localStorage.setItem('tab', 'Accounts');
        }}
        className={activeTab === 'Accounts' ? 'active' : ''}
        to={'/'}
      >
        <FaWallet className='icon' />
        <p>Accounts</p>
      </SidebarTabs>
      <SidebarTabs
        onClick={() => {
          localStorage.setItem('tab', 'Transfers');
        }}
        className={activeTab === 'Transfers' ? 'active' : ''}
        to={'/'}
      >
        <FaExchangeAlt className='icon' />
        <p>Transfers</p>
      </SidebarTabs>
      <SidebarTabs
        onClick={() => {
          localStorage.clear();
        }}
        className='logout__btn'
        to={'/login'}
      >
        <FaSignOutAlt className='icon' />
        <p>Logout</p>
      </SidebarTabs>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  position: fixed;
  top: 64px;
  left: 0;
  height: calc(100vh - 64px);
  width: 250px;
  background: #3e464e;
  padding: 1rem 0 0;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  .logout__btn {
    position: absolute;
    bottom: 5rem;
  }

  .active {
    background: #e24307 !important;
    border-left: 5px solid #fff !important;

    p,
    .icon {
      color: #fff !important;
    }

    :hover {
      opacity: 0.7;
    }
  }

  .user_info {
    display: flex;
    width: 100%;
    padding: 1rem;
    align-items: center;
    margin-bottom: 3rem;
    gap: 0.5rem;

    .avatar {
      width: 36px;
      height: 36px;
      color: #bdbdbd;
      border-radius: 50%;
      border: 1px solid #bdbdbd;
      padding: 5px;
    }
    .group {
      display: flex;
      flex-direction: column;

      h2 {
        font-size: 1rem;
        color: #e24307;
      }

      h3 {
        font-size: 1rem;
        color: #fff;
      }
    }
  }
`;

const SidebarTabs = styled(Link)`
  display: flex;
  align-items: center;
  padding: 1em 1em 1em 2em;
  cursor: pointer;
  text-decoration: none;

  .icon {
    width: 1.5em;
    height: 1.5em;
    margin-right: 1rem;
    color: #bdbdbd;
  }

  p {
    font-style: normal;
    font-size: 1rem;
    line-height: 23px;
    letter-spacing: 0.0015em;
    color: #bdbdbd;
    margin: 0;
    padding: 0;
  }

  :hover {
    opacity: 0.7;
  }
`;
