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

export const DeliveryTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  text-align: center;
  font-size: 24px;
`;

export const Content = styled.View`
  margin-top: -40px;
`;

export const ProblemList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingLeft: 15, paddingRight: 15 },
})``;

export const Problem = styled.View`
  background: #fff;
  border-radius: 4px;
  border: 1px solid #eee;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  padding: 0 15px;
  margin-bottom: 5px;
`;

export const ProblemTitle = styled.Text`
  color: #999999;
  font-size: 18px;
`;
export const ProblemDate = styled.Text`
  color: #c1c1c1;
  font-size: 16px;
`;
