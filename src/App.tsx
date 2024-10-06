import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button/Button'
import Card from './Card/Card'
import Table, { TableHeader, TableRow, TableCell, TableFooter } from './Table';
import RadioButton from './RadioButton';
import Label from './Label';
import Dropdown from './Dropdown';

function App() {
  return (
    <div className="App">
      <h1>UI Component Library</h1>

      <h2>Button Component</h2>
      <Button children={"This is a Button"} disabled={false} onClick={() => alert('Primary Button Clicked')} />
      <Button children={"This is a Button"} disabled={true} onClick={() => alert('Secondary Button Clicked')} />

      <h2>Card Component</h2>
      <Card children={"Card"} />

      <h2>Table</h2>
      <Table children={
        <>
          <TableHeader children={
            <>
              <TableCell children={"Column 1"} />
              <TableCell children={"Column 2"} />
              <TableCell children={"Column 3"} />
            </>
          } />
          <tbody>
            <TableRow children={
              <>
                <TableCell children={"Row 1"} />
                <TableCell children={"Row 2"} />
                <TableCell children={"Row 3"} />
              </>
            } />
          </tbody>
          <TableFooter children={"Footer"} />
        </>
      } />

      <h2>Radio Button</h2>
      <Label htmlFor='rbOption' children={"Select an Option"} />
      <RadioButton label='Option 1' checked={false} name='rbOption' value='1'  />
      <RadioButton label='Option 2' checked={true} name='rbOption' value='2'  />

      <h2>Dropdown</h2>
      {/* <Dropdown options={} /> */}

      <h2>Image</h2>

    </div>
  );
}

export default App;
