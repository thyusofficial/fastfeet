import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 25px 0;

  h1 {
    font-weight: bold;
    color: #444;
  }

  div div {
    display: flex;
    justify-content: space-between;
  }
`;
