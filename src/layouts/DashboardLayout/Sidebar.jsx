import React from 'react';
import styled from 'styled-components';
import {
  FaBuffer,
  FaWallet,
  FaExchangeAlt,
  FaSignOutAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const activeTab = sessionStorage.getItem('tab');
  return (
    <Container>
      {sidebarTabs.map((tab) => {
        const { id, name, icon, link } = tab;
        return (
          <SidebarTabs
            key={id}
            onClick={() => {
              sessionStorage.setItem('tab', name);
            }}
            className={activeTab === name ? 'active' : ''}
            to={link}
          >
            <div className='icon'>{icon}</div>
            <p>{name}</p>
          </SidebarTabs>
        );
      })}
      <br />
      <br />
      <br />
      <SidebarTabs
        onClick={() => {
          sessionStorage.clear();
        }}
        to={'/login'}
      >
        <div className='icon'>
          <FaSignOutAlt />
        </div>
        <p>Logout</p>
      </SidebarTabs>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  height: calc(100vh - 64px);
  width: 250px;
  background: #057a07;
  padding: 4rem 1rem 0;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  .active {
    background: #e20b8c !important;

    p {
      color: #fff !important;
    }

    :hover {
      opacity: 0.7;
    }
  }
`;

const SidebarTabs = styled(Link)`
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 1em 1em 1em 0.8em;
  cursor: pointer;
  text-decoration: none;

  .icon {
    width: 2em;
    height: 2em;
    margin-right: 1rem;
  }

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 23px;
    letter-spacing: 0.0015em;
    color: #666666;
    margin: 0;
    padding: 0;
  }

  :hover {
    opacity: 0.7;
    background: #efefef;
  }
`;

const sidebarTabs = [
  {
    id: 1,
    name: 'Overview',
    icon: <FaBuffer />,
    link: '/dashboard',
  },
  {
    id: 2,
    name: 'Account',
    icon: <FaWallet />,
    link: '/account',
  },
  {
    id: 3,
    name: 'Transfers',
    icon: <FaExchangeAlt />,
    link: '/transfers',
  },
];
