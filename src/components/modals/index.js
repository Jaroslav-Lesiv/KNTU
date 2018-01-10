import React from 'react';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';
import { setTimeout } from 'core-js/library/web/timers';
import ReactDOM from 'react-dom';

function rand() {
    return Math.floor(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        position: 'absolute',
        width: 8 * 50,
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        border: '1px solid #e5e5e5',
        backgroundColor: '#fff',
        boxShadow: '0 5px 15px rgba(0, 0, 0, .5)',
        padding: 8 * 4,
    };
}

class SimpleModal extends React.Component {


    state = {
        open: false,
    };

    componentWillMount = () => {
        this.root = document.createElement('div');
        document.getElementById('modal-root').appendChild(this.root)
    }

    componentWillUnmount = () => {
        this.handleOpen()
    }

    handleOpen = () => {
        this.setState({ open: true })

    };

    handleClose = () => {
        this.setState({ open: false })
        setTimeout(() => document.getElementById('modal-root').removeChild(this.root), 1000)
    };

    render() {
        return (
            ReactDOM.createPortal(
                <div>
                    <Typography gutterBottom>Click to get the full Modal experience!</Typography>
                    <Button onClick={this.handleOpen}>Open Modal</Button>
                    <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={this.state.open}
                        onClose={this.handleClose}
                    >
                        <div style={getModalStyle()}>
                            <Typography type="title" id="modal-title">
                                Text in a modal
            </Typography>
                            <Typography type="subheading" id="simple-modal-description">
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
                        </div>
                    </Modal>
                </div>
            , this.root)
        )
    }
}

export default SimpleModal;