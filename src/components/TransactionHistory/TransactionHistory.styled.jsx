import styled from '@emotion/styled';

export const Table = styled.table`
  margin:  0 auto;
  width: 600px;
  border-collapse: collapse;
  border-spacing: 0;
  border-radius: 5px;
  background-color: white;
  box-shadow: 2px 3px 14px 2px rgba(0, 0, 0, 0.41);
  overflow: hidden;
`;

export const TableHead = styled.tr`
  height: 40px;
  background-color: #7ee7f3;
  text-align: center;
  text-transform: uppercase;
  color: white;
  th {
    width: calc(100% / 3);
    :not(:last-child) {
      border-right: 1px solid #a5c3c7;
    }
  }
`;

export const TableItem = styled.tr`
  height: 40px;
  text-align: center;
  text-transform: capitalize;
  &:nth-child(even) {
    background-color: #a1c9ce;
  }
  td {
    :not(:last-child) {
      border-right: 1px solid #a1c5c9;
    }
  }
`;