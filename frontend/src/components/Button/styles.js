import styled from 'styled-components';

export const MainButton = styled.button`
  height: 36px;
  border: 0;
  border-radius: 4px;
  background: ${props => props.background};
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 15px;
  margin: 5px;
`;
