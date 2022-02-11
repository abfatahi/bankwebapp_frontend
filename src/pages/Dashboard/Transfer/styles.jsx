import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden !important;

  p {
    margin-bottom: 2rem !important;
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const TransferContainer = styled.form`
  width: 40%;
  background: #fff;
  border-radius: 10px;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  // gap: 1.2rem;

  h3 {
    font-weight: bold;
  }

  p {
    font-size:0.8em;
    margin: 0 !important;
    padding: 0 !important;
  }

  .input__group {
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
