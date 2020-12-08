import React from 'react';
import styles from './Table.module.scss';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';

const tableContent = [
  {
    hour: '9:00',
    tables: [
      { id: 1, status: 'free' },
      { id: 2, status: 'free' },
      { id: 3, status: 'booked' },
      { id: 4, status: 'free' },
    ],
  },
  {
    hour: '9:30',
    tables: [
      { id: 1, status: 'free' },
      { id: 2, status: 'free' },
      { id: 3, status: 'booked' },
      { id: 4, status: 'free' },
    ],
  },
  
  {
    hour: '10:00',
    tables: [
      { id: 1, status: 'booked' },
      { id: 2, status: 'booked' },
      { id: 3, status: 'booked' },
      { id: 4, status: 'free' },
    ],
  },
  {
    hour: '10:30',
    tables: [
      { id: 1, status: 'event' },
      { id: 2, status: 'free' },
      { id: 3, status: 'free' },
      { id: 4, status: 'free' },
    ],
  },
  {
    hour: '11:00',
    tables: [
      { id: 1, status: 'free' },
      { id: 2, status: 'event' },
      { id: 3, status: 'booked' },
      { id: 4, status: 'event' },
    ],
  },
  {
    hour: '11:30',
    tables: [
      { id: 1, status: 'free' },
      { id: 2, status: 'booked' },
      { id: 3, status: 'booked' },
      { id: 4, status: 'free' },
    ],
  },
  {
    hour: '12:00',
    tables: [
      { id: 1, status: 'free' },
      { id: 2, status: 'free' },
      { id: 3, status: 'booked' },
      { id: 4, status: 'free' },
    ],
  },
  {
    hour: '12:30',
    tables: [
      { id: 1, status: 'free' },
      { id: 2, status: 'free' },
      { id: 3, status: 'booked' },
      { id: 4, status: 'free' },
    ],
  },
  {
    hour: '13:00',
    tables: [
      { id: 1, status: 'free' },
      { id: 2, status: 'free' },
      { id: 3, status: 'booked' },
      { id: 4, status: 'free' },
    ],
  },
  {
    hour: '13:30',
    tables: [
      { id: 1, status: 'free' },
      { id: 2, status: 'free' },
      { id: 3, status: 'booked' },
      { id: 4, status: 'free' },
    ],
  },
  {
    hour: '14:00',
    tables: [
      { id: 1, status: 'free' },
      { id: 2, status: 'free' },
      { id: 3, status: 'booked' },
      { id: 4, status: 'free' },
    ],
  },
];

const renderActions = status => {
  switch (status) {
    case 'free':
      return (
        <Button>Free</Button>
      );
    case 'booked':
      return (
        <Button>Booked</Button>
      );
    case 'event':
      return (
        <Button>Event</Button>
      );
    default:
      return null;
  }
};

const TableView = () => {
  return (
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Hours</TableCell>
            <TableCell>Table 1 </TableCell>
            <TableCell>Table 2 </TableCell> 
            <TableCell>Table 3 </TableCell> 
            <TableCell>Table 4 </TableCell>     
          </TableRow>
        </TableHead>
        <TableBody> 
          {tableContent.map((table) => {
            return (
              <TableRow key={table.hour}>
                <TableCell>{table.hour}</TableCell> 
                {table.tables.map((singleTable) => {
                  return (
                    <TableCell key={singleTable.id}>{renderActions(singleTable.status)}</TableCell>
                  );
                })}    
              </TableRow> 
            );
          })} 
        </TableBody>
      </Table>
    </Paper>
  );
};

export default TableView;