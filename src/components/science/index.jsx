import React, { PureComponent } from 'react'
import WorkList from './work_list'
import RootUI from '../modules/rootmain'

export default class ScienceWork extends PureComponent {
  render() {
    return (
      <RootUI>
        <WorkList />
      </RootUI>
    )
  }
}
