import React from 'react';
import styled from 'styled-components';
import { FaChevronCircleLeft } from 'react-icons/fa';

const Content = (props) => {
  return <Container>{props.content}</Container>;
};

export default Content;

const Container = styled.div`
  position: relative;
  top: 64px;
  left: 250px;
  width: calc(100vw - 250px);
  height: -webkit-calc(100% - 64px);
  height: -moz-calc(100% - 64px);
  min-height: calc(100vh - 64px);
  background: #efefef;
  padding: 2rem 3rem;
  color: #666666;
  overflow-x: hidden !important;
`;

export const BackArrow = styled(FaChevronCircleLeft)`
  cursor: pointer;

  :hover {
    transform: scale(1.05);
  }
`;
