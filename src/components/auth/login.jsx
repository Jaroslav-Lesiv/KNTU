import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { auth } from '../../actions'
import Modal from '../modules/modal'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
const mapStateToProps = ({ auth }) => ({
    errors: auth.login.errors
});

const mapDispachToProps = dispatch => bindActionCreators({
    hideLoginModal: auth.modal.hideLoginModal,
    toSign: auth.modal.showSignModal,
    login: auth.login.request.pending
}, dispatch);

const styles = theme => ({
  centerButton: {
    margin: '15px auto',
    display: 'flex',
  },
});

class Login extends Component {

    state = {
        name: '',
        password: ''
    };

    submitForm = (e) => {
        e.preventDefault();
        let data = {
            name: this.state.name,
            password: this.state.password
        };
        this.props.login(data)
    };

    toSign = () => {
        const { hideLoginModal, toSign } = this.props
        hideLoginModal()
        toSign()
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

    render() {
        const { errors, classes } = this.props
        return (
            <div>
                <Modal
                    title={'Вхід'}
                    accessBtnTxt={"Ввійти"}
                    cancelBtnTxt={"Назад"}
                    accessBtn
                    cancelBtn
                    cancelFunc={this.props.hideLoginModal}
                    accessFunc={this.submitForm}
                    onSubmit={this.submitForm}
                    isSubmit={true}>
                    <TextField
                        error={errors.name ? true : false}
                        id="name"
                        fullWidth={true}
                        label="Ім'я"
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                    />
                    <TextField
                        error={errors.password ? true : false}
                        id="password"
                        fullWidth={true}
                        label="Пароль"
                        type="password"
                        autoComplete="current-password"
                        onChange={this.handleChange('password')}
                        margin="normal"
                    />
                    <Button className={classes.centerButton} dense onClick={this.toSign}>
                        Створити новий аккаунт
                    </Button>
                </Modal>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispachToProps)(withStyles(styles)(Login))
