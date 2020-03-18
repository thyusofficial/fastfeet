import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 30px;
  background: #fff;
`;

export const Content = styled.div`
  height: 64px;
  /* max-width: 900px; */
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      border-right: 1px solid #dddddd;
      padding-right: 5px;
    }

    button {
      color: #999999;
      background: transparent;
      border: 0;
      font-weight: bold;
      text-transform: uppercase;
      margin: 0 5px;

      &:hover {
        color: #444444;
        transition: color 0.5s;
      }
    }
  }
  aside {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-weight: bold;
    }

    button {
      color: #de3b3b;
      font-weight: 600;
      border: 0;
      background: none;
    }
  }
`;
