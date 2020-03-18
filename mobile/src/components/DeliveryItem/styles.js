import styled from 'styled-components/native';

export const Container = styled.View`
  border: 1px solid #eee;
  border-radius: 4px;
  background: #ffffff;
  padding-top: 15px;
  margin: 10px 0 20px;
`;

export const ItemHeader = styled.View`
  padding: 0 15px;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const HeaderText = styled.Text`
  margin-left: 10px;
  font-size: 16px;
  color: #7d40e7;
  font-weight: bold;
`;

export const ItemFooter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #f8f9fd;
  padding: 20px;
`;

export const ItemDetail = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ItemDetailTitle = styled.Text`
  font-size: 12px;
  color: #999999;
  font-weight: bold;
`;

export const ItemDetailText = styled.Text``;

export const Details = styled.Text`
  color: #7d40e7;
  font-weight: bold;
`;
