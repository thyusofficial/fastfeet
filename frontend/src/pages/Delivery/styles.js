import styled from 'styled-components';
import { Form } from '@unform/web';
import Input from '~/components/Input';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 900px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

export const MainForm = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  svg {
    position: absolute;
    margin-left: 10px;
    color: #999999;
  }
`;
export const FormInput = styled(Input)`
  height: 36px;
  padding-left: 30px;
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  text-align: center;
  border-collapse: separate;
  border-spacing: 0 15px;

  thead {
    font-weight: bold;
  }

  tbody {
    tr {
      background: #fff;

      td {
        padding: 15px;

        > div {
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            width: 35px;
            margin: 0 10px;
            border-radius: 50%;
          }
        }
      }
    }
  }
`;

export const Status = styled.span`
  width: 100%;
  background: #dff0df;
  border-radius: 25px;
  padding: 7px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${props => props.status.color};
  &::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${props => props.status.color};
    display: inline-block;
    margin: 0 10px;
  }
`;
