import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Work from './work_item'
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
export class Teachers extends PureComponent {
  static propTypes = {
    teachers: PropTypes.array
  }

  componentDidMount = () => {
      // load teacher list from api
  }

  render() {
    const { work_list } = this.props
    return [
      <AppBar key={'a'} position="static" color="default">
        <Toolbar>
        <Typography type="headline"  component="h1">
          Наукова діяльність
        </Typography>
        </Toolbar>
      </AppBar>, 
      <List>
        {work_list.map( (work_item, index) => ([
            <Work key={index} work={work_item} />,
            <Divider key={`w_${index}`} inset />
        ]))}
    </List>
      
    ]
  }
}

const mapStateToProps = ({ works }) => ({
  work_list: works.list,
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Teachers)
