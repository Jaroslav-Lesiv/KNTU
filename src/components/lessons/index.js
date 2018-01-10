import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RootUI from '../modules/rootmain'
import BasicTable from './lessons_table'
import ControlPanel from './control_panel'
import { withStyles } from 'material-ui/styles';

const mapStateToProps = ({ }) => ({
});

const mapDispachToProps = dispatch => bindActionCreators({
}, dispatch);

class Lessons extends Component {
  
      render() {
        const { classes } = this.props
        return (
          <RootUI>
              <ControlPanel classes={classes} />
              <BasicTable />
          </RootUI>
        );
      }
}


const styles = theme => ({
  form: {
    margin: '0 15px 0 auto',
    display: 'flex',
    alignItems: 'center'
  },
  select: {
    margin: '0 15px',
    minWidth: 150
  }

});

export default connect(mapStateToProps, mapDispachToProps)(withStyles(styles)(Lessons))
