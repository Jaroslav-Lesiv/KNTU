import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import {
    MenuUi,
    Nav
} from '../../ui';
import Badge from 'material-ui/Badge';
import { t } from '../../trans/ua'
import NavItem from './navItem';

const mapStateToProps = ({ user }) => ({
    isLogin: user.isLogin,
})

const mapDispachToProps = dispatch => bindActionCreators({
}, dispatch)

class Navigation extends Component {

    render() {
        const { isLogin } = this.props
        const { home, science, teachers, enterprises, specialty, laboratory, lessons } = t.header.nav
        return (
            <MenuUi>
                <Nav>
                    <NavItem to='/' t={home} img={'./images/header/nav/home.svg'}/>
                    <NavItem to='/specialty' t={specialty} img={'./images/header/nav/students.svg'}/>
                    <NavItem to='/science' t={science} img={'./images/header/nav/science.svg'} />
                    <NavItem to='/teachers' t={teachers} img={'./images/header/nav/teacher.svg'} />
                    <NavItem to='/enterprises' t={enterprises} img={'./images/header/nav/enterprises.svg'} />
                    <NavItem to='/laboratory' t={laboratory} img={'./images/header/nav/laboratory.svg'} />
                    <NavItem to='/lessons' t={lessons} img={'./images/header/nav/calendar.svg'} />
                    {/* {isLogin && } */}
                </Nav>
            </MenuUi>
        )
    }
}
export default withRouter(connect(mapStateToProps, mapDispachToProps)(Navigation))
