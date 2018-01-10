import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux'
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { size } from '../../ui/variables';
import NavAuth from './login';
import Route from './route'
import { blue } from 'material-ui/colors';
import { LinearProgress } from 'material-ui/Progress';

import { withRouter } from 'react-router';


const mapStateToProps = ({ loading }) => ({
    isRequestLoader: loading.isRequestLoader
});

const styles = theme => ({
  root: {
    width: '100%',
  },
    loader: {
        position: 'absolute',
        top: 0,
        width: '100%'
    },
  flex: {
    flex: 1,
    textTransform: 'capitalize'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
    appBar: {
        height: size.header.default,
        justifyContent: 'center',
        backgroundColor: 'grey',
        color: blue[900]
    },
    inputSearch: {
        marginTop: 0
    },
    formControl: {
        maxWidth: '350px',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    button: {
        position: 'absolute',
        right: 15,
        top: 'calc(50% - 12px)'
    },
    navAuth: {
        marginLeft: 'auto !important'
    }
});


class Navigation extends PureComponent {

    render() {
		const { classes, isRequestLoader } = this.props
        return (
            <div className={classes.root}>
                {isRequestLoader && <LinearProgress className={classes.loader}/> }
              <AppBar className={classes.appBar} position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Route />
                    <NavAuth classControl={classes.navAuth} />
                </Toolbar>
              </AppBar>
            </div>
        )
    }
}
export default withRouter(connect(mapStateToProps)(withStyles(styles)(Navigation)))
