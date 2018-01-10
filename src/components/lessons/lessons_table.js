import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(name, start, teacher, lessons_name, end, _break) {
  id += 1;
  return { id, name, start, teacher, lessons_name, end, _break};
}

const data = [
  createData('Перша', '08:30', 'Лесів Я.І.' , 'Програмування', '09:50', '15'),
  createData('Друга', '10:05', '', '', '11:25', '15'),
  createData('Третя', '11:40', '', '', '13:00', '20'),
  createData('Четверта', '13:20', '', '', '14:40', '15'),
  createData('П`ята', '14:55', '', '', '16:15', '15'),
];

function BasicTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Пара</TableCell>
            <TableCell numeric>Початок</TableCell>
            <TableCell numeric>Назва</TableCell>
            <TableCell numeric>Викладач</TableCell>            
            <TableCell numeric>Кінець</TableCell>
            <TableCell numeric>Перерва</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell>{n.name}</TableCell>
                <TableCell numeric>{n.start}</TableCell>
                <TableCell numeric>{n.teacher}</TableCell>                
                <TableCell numeric>{n.lessons_name}</TableCell>
                <TableCell numeric>{n.end}</TableCell>
                <TableCell numeric>{n._break}хв.</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

BasicTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicTable);