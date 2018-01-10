import React, { PureComponent } from 'react'
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loading } from '../../../actions/index';

export class RootUI extends PureComponent {
    static propTypes = {
        classes: PropTypes.object
    }

    componentDidMount = () => {
        this.props.hideLoader()
    }

    componentWillUnmount = () => {
        this.props.showLoader()
    }

    render() {
        const { classes, children } = this.props
        return (
            <Grid container spacing={0} className={classes.root}>
                {children}
            </Grid>
        )
    }
}


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    showLoader: loading.loader.show,
    hideLoader: loading.loader.hide,
}



const styles = theme => ({
    root: {
        paddingTop: 15,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 30,
        // overflowY: 'overlay',
        overflowX: 'hidden',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        position: 'relative'
    },

});


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RootUI))
