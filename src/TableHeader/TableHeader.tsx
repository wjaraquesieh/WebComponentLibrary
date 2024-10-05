import React from 'react';
import styled from 'styled-components';
import { TableHeaderProps } from './TableHeader.types';

const StyledTableHeader = styled.th<{ disabled?: boolean }>`
  padding: 10px;
  background-color: ${(props) => (props.disabled ? 'grey' : '#f2f2f2')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
`;

const TableHeader: React.FC<TableHeaderProps> = ({ disabled, children }) => {
  return <StyledTableHeader disabled={disabled}>{children}</StyledTableHeader>;
};

export default TableHeader;
