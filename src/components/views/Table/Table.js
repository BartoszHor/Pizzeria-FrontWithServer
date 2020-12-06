import React from 'react';
import styles from './Table.module.scss';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';


const Table = () => {
  return (
    <div className={styles.component}>
      <h2>Table view</h2>
      <Link
        to={`${process.env.PUBLIC_URL}/table/booking/new`}     
      >
        <Button> New Booking </Button>
       
      </Link>
      <Link
        to={`${process.env.PUBLIC_URL}/table/booking/:id`}     
      >
        <Button> Booking </Button>
       
      </Link>
      <Link
        to={`${process.env.PUBLIC_URL}/table/events/new`}     
      >
        <Button> New Event </Button>
       
      </Link>
      <Link
        to={`${process.env.PUBLIC_URL}/table/events/:id`}     
      >
        <Button> Event </Button>
       
      </Link>
    </div>
  );
};

export default Table;