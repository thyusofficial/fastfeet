import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  background: #fff;
`;

export const Avatar = styled.Image`
  margin: 50px 0;
  width: 140px;
  height: 140px;
  border-radius: 70px;
  align-self: center;
`;

export const ProfileData = styled.View``;

export const ProfileLabel = styled.Text`
  /* margin: 5px 0; */
  font-size: 14px;
  color: #666666;
`;
export const ProfileText = styled.Text`
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: bold;
  color: #444444;
`;

export const LogoutButton = styled(Button)`
  margin-top: 20px;
  background: #e74040;
  align-self: stretch;
`;
