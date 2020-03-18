import { Form } from '@unform/web';
import styled from 'styled-components';
import Input from '~/components/Input';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 900px;
`;

export const MainForm = styled(Form)`
  padding: 30px;
  background: #fff;
  display: flex;
  flex-direction: column;
`;

export const FormInput = styled(Input)`
  height: 36px;
  padding: 0 15px;
  margin: 10px 0;
`;
