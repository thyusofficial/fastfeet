import styled from 'styled-components';
import Modal from 'react-modal';

export const Container = styled.div`
  button {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 15px;
    margin: 15px 0;
    background: transparent;
    border: 0;

    svg {
      margin-right: 7px;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const DeliveryModal = styled(Modal)`
  position: fixed;
  width: 450px;
  top: calc(50% - 225px);
  left: calc(50% - 225px);
  background: #fff;
  padding: 15px;
  border: 1px solid #707070;
  border-radius: 4px;

  div {
    margin: 10px 0;
    display: flex;
    flex-direction: column;

    img {
      padding: 5px 10px;
    }
  }
`;
