import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 20px 0;
`;

export const StatusContainer = styled.View`
  padding: 0 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Line = styled.View`
  height: 1px;
  flex: 1;
  background: #7d40e7;
`;

export const Status = styled.View`
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background: ${props => (props.marked ? '#7d40e7' : '#fff')};
  border: 1px solid #7d40e7;
`;

export const TextContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 10px;
`;

export const StatusText = styled.Text`
  font-size: 10px;
  color: #999;
  text-align: center;
  flex: 1;
`;
