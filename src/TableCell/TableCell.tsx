import React from 'react';
import styled from 'styled-components';
import { TableCellProps } from './TableCell.types';

const StyledTableCell = styled.th<{ disabled?: boolean }>`
  padding: 10px;
  background-color: ${(props) => (props.disabled ? 'grey' : '#f2f2f2')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
`;

const TableCell: React.FC<TableCellProps> = ({ disabled, children }) => {
  return <StyledTableCell disabled={disabled}>{children}</StyledTableCell>;
};

export default TableCell;
