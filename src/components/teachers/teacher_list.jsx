import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Teacher from './teacher_item'
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
export class Teachers extends PureComponent {
  static propTypes = {
    teachers: PropTypes.array
  }

  componentDidMount = () => {
      // load teacher list from api
  }

  render() {
    const { teachers_list, sub_teachers_list } = this.props
    return [
      <AppBar key={'a'} position="static" color="default">
        <Toolbar>
        <Typography type="headline"  component="h1">
            Склад кафедри
        </Typography>
        </Toolbar>
      </AppBar>,
      teachers_list.map( (teachers_item, index) => (
            <Teacher key={`b_${index}`} teacher={teachers_item} />
        ) ),
      <AppBar key={'c'} position="static" color="default">
        <Toolbar>
        <Typography type="headline"  component="h1">
          Допоміжний персонал:
        </Typography>
        </Toolbar>
      </AppBar>,
      sub_teachers_list.map( (sub_teacher_item, index) => (
          <Teacher key={`d_${index}`} teacher={sub_teacher_item} />
      ) )
    ]
  }
}

const mapStateToProps = ({ teachers }) => ({
  teachers_list: teachers.teachers_list,
  sub_teachers_list: teachers.sub_teachers_list
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Teachers)
