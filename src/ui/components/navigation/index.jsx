import styled, { keyframes } from 'styled-components';
import React, { Component } from 'react';
import { color, size } from '../../variables';

export const NavigationUI = styled.div`
    min-height: ${size.header.default};
    width: 100%;
    display: flex;
    align-items: center;
    box-shadow: 1px 0 10px rgba(0,0,0,.2);
    justify-content: center;
    background-color: ${color.light}
`

export const SearchUI = styled.input.attrs({
    type: 'text',
    placeholder: props => props.placeholder || 'Type to search'
})`
    width: 100%;
    max-width: 450px;
    border: none;
    box-shadow: 0 0 3px rgba(0,0,0,.3);
    padding-left: ${size.input.paddingLeft};
    height: 30px;
    border-radius: 5px;
    color: ${color.textColor};
`