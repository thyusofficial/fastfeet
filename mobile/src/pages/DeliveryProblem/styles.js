import styled from 'styled-components/native';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View`
  background: #fff;
  flex: 1;
`;

export const Background = styled.View`
  height: 80px;
  background: #7d40e7;
  overflow: visible;
`;

export const Content = styled.View`
  margin-top: -60px;
`;

export const ProblemDescription = styled(Input).attrs({
  placeholderTextColor: '#999999',
  textAlignVertical: 'top',
})`
  background: #fff;
  margin: 0 15px;
  height: 300px;
  border-radius: 4px;
  padding: 5px 15px;
  align-self: stretch;
  border: 1px solid #eee;
`;

export const SubmitButton = styled(Button)`
  background: #7d40e7;
  align-self: stretch;
  margin: 15px;
`;
