import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { user } from './actions'
import {
    Wrapper,
    Main
} from './ui'
import { LoadingModal } from './components/modules/modal'
import Navigation from './components/navigation'
import Auth from './components/auth'
import Header from './components/header'
import RootRouter from './components/root'
import { withRouter } from 'react-router'

const mapStateToProps = ({ user, loading }) => ({
    isLogin: user.isLogin,
    isLoader: loading.isLoader
})

const mapDispachToProps = dispatch => bindActionCreators({
    checkUser: user.checkUser,
}, dispatch)

class App extends PureComponent {

    componentWillMount = () => {
        this.props.checkUser()
    }

    render() {
        return (
            <Wrapper>
                <Header />
                <Main>
                    <Navigation />
                    <RootRouter />
                    {this.props.isLoader && <LoadingModal />}
                </Main>
                <Auth />
            </Wrapper>
        )
    }
}
export default withRouter(connect(mapStateToProps, mapDispachToProps)(App))
