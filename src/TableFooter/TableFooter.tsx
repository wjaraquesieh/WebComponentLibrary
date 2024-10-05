import React from 'react';
import styled from 'styled-components';
import { TableFooterProps } from './TableFooter.types';

const StyledTableFooter = styled.th<{ disabled?: boolean }>`
  padding: 10px;
  background-color: ${(props) => (props.disabled ? 'grey' : '#f2f2f2')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
`;

const TableFooter: React.FC<TableFooterProps> = ({ disabled, children }) => {
  return <StyledTableFooter disabled={disabled}>{children}</StyledTableFooter>;
};

export default TableFooter;
