import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    changeTableStatus: PropTypes.func,
    tables: PropTypes.object,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.node,
    }),
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderStatus(id, status){
    console.log(id, status);
    const {changeTableStatus} = this.props;
    switch (status) {
      case 'free':
        status = 'thinking';
        changeTableStatus(id, status);
        break;      
      case 'thinking':
        status = 'ordered';
        changeTableStatus(id, status);
        break;
      case 'ordered':
        status = 'prepared';
        changeTableStatus(id, status);
        break;
      case 'prepared':
        status = 'delivered';
        changeTableStatus(id, status);
        break;
      case 'delivered':
        status = 'paid';
        changeTableStatus(id, status);
        break;
      case 'paid':
        status = 'free';
        changeTableStatus(id, status);
        break;
      default:
        return null;
    }
  }

  renderActions(row){
    let id  = row.id;
    let status = row.status;

    switch (status) {
      case 'free':
        return (
          <>
            <Button onClick={() => this.renderStatus(id, status)}>thinking</Button>
            <Button onClick={() => this.renderStatus(id, status)}>new order</Button>
          </>
        );
      case 'thinking':
        return (
          <Button onClick={() => this.renderStatus(id, status)}>new order</Button>
        );
      case 'ordered':
        return (
          <Button onClick={() => this.renderStatus(id, status)}>prepared</Button>
        );
      case 'prepared':
        return (
          <Button onClick={() => this.renderStatus(id, status)}>delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick={() => this.renderStatus(id, status)}>paid</Button>

        );
      case 'paid':
        return (
          <Button onClick={() => this.renderStatus(id, status)}>free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables, changeTableStatus } = this.props;

    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;