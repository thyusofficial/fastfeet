import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  text-align: center;

  form {
    background: #fff;
    padding: 60px 30px;
    display: flex;
    flex-direction: column;

    img {
      margin-bottom: 30px;
    }

    label {
      margin: 0 0 10px;
      display: flex;
      flex-direction: column;
      text-transform: uppercase;
      font-weight: bold;
      color: #444444;
      text-align: start;
    }

    input {
      border: 2px solid #dddddd;
      border-radius: 4px;
      height: 45px;
      padding: 0 15px;
      margin: 10px 0;
      transition: border 0.5s;

      &::placeholder {
        color: #999999;
        font-size: 16px;
      }

      &:focus {
        border: 2px solid #7d40e7;
      }
    }

    span {
      color: #ff2828;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 45px;
      background: ${lighten(0.03, '#7d40e7')};
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      border-radius: 4px;
      border: 0;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7d40e7')};
      }
    }
  }
`;
