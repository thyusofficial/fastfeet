import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Background = styled.View`
  flex: 1;
  background: #7d40e7;
`;

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const TextInput = styled(Input).attrs({
  placeholderTextColor: 'rgba(153, 153, 153,1)',
})`
  background: #fff;
  margin: 30px 0 15px;
  height: 45px;
  border-radius: 4px;
  padding: 0 15px;
  align-self: stretch;
`;

export const SubmitButton = styled(Button)`
  background: #82bf18;
  align-self: stretch;
`;
