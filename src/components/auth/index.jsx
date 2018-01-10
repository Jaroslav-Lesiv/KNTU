import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { auth } from '../../actions';
import Login from './login';
import Sign from './sign';

const mapStateToProps = ({ auth }) => ({
    isShowLogInModal: auth.modal.isShowLogInModal,
    isShowSignModal: auth.modal.isShowSignModal
});

const mapDispachToProps = dispatch => bindActionCreators({
    hideLoginModal: auth.modal.hideLoginModal
}, dispatch);

class Auth extends Component {

    render() {
		const { isShowLogInModal, isShowSignModal } = this.props
        return (
            <div>
                {isShowLogInModal && <Login />}
                {isShowSignModal && <Sign />}
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispachToProps)(Auth)
