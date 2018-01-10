import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RootUI from '../modules/rootmain'
import About from './about'
import { withStyles } from 'material-ui/styles';
import Slider from '../modules/slider'
const mapStateToProps = ({ }) => ({
});

const mapDispachToProps = dispatch => bindActionCreators({
}, dispatch);

class HomeUI extends Component {


  render() {
    const { classes } = this.props
    return (
      <RootUI>
        <Slider />
        <About classes={classes} />
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
  },
  button_center: {
    margin: '0 auto'
  }

});

export default connect(mapStateToProps, mapDispachToProps)(withStyles(styles)(HomeUI))
