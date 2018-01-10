import React, { PureComponent } from 'react'
import Teachers from './teacher_list'
import RootUI from '../modules/rootmain'

export default class Colective extends PureComponent {
  render() {
    return (
      <RootUI>
        <Teachers />
      </RootUI>
    )
  }
}
