import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  background: #fff;
  flex: 1;
`;

export const Profile = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Avatar = styled.Image`
  width: 68px;
  height: 68px;
  border-radius: 50px;
`;

export const Welcome = styled.View`
  flex: 1;
  margin: 0 10px;
`;
export const WelcomeText = styled.Text`
  color: #666666;
  font-size: 14px;
`;
export const WelcomeTextUsername = styled.Text`
  color: #444444;
  font-size: 22px;
  font-weight: bold;
`;

export const DeliveryMenu = styled.View`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 15px;
`;
export const MenuTitle = styled.Text`
  font-weight: bold;
  font-size: 22px;
  color: #444444;
`;

export const DeliveryOptions = styled.View`
  display: flex;
  flex-direction: row;
`;

export const DeliveryOption = styled.Text`
  margin-left: 10px;
  font-weight: bold;
  color: ${props => (props.deliveryType ? '#7D40E7' : '#999999')};
  border-style: solid;
  border-bottom-color: ${props =>
    props.deliveryType ? '#7D40E7' : 'transparent'};
  border-bottom-width: 1px;
`;

export const DeliveryList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 5 },
})``;
