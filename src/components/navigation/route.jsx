import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { withRouter } from 'react-router';
import { t } from '../../trans/ua'

export class Route extends PureComponent {
  static propTypes = {
    route: PropTypes.string
  }

  state = {
      route: '',
  }
  componentDidMount() {
    const { location } = this.props
    const path = location.pathname.slice(1)
    if (!path.length) {
        this.setState({ route: 'Home' })
    } else this.setState({ route: path })
  }
  componentWillReceiveProps({ location }) {
    const path = location.pathname.slice(1)
    if (!path.length) {
        this.setState({ route: 'Home' })
    } else this.setState({ route: path })
  }

  render() {
    const { classes, location } = this.props
    const { route } = this.state
    return (
        <Typography type="title" color="inherit" className={classes.flex}>
            {location.pathname === '/' ? 'Головна' : t.header.nav[route] || 'Не знайдено'}
        </Typography>
    )
  }
}


const styles = theme => ({
    flex: {
      color: '#ffffff',
      width: 'max-content'
    },
  });
  

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Route)))
