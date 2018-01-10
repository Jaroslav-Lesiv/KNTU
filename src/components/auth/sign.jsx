import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { auth } from '../../actions';
import Modal from '../modules/modal';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';

const mapStateToProps = ({ auth }) => ({
    errors: auth.sign.errors
});

const mapDispachToProps = dispatch => bindActionCreators({
    hideSignModal: auth.modal.hideSignModal,
    showLoginModal: auth.modal.showLoginModal,
    sign: auth.sign.request.pending
}, dispatch);

const styles = theme => ({
  centerButton: {
    margin: '15px auto',
    display: 'flex',
  },
  option: {
    height: 35
  },
  group: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around'
  },
  optionwrap: {
      marginTop: 16,
      width: '100%'
  },
    inputWrap: {
        maxWidth: 380,
        margin: '0 auto'
    },
    input: {
        margin: '5px auto 5px',
        width: '100%'
}
});

class Sign extends Component {

    state = {
        firstname: '',
        lastname: '',
        name: '',
        gender: '',
        email: '',
        password: '',
        confirm_password: '',
        tel: '',
        showPassword: false,
        showConfirmPassword: false
    }
    setTel = (e) => {
        let value = e.target.value
        this.setState({ tel: value })
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

    toLogin = () => {
        this.props.hideSignModal()
        this.props.showLoginModal()
    }

    sign = (e) => {
        e.preventDefault();
        let data = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            name: this.state.name,
            gender: this.state.gender,
            email: this.state.email,
            password: this.state.password,
            confirm_password: this.state.confirm_password,
            tel: this.state.tel
        }
        this.props.sign(data)
    }

    render() {
        const { errors, classes } = this.props

        return (
            <div>
                <Modal
                    title={'Новий аккаунт'}
                    accessBtnTxt={"Створити"}
                    cancelBtnTxt={"Назад"}
                    accessBtn
                    cancelBtn
                    cancelFunc={this.props.hideSignModal}
                    accessFunc={this.sign}
                    onSubmit={this.sign}
                    isSubmit={true}>
                    <div className={classes.inputWrap}>
                        <TextField
                            className={classes.input}
                            error={errors.firstname ? true : false}
                            id="firstname"
                            label="Ім'я"
                            fullWidth={true}
                            onChange={this.handleChange('firstname')}
                            margin="normal"
                        />
                        <TextField
                            className={classes.input}
                            error={errors.lastname ? true : false}
                            id="lastname"
                            label="По батькові"
                            fullWidth={true}
                            onChange={this.handleChange('lastname')}
                            margin="normal"
                        />
                        <TextField
                            className={classes.input}
                            error={errors.name ? true : false}
                            required
                            id="name"
                            label="Нікнейм"
                            fullWidth={true}
                            onChange={this.handleChange('name')}
                            margin="normal"
                        />
                        <FormControl component="fieldset" required className={classes.optionwrap}>
                            <FormLabel component="legend">Стать</FormLabel>
                            <RadioGroup
                                aria-label="gender"
                                name="gender1"
                                className={classes.group}
                                value={this.state.gender}
                                onChange={this.handleChange('gender')}
                            >
                                <FormControlLabel value="male" className={classes.option} control={<Radio />} label="Чоловік" />
                                <FormControlLabel value="female" className={classes.option} control={<Radio />} label="Жінка" />
                                <FormControlLabel value="other" className={classes.option}  control={<Radio />} label="Таємниця" />
                            </RadioGroup>
                        </FormControl>
                        <TextField
                            className={classes.input}
                            error={errors.email ? true : false}
                            required
                            id="email"
                            label="Емаіл"
                            fullWidth={true}
                            onChange={this.handleChange('email')}
                            margin="normal"
                        />
                        <TextField
                            className={classes.input}
                            error={errors.tel  ? true : false}
                            value={this.state.tel}
                            id="phone"
                            label="Номер телефону"
                            fullWidth={true}
                            onChange={this.handleChange('tel')}
                            margin="normal"
                        />
                        <TextField
                            className={classes.input}
                            error={errors.password  ? true : false}
                            value={this.state.password}
                            id="password"
                            label="Пароль"
                            type="password"
                            fullWidth={true}
                            onChange={this.handleChange('password')}
                            margin="normal"
                        />
                        <TextField
                            className={classes.input}
                            error={errors.confirm_password  ? true : false}
                            value={this.state.confirm_password}
                            id="confirm_password"
                            label="Повторіть пароль"
                            type="password"
                            fullWidth={true}
                            onChange={this.handleChange('confirm_password')}
                            margin="normal"
                        />
                        <Button
                            dense className={classes.centerButton}
                            onClick={this.toLogin}>Вже маєте аккаунт?
                        </Button>  
                    </div>

                    
                </Modal>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispachToProps)(withStyles(styles)(Sign))
