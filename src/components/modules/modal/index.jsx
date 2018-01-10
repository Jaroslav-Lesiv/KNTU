import React, { Component } from 'react';
import styled from 'styled-components'
import {
    BackDropUI,
    ModalUI,
    ModalTitle,
    ModalBody,
    ModalNav,
    HiddenSubmit
} from '../../../ui';
import { CircularProgress } from 'material-ui/Progress';
import Button from 'material-ui/Button';
import ReactDOM from 'react-dom';

class Modal extends Component {

    state = {
        isShowModal: null
    }

    componentWillMount = () => {
        this.root = document.createElement('div');
        document.body.appendChild(this.root)
    }

    componentWillUnmount = () => {
        this.hideModal()
    }

    hideModal = () => {
        document.body.removeChild(this.root)
    }

    render() {
        const { title, children, accessBtn, cancelBtn, accessFunc, cancelFunc, accessBtnTxt, cancelBtnTxt, onSubmit, isSubmit } = this.props
        return (
            ReactDOM.createPortal(
                <div>
                    <BackDropUI onClick={cancelFunc || this.hideModal} />
                    <ModalUI>
                        <ModalTitle>{title}</ModalTitle>
                        <ModalBody>
                            <form onSubmit={onSubmit} style={{ margin: '0 auto' }}>
                                <div>{children}</div>
                                {isSubmit ? <HiddenSubmit /> : null}
                            </form>
                        </ModalBody>
                        <ModalNav>
                            {accessBtn && <Button onClick={cancelFunc || this.hideModal} raised color="accent">
                                {cancelBtnTxt}
                            </Button>}
                            {cancelBtn && <Button raised color="primary" onClick={accessFunc || this.hideModal}>{accessBtnTxt}</Button>}
                        </ModalNav>
                    </ModalUI>
                </div>, this.root
            )

        )
    }
}
export default Modal

const MutableCircularProgress = styled(CircularProgress) `
  position: ${ ({ position }) => position || 'absolute'};
  left: calc(50% - ${ ({ size }) => size / 2}px);
  top: calc(50% - ${ ({ size }) => size / 2}px);
  z-index: 1106;
`
export class LoadingModal extends Component {
    render() {
        return (
            <div>
                <BackDropUI position="absolute" />
                <MutableCircularProgress size={70} />
            </div>
        )
    }
}
