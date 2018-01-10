import React from 'react';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import red from 'material-ui/colors/red';
import { connect } from 'react-redux'
import { Book } from 'material-ui-icons';
import { ButtonGlobalLink } from '../../ui'
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from 'material-ui/List';

import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import { teachers } from '../../actions/teachers'
const styles = theme => ({
  work_item: {
    width: '100%'
  }
});

class Work extends React.Component {

  render() {
    const { classes, work } = this.props
    const { title, date, link, author } = work
    return (
      <ListItem button className={classes.work_item}>
        <Avatar>
          <Book color='primary' />
        </Avatar>
        <ListItemText primary={title} secondary={author} />
        <ListItemSecondaryAction>
          <ButtonGlobalLink
            disabled={!link}
            color={link ? 'primary' : 'contrast'}
            color_link_text={'#ffffff'}
            to={link}
            raised={true}
            text={'Читати'} />
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}


const mapStateToProps = ({ user }) => ({
  user_name: user.profile.name
})

const mapDispatchToProps = {
  setLike: teachers.teacher.setLike
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Work))