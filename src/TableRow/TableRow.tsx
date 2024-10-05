import React from 'react';
import styled from 'styled-components';
import { TableRowProps } from './TableRow.types';

const StyledTableRow = styled.th<{ disabled?: boolean }>`
  padding: 10px;
  background-color: ${(props) => (props.disabled ? 'grey' : '#f2f2f2')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
`;

const TableRow: React.FC<TableRowProps> = ({ disabled, children }) => {
  return <StyledTableRow disabled={disabled}>{children}</StyledTableRow>;
};

export default TableRow;
