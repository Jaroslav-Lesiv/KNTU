import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import { withRouter } from 'react-router';

class NotFound extends Component {

    render() {
        return (
            <Typography>
               <Link to="/">
                   <Button>
                        Back To Home
                    </Button>
               </Link>
                
            </Typography>
        )
    }
}
export default withRouter(NotFound)
