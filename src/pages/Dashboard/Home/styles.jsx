import styled from 'styled-components';

export default styled.div`
  width: 100%;

  p {
    margin-bottom: 2rem !important;
  }

  h3 {
    font-weight: bold;
    text-transform: uppercase;
  }

  .header {
    display: flex;
    width: 40%;
    justify-content: space-between;
    margin-bottom: 1rem;

    .balance__group {
      display: flex;
      gap: 1rem;

      b {
        color: grey;
      }
    }
  }

`;
