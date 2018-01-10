import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  UserInformUI,
  UserShortInform,
  UserInformHeader,
  UserLogoUI,
  InformList,
  InformListItem,
  Line,
  SmallBlock
} from '../../ui';
import Button from 'material-ui/Button';
import RootUI from '../modules/rootmain'
import Typography from 'material-ui/Typography';

export class User extends Component {
  static propTypes = {
  }

  state = {

  }

  componentDidMount = () => {
    const {profile, match, location, params} = this.props
    console.log(match, location, params)
    // if (profile.name !== )
  }

  render() {
    const {  } = this.props
    const inform = [
       {'age': '19'}
    ]
    return (
      <RootUI>
        <UserInformUI>
          <UserLogoUI>
            <Button color="primary">Edit</Button>
            <Button color="accent">Delete</Button>
          </UserLogoUI>
          <UserShortInform>
            <UserInformHeader>
              <Typography component={'h2'} type={'headline'}>Jaroslav Lesiv</Typography>
              <a href="mailto:jaroslav_lesiv@outlook.com">
                <Typography component={'p'} type={'subheading'}>Jaroslav-Lesiv@outlook.com</Typography>
              </a>
            </UserInformHeader>
            <InformList>
              {inform.map( (value, key) => ( <div>{`${key}: ${value}`}</div> ) )}
            </InformList>
            <Line />
          </UserShortInform>
        </UserInformUI>
        <SmallBlock />
        <SmallBlock />
        <SmallBlock />
      </RootUI>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  profile: user.profile
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
