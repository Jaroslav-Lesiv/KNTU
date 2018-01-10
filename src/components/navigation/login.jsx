import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import { auth } from '../../actions'

export class NavAuth extends PureComponent {
    static propTypes = {
        isLogin: PropTypes.bool
      }
    render() {
        const { isLogin, classControl } = this.props
        return (
            !isLogin ?
                <Button component={Link} className={classControl} to={'/'} onClick={this.props.showLoginModal}>Login</Button> :
                <Button component={Link} className={classControl} to={'/'} onClick={this.props.logOut}>Log Out</Button>
        )
    }
}

const mapStateToProps = ({ user }) => ({
    isLogin: user.isLogin,
})

const mapDispatchToProps = {
    logOut: auth.logOut,
    showLoginModal: auth.modal.showLoginModal
}

export default connect(mapStateToProps, mapDispatchToProps)(NavAuth)
