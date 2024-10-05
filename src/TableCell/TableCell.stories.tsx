import React from 'react';
import { StoryFn, Meta } from '@storybook/react/types-6-0';
import Table from '../Table/Table';
import TableHeader from '../TableHeader/TableHeader';
import TableRow from '../TableRow/TableRow';
import TableCell from './TableCell';
import TableFooter from '../TableFooter/TableFooter';

export default {
  title: 'UI/Table',
  component: Table,
} as Meta;

export const Default: StoryFn = () => (
  <Table>
    <thead>
      <TableRow>
        <TableHeader>Header 1</TableHeader>
        <TableHeader>Header 2</TableHeader>
      </TableRow>
    </thead>
    <tbody>
      <TableRow>
        <TableCell>Cell 1</TableCell>
        <TableCell>Cell 2</TableCell>
      </TableRow>
    </tbody>
    <tfoot>
      <TableRow>
        <TableFooter>Footer 1</TableFooter>
        <TableFooter>Footer 2</TableFooter>
      </TableRow>
    </tfoot>
  </Table>
);
