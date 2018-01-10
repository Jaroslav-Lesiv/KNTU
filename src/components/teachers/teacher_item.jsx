import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import { connect } from 'react-redux'
import { teachers } from '../../actions/teachers'
const styles = theme => ({
  card: {
    width: '100%',
    margin: '10px auto'
  },
  media: {
    height: 300,
    width: 300,
    backgroundSize: 'contain',

  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  flexGrow: {
    flex: '1 1 auto',
  },
});

class Teacher extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  handleLike = () => {
    const id = this.props.teacher.id
    this.props.setLike({ id, user_name: this.props.user_name})
  }

  render() {
    const { classes, teacher } = this.props
    const { firstname, middlename, lastname, image, role, short_description, full_description, id } = teacher
    return (
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                {firstname.charAt(0)}
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={`${firstname} ${middlename} ${lastname}`}
            subheader="September 14, 2016"
          />
          <CardMedia
            className={classes.media}
            image={`images/uploads/teachers/${image}`}
            title={role}
          />
          <CardContent>
            <Typography component="p">
              {short_description}
            </Typography>
          </CardContent>
          <CardActions disableActionSpacing>
            <IconButton onClick={this.handleLike} aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <div className={classes.flexGrow} />
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph type="body2">
                Method:
              </Typography>
              <Typography paragraph>
                {full_description}
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
    );
  }
}


const mapStateToProps = ({ user }) => ({
  user_name: user.profile.name
})

const mapDispatchToProps = {
  setLike: teachers.teacher.setLike
}


Teacher.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Teacher))