import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from '../Table/Table';
import TableHeader from './TableHeader';
import TableRow from '../TableRow/TableRow';
import TableCell from '../TableCell/TableCell';
import TableFooter from '../TableFooter/TableFooter';

test('renders the table', () => {
  render(
    <Table>
      <thead>
        <TableRow>
          <TableHeader>Header</TableHeader>
        </TableRow>
      </thead>
    </Table>
  );
  const headerElement = screen.getByText(/Header/i);
  expect(headerElement).toBeVisible();
});
