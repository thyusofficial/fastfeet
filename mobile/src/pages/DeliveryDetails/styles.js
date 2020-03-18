import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  flex: 1;
`;

export const Background = styled.View`
  height: 80px;
  background: #7d40e7;
  overflow: visible;
`;

export const Details = styled.View`
  margin-top: -60px;
`;

export const Card = styled.View`
  background: #fff;
  padding: 15px;
  margin: 15px;
  border-radius: 4px;
  border: 1px solid #eee;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  color: #7d40e7;
  font-weight: bold;
  margin-left: 5px;
`;

export const Label = styled.Text`
  color: #999999;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const CardInfo = styled.Text`
  color: #666666;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const CardDates = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Date = styled.View``;

export const Actions = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* padding: 15px; */
  margin: 0 15px;
  background: #f8f9fd;
  border-radius: 4px;
  border: 1px solid #eee;
`;

export const Action = styled.TouchableOpacity`
  padding: 10px 15px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ActionText = styled.Text`
  text-align: center;
`;
