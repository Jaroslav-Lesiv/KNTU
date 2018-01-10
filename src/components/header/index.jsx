import React, { Component } from 'react';
import {
    HeaderUI,
    Logo
} from '../../ui';
import Navigation from './navigation';
import Auth from './auth';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

/**
 * 
 * 
 * @class Header
 * @extends {React.Component}
 */
class Header extends React.Component {

    render() {
        return (
            <HeaderUI>
                <Link to="/"><Logo background="./images/uploads/logo/LogoSample_ByTailorBrands2.jpg"/></Link>
                <Navigation />
                <Auth />
            </HeaderUI>
        )
    }
}

export default withRouter(Header)
