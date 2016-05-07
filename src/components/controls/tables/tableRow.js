import React from 'react';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
const TableRowView = React.createClass({
  propTypes: {
    index: React.PropTypes.number
    header: React.PropTypes.array.isRequired,
    data: React.PropTypes.object.isRequired
  },
  render() {
    const {
      index,
      header,
      data
    } = this.props;
    return (
      <TableRow style={{backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#E7EBEC', height: '30px'}}>
        {
          header.map(function(column, j){
            return (
              <TableRowColumn key={j}>{item[column.id]}</TableRowColumn>
            );
          })
        }
      </TableRow>
    );
  }
});
export default TableRowView;
