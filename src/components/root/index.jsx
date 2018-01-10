import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { Switch, Route } from 'react-router-dom';
import HomeUI from '../home';
import Lessons from '../lessons';
import ScienceWork from '../science'
import HelpUI from '../help';
import Colective from '../teachers/index';
import NotFound from '../notfound'
import User from '../user'
import SpecialtyUI from '../specialty'

class RootRouter extends PureComponent {
    state = {
        hasError: false
    }

    componentDidCatch(error, inorm) {

    }

    render() {
        return (
                <Switch>
                    <Route path='/' exact component={HomeUI} />
                    <Route path='/specialty' exact component={SpecialtyUI} />
                    <Route path='/lessons' component={Lessons} />
                    <Route path='/science' component={ScienceWork} />
                    <Route path='/teachers' component={Colective} />
                    <Route path='/help' component={HelpUI} />
                    <Route path='/user' component={User} />
                    <Route path='*' component={NotFound} />
                </Switch>
        )
    }
}
export default withRouter(RootRouter)
