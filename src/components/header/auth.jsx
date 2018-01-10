import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { auth, user } from '../../actions'
import Avatar from 'material-ui/Avatar';
import { withStyles } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import ButtonBase from 'material-ui/ButtonBase';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { MenuItem, MenuList } from 'material-ui/Menu';
import Grow from 'material-ui/transitions/Grow';
import Paper from 'material-ui/Paper';
import { Manager, Target, Popper } from 'react-popper';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';

import {
    AuthUI,
} from '../../ui'

const mapStateToProps = ({ user }) => ({
    isLogin: user.isLogin,
    profile: user.profile
})

const mapDispachToProps = dispatch => bindActionCreators({
    showLoginModal: auth.modal.showLoginModal,
    showSignModal: auth.modal.showSignModal,
    showUserModal: user.showUserModal,
}, dispatch)


const styles = theme => ({
    usericon: {
        backgroundColor: blue[100]
    },
    iconButton: {
        borderRadius: '50%',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    root: {
        display: 'flex',
      },
      popperClose: {
        pointerEvents: 'none',
      },
    bottom: {
        marginTop: 'auto'
    },
    link: {
        margin: '0 auto',
        cursor: 'pointer',
        textDecoration: 'none',
        
    }
    
});

class Auth extends Component {
    state = {
        isShowTitle: false,
        open: false
    }

    showTitle = () => {
        this.setState({ isShowTitle: true });
    }

    hideTitle = () => {
        this.setState({ isShowTitle: false });
    }

    showLoginModal = () => {
        this.setState({ open: false });
        this.props.showLoginModal()
    }
    showSignModal = () => {
        this.setState({ open: false });
        this.props.showSignModal()
    }

    showUserModal = () => {
        this.props.showUserModal()
    }
    
    handleClick = () => {
        this.setState({ open: true });
      };
    handleRequestClose = () => {
        this.setState({ open: false });
    };
    render() {
        const { open } = this.state
        const { isLogin, profile, classes } = this.props
        
        
        if (isLogin) return (
            <AuthUI>
              <Link to={'/user'} className={classes.link}>
                <ButtonBase className={classes.iconButton} aria-owns={this.state.open ? 'menu-list' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}>
                   <Avatar  className={classes.usericon} alt={profile.name || `User`} src={profile.logo ? profile.logo : null}>
                    {!profile.logo && profile.name ? profile.name.charAt(0) :
                        !profile.logo && !profile.name ? 'U' : null}
                    </Avatar>
                </ButtonBase>
              </Link>
               
            </AuthUI>
        )
        
        
        return (
                    <Manager className={classes.bottom}>
                      <Target>
                        <AuthUI>
                           <ButtonBase className={classes.iconButton} aria-owns={this.state.open ? 'menu-list' : null}
                                aria-haspopup="true"
                                onClick={this.handleClick}>
                               <Avatar  className={classes.usericon} alt={`User`}>U</Avatar>
                            </ButtonBase>
                        </AuthUI>
                      </Target>
                      <Popper
                        placement="bottom-start"
                        eventsEnabled={open}
                        className={classNames({ [classes.popperClose]: !open })}
                      >
                        <ClickAwayListener onClickAway={this.handleRequestClose}>
                          <Grow in={open} id="menu-list" style={{ transformOrigin: '0 0 0' }}>
                            <Paper>
                              <MenuList role="menu">
                                <MenuItem onClick={this.showLoginModal}>Login</MenuItem>
                                <MenuItem onClick={this.showSignModal}>Sign Up</MenuItem>
                              </MenuList>
                            </Paper>
                          </Grow>
                        </ClickAwayListener>
                      </Popper>
                    </Manager>
        )
    }
}

export default connect(mapStateToProps, mapDispachToProps)(withStyles(styles)(Auth))
