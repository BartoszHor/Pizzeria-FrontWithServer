import React, { useState } from 'react';
import styles from './Table.module.scss';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';
import { CgEventbrite } from 'react-icons/cg';
import { RiReservedFill, RiReservedLine } from 'react-icons/ri';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';



const tableContent = [
  {
    hour: '9:00',
    tables: [
      { id: 1, status: 'free', bookingId: null },
      { id: 2, status: 'free', bookingId: null },
      { id: 3, status: 'booked', bookingId: '1' },
      { id: 4, status: 'free', bookingId: null },
    ],
  },
  {
    hour: '9:30',
    tables: [
      { id: 1, status: 'free', bookingId: null },
      { id: 2, status: 'free', bookingId: null },
      { id: 3, status: 'booked', bookingId: '2' },
      { id: 4, status: 'free', bookingId: null },
    ],
  },
  
  {
    hour: '10:00',
    tables: [
      { id: 1, status: 'booked', bookingId: '3' },
      { id: 2, status: 'booked', bookingId: '4' },
      { id: 3, status: 'booked', bookingId: '5' },
      { id: 4, status: 'free', bookingId: null },
    ],
  },
  {
    hour: '10:30',
    tables: [
      { id: 1, status: 'event', bookingId: '101' },
      { id: 2, status: 'free', bookingId: null },
      { id: 3, status: 'free', bookingId: null },
      { id: 4, status: 'free', bookingId: null },
    ],
  },
  {
    hour: '11:00',
    tables: [
      { id: 1, status: 'free', bookingId: null },
      { id: 2, status: 'event', bookingId: '102' },
      { id: 3, status: 'booked', bookingId: '6' },
      { id: 4, status: 'event', bookingId: '103' },
    ],
  },
  {
    hour: '11:30',
    tables: [
      { id: 1, status: 'free', bookingId: null },
      { id: 2, status: 'booked', bookingId: '7' },
      { id: 3, status: 'booked', bookingId: '8' },
      { id: 4, status: 'free', bookingId: null },
    ],
  },
  {
    hour: '12:00',
    tables: [
      { id: 1, status: 'free', bookingId: null },
      { id: 2, status: 'free', bookingId: null },
      { id: 3, status: 'booked', bookingId: '9' },
      { id: 4, status: 'free', bookingId: null },
    ],
  },
  {
    hour: '12:30',
    tables: [
      { id: 1, status: 'free', bookingId: null },
      { id: 2, status: 'free', bookingId: null },
      { id: 3, status: 'booked', bookingId: '10' },
      { id: 4, status: 'free', bookingId: null },
    ],
  },
  {
    hour: '13:00',
    tables: [
      { id: 1, status: 'free', bookingId: null },
      { id: 2, status: 'free', bookingId: null },
      { id: 3, status: 'booked', bookingId: '11' },
      { id: 4, status: 'free', bookingId: null },
    ],
  },
  {
    hour: '13:30',
    tables: [
      { id: 1, status: 'free', bookingId: null },
      { id: 2, status: 'free', bookingId: null },
      { id: 3, status: 'booked', bookingId: '12' },
      { id: 4, status: 'free', bookingId: null },
    ],
  },
  {
    hour: '14:00',
    tables: [
      { id: 1, status: 'free', bookingId: null },
      { id: 2, status: 'free', bookingId: null },
      { id: 3, status: 'booked', bookingId: '13' },
      { id: 4, status: 'free', bookingId: null },
    ],
  },
];

const renderActions = (status, singleTable) => {
  switch (status) {
    case 'free':
      return (
        <Button component={Link} to={`${process.env.PUBLIC_URL}/table/booking/new`}><RiReservedLine/>Free</Button>
      );
    case 'booked':
      return (
        <Button component={Link} to={`${process.env.PUBLIC_URL}/table/booking/${singleTable.bookingId}`}><RiReservedFill/>Booked</Button>        
      );
    case 'event':
      return (
        <Button component={Link} to={`${process.env.PUBLIC_URL}/table/events/${singleTable.bookingId}`}><CgEventbrite/>Event</Button>
      );
    default:
      return null;
  }
};

const TableView = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className={styles.component}>
      <div className={styles.datepicker}>
        <DatePicker selected={startDate} onChange={date => {
          return setStartDate(date);
        }} />
      </div>
      <Paper>
        <Table>
          <TableHead component='thead'>
            <TableRow className={styles.tableRow}>
              <TableCell component='td' className={styles.table}>Hours</TableCell>
              <TableCell component='td' className={styles.table}>Table 1 </TableCell>
              <TableCell component='td' className={styles.table}>Table 2 </TableCell> 
              <TableCell component='td' className={styles.table}>Table 3 </TableCell> 
              <TableCell component='td' className={styles.table}>Table 4 </TableCell>     
            </TableRow>
          </TableHead>
          <TableBody> 
            {tableContent.map((table) => {
              return (
                <TableRow component='tr' key={table.hour}>
                  <TableCell className={styles.hour}>{table.hour}</TableCell> 
                  {table.tables.map((singleTable) => {
                    return (
                      <TableCell 
                        component='tr'
                        className={styles.link}
                        to={`${process.env.PUBLIC_URL}/table/booking/${singleTable.bookingId}`}
                        key={singleTable.id}>{renderActions(singleTable.status, singleTable)}
                      </TableCell>
                    );
                  })}    
                </TableRow> 
              );
            })} 
          </TableBody>
        </Table>
      </Paper>
    </div>
    
  );
};

export default TableView;