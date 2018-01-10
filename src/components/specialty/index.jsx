import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RootUI from '../modules/rootmain'
import TabsList from './spec'
import { withStyles } from 'material-ui/styles';

const mapStateToProps = ({ }) => ({
});

const mapDispachToProps = dispatch => bindActionCreators({
}, dispatch);

class SpecialtyUI extends PureComponent {


  render() {
    const { classes } = this.props
    return (
      <RootUI>
        <TabsList classes={classes} />
      </RootUI>
    );
  }
}

const styles = theme => ({
  tabs: {
    minHeight: 95 
  },
  title: {
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: 500,
    
  }

});

export default connect(mapStateToProps, mapDispachToProps)(withStyles(styles)(SpecialtyUI))
