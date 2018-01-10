import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Input, { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import { FormControl, FormHelperText } from 'material-ui/Form'
import Select from 'material-ui/Select'
import Icon from 'material-ui/Icon'
import Button from 'material-ui/Button'
export class ControlPanel extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    }
    state = {
        course: '',
        day_of_week: '',
        group: ''
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const { classes } = this.props
        return (
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography type="title" color="inherit">
                        Дізнатись розклад легко
                    </Typography>
                    <form autoComplete="off" className={classes.form}>
                        <FormControl className={classes.select}>
                            <InputLabel htmlFor="course-simple">Оберіть курс</InputLabel>
                            <Select
                                autoWidth
                                value={this.state.course}
                                onChange={this.handleChange}
                                input={<Input name="course" id="course-simple" />}
                            >
                                <MenuItem value="">
                                    <em>Немає</em>
                                </MenuItem>
                                <MenuItem value={1}>Перший</MenuItem>
                                <MenuItem value={2}>Другий</MenuItem>
                                <MenuItem value={3}>Третій</MenuItem>
                                <MenuItem value={4}>Четвертий</MenuItem>
                                <MenuItem value={5}>П'ятий</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.select}>
                            <InputLabel htmlFor="day_of_week-simple">Оберіть день</InputLabel>
                            <Select
                                autoWidth
                                value={this.state.day_of_week}
                                onChange={this.handleChange}
                                input={<Input name="day_of_week" id="day_of_week-simple" />}
                            >
                                <MenuItem value="">
                                    <em>Немає</em>
                                </MenuItem>
                                <MenuItem value={1}>Понеділок</MenuItem>
                                <MenuItem value={2}>Вівторок</MenuItem>
                                <MenuItem value={3}>Середа</MenuItem>
                                <MenuItem value={4}>Четверг</MenuItem>
                                <MenuItem value={5}>П'ятниця</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.select}>
                            <InputLabel htmlFor="group-simple">Оберіть Группу</InputLabel>
                            <Select
                                autoWidth
                                value={this.state.group}
                                onChange={this.handleChange}
                                input={<Input name="group" id="group-simple" />}
                            >
                                <MenuItem value="">
                                    <em>Немає</em>
                                </MenuItem>
                                <MenuItem value={1}>ІМ</MenuItem>
                                <MenuItem value={2}>М</MenuItem>
                                <MenuItem value={3}>АТ</MenuItem>
                                <MenuItem value={4}>ТТ</MenuItem>
                            </Select>
                        </FormControl>
                        <Button className={classes.button} raised color="primary">
                            <Icon className={classes.rightIcon}>Дізнатись</Icon>
                        </Button>
                    </form>
                </Toolbar>
            </AppBar>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel)
