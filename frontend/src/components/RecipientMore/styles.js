import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  z-index: 0;
  background: none;
  border: 0;
  position: relative;
  z-index: 0;
`;

export const ActionList = styled.div`
  z-index: 1;
  position: absolute;
  width: 150px;
  left: calc(50% - 75px);
  top: calc(100% + 20px);
  background: #fff;
  border-radius: 4px;
  border: 1px solid #707070;
  display: ${props => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid #707070;
  }
`;

export const Action = styled.button`
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
`;
