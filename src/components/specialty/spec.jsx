import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import PhoneIcon from 'material-ui-icons/Phone';
import FavoriteIcon from 'material-ui-icons/Favorite';
import PersonPinIcon from 'material-ui-icons/PersonPin';
import HelpIcon from 'material-ui-icons/Help';
import ShoppingBasket from 'material-ui-icons/ShoppingBasket';
import TabContainer from './TabContainer'

export class TabsList extends PureComponent {
    static propTypes = {
        classes: PropTypes.object
    }

    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props
        const { value } = this.state;

        return (
            <div>
                <AppBar key={1} position="static" style={{ maxHeight: 'min-content' }} color="default">
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        scrollable
                        scrollButtons="on"
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        <Tab className={classes.tabs} label="Прикладна механіка" icon={<PhoneIcon />} />
                        <Tab className={classes.tabs} label="Автомобільний транспорт" icon={<FavoriteIcon />} />
                    </Tabs>
                </AppBar>
                <TabContainer key={2} tabIndex={value} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(TabsList)
