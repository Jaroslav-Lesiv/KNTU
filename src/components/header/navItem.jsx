import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom';
import {
    NavTitle,
    NavItems
} from '../../ui'

class NavItem extends Component {

    state = {
        isShowTitle: false
    }

    showTitle = () => {
        this.setState({ isShowTitle: true });
    }

    hideTitle = () => {
        this.setState({ isShowTitle: false });
    }

    render() {
        const { isShowTitle } = this.state
        const { to, t, children, img } = this.props
        return (
                    <NavItems img={img} onMouseEnter={this.showTitle} onMouseLeave={this.hideTitle}>
                        <NavLink to={to} exact activeClassName='active'>{children}</NavLink>
                        {isShowTitle && t && <NavTitle>{t}</NavTitle>}
                    </NavItems>
        )
    }
}

export default withRouter(NavItem)
