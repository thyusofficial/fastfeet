import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
`;

export const Label = styled.label`
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  > strong {
    font-size: 16px;
    color: #ddd;
  }
  border: 2px dashed #ddd;
  border-radius: 50%;

  > img {
    border-radius: 50%;
    object-fit:cover;
    width:100%;
    height:100%;
  }

  > input {
    display: none;
  }
`;
