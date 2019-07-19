import React from 'react';
import { defaultProps } from './default-props';
import { propTypes } from './prop-types';
import MaterialTable from './material-table';
import { withStyles } from '@material-ui/core';
import * as ReactBdnd from 'react-beautiful-dnd';

MaterialTable.defaultProps = defaultProps;
MaterialTable.propTypes = propTypes;

const styles = theme => ({
  paginationRoot: {
    width: '100%'
  },
  paginationToolbar: {
    padding: 0,
    width: '100%'
  },
  paginationCaption: {
    display: 'none'
  },
  paginationSelectRoot: {
    margin: 0
  }
});

export const resetDnDServerContext = ReactBdnd.resetServerContext;
export default withStyles(styles, { withTheme: true })(props => <MaterialTable {...props} ref={props.tableRef} />);
export * from './components';