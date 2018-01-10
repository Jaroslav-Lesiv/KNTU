import styled, { keyframes } from 'styled-components';
import React, { Component } from 'react';
import { color } from '../../variables';

const showBackDrop = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`

const showModal = keyframes`
  from {  transform: translateX(1000px); }
  to {  transform: translateX(0); }
`

export const BackDropUI = styled.div`
  position: ${ ({ position }) => position || 'fixed' };
  opacity: 0;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(50,50,50,.5);
  animation: ${showBackDrop} 1s;
  animation-fill-mode: forwards;
  z-index: 1105;
`;

export const ModalUI = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  background: rgba(180,180,180,.8);
  padding: 50px 15px;
  overflow-y: overlay;
  transform: translateX(1000px);
  animation: ${showModal} 0.8s;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
  z-index: 1106;
`;

export const ModalTitle = styled.h3`
  font-size: 2.5em;
  width: 100%;
  text-align: center;
  color: ${color.dark};
  margin-bottom: 45px;

`;

export const ModalBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 0 auto;

`;

export const ModalNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 0 0 auto;
`;

export const Input = styled.input.attrs({
  placeholder: props => this.placeholder || '',
  type: props => props.type || 'text',
})`
  border: 1px solid ${props => props.error ? 'rgba(217, 30, 24,.3)' : color.primary};
  outline: none;
  padding-left: 15px;
  width: 100%;
  background-color: transparent;
  height: 35px;
  background-color: whitesmoke;
  margin: 15px auto;
  border-radius: 4px;
  box-shadow: ${props => props.error ? '0 0 10px rgba(217, 30, 24,.3)' : '0 0 10px rgba(50,50,50,.3)'};
}
`

export const HiddenSubmit = styled.input.attrs({
    type: 'submit',
    value: 'Submit'
})`
    visibility: hidden;
`

export const Label = styled.div`
  margin:
  display: inline-block;
  width: 100%;
`

export const ShortTitle = styled.p`
  font-size: 1.1em;
  color: ${color.dark};
  cursor: pointer;
  width: 100%;
  margin: 5px auto 20px;
  text-align: ${props => props.textAlign || 'left'}
`
