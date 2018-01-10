import styled, { keyframes } from 'styled-components'
import { size, color } from '../../variables'

export const HeaderUI = styled.header`
    width: ${size.header.default};
    background: ${color.primary};
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 20px;
`;

export const Logo = styled.div`
    width: ${size.header.default};
    height: ${size.header.default};
    background-image: url(${props => props.background || './img/logo.png'});
    background-color: ${props => props.backgroundColor || color.logoColor};
    background-repeat: no-repeat;
    background-position: center;
    background-size: 65px;
    margin-bottom: ${size.header.link}
`;

export const MenuUi = styled.nav`

`;

export const Nav = styled.ul`
    display: flex;
    flex-direction: column;
    width: ${size.header.default};
`;

export const NavItems = styled.li`
    margin: 7px auto;
    list-style: none;
    position: relative;
    width: ${size.header.link};
    height: ${size.header.link};
    display: flex;
    justify-content: space-around;
    align-items: center;

    a {
        text-decoration: none;
        width: ${size.header.link};
        height: ${size.header.link};
        display: inline-block;
        background-image: url(${props => props.img || './images/header/nav/message.svg'});
        background-repeat: no-repeat;
        background-position: center;
        background-size: ${size.header.linkImg};
        color: ${color.light};
        border-radius: 50%;
        transition: 0.4s;
        cursor: pointer;

    }
    a:hover {
        background-color: rgba(50,50,50,.5);
        box-shadow: 0 0 3px rgba(50,50,50,.5);
    }
    a.active {
        background-color: rgba(0,0,0,.5);
        box-shadow: 0 0 3px rgba(0,0,0,.5);
    }

`;

const showLinkTitle = keyframes`
    from {
        transform: translateX(-20px); opacity: 0;
    }
    to {
        transform: translateX(0px); opacity: 1;
    }
`

export const NavTitle = styled.span`
    opacity: 0;
    position: absolute;
    height: ${size.header.linkImg};
    padding: 3px 5px;
    border-radius: 2px;
    font-size: 0.8em;
    left: 68px;
    z-index: 1;
    width: max-content;
    background: rgba(30,30,30,.7);
    color: ${color.light};
    animation-name: ${showLinkTitle};
    animation-delay: 0.3s;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
`

export const AuthUI = styled.div`
    display: flex;
    margin-top: auto;
    width: ${size.header.default};
`