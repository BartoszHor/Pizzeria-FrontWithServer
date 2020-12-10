import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, tableChange } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchTables: () => dispatch(fetchFromAPI()),
    changeTableStatus: (id, status) => dispatch(tableChange(id, status)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);