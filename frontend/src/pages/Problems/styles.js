import styled from 'styled-components';

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
      }
    }
  }
`;
