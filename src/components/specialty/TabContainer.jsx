import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles';
export class TabContainer extends PureComponent {
  static propTypes = {
    tabIndex: PropTypes.number
  }



  render() {
    const { tabIndex, tabList, classes } = this.props
    const active = tabList[tabIndex]
    return (
        <Paper style={{ padding: '25px 10px', marginTop: 5 }} elevation={4}>
          <Typography type="headline" className={classes.title} component="h3">
            {active.title}
          </Typography>
          <Typography className={classes.description} component="p">
            {active.description}
          </Typography>
        </Paper>
    )
  }
}

const mapStateToProps = ({ home }) => ({
  tabList: home.list
})

const mapDispatchToProps = {
  
}

const styles = theme => ({
  title: {
    textAlign: 'center',
    marginBottom: 30
  },
  description: {
    letterSpacing: 0.4,
    wordSpacing: 5,

  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TabContainer))
