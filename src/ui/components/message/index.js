import styled from 'styled-components'

export const MessageListUI = styled.div`
    display: flex;
    flex-direction: column-reverse;
    min-height: 600px;
`

export const MessageWrapper = styled.div`
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,.3);
    display: flex;
    flex-direction: row;
    margin: ${props => props.isMyMessage ? '5px 0 5px auto' : '5px auto 5px 0'};
    max-width: 70%;
    padding: 15px;
    border-radius: 3px;
    margin-top: 5px;
    margin-bottom: 5px;
`
export const UserInform = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    max-width: 100px;
`
export const MessageUserLogo = styled.img.attrs({
    src: props => props.image || './images/post/user.svg',
    alt: 'logo'
})`
    border-radius: 50%;
    width: 35px;
    height: 35px;
    border: 1px solid green;
    margin-right: 10px;
`
export const MessageUserName = styled.h4`
    text-align: left;
`
export const MessageUserDesc = styled.p`
    display: flex;
    width: 100%;
    padding-left: 15px;
    padding-top: 0px;
`
