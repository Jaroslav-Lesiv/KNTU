import React from 'react'
import styled from 'styled-components';
import { color, size } from '../../variables'
import Button from 'material-ui/Button';
export const Btn = styled.button`
    border: 0;
    border-radius: ${size.btn.borderRadius};
    cursor: pointer;
    list-style: none;
    text-decoration: none;
    padding: ${size.btn.paddingVertical} ${size.btn.paddingHorizontal};
    background-color: ${color.primary};
    color: ${color.light};
    font-size: ${size.btn.fontSize};
    text-align: center;
    transition: opacity 4s ease;
    box-shadow: 0 0 10px rgba(0,0,0,.6)
    &:hover {
        opacity: 0.9;
    }

`
const ButtonLink = styled(Button)`
    a {
        text-decoration: none;
        color: ${({ color_link_text }) => (color_link_text ? color_link_text : '#000000')}
    }
`
export const ButtonGlobalLink = ({ to , color, raised, disabled, text, color_link_text}) => (
    <ButtonLink disabled={disabled} color={color} color_link_text={color_link_text} raised={raised} >
        <a disabled={disabled} href={to}>{text}</a>
    </ButtonLink>
)