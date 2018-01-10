import styled from 'styled-components';
import { color, size } from '../../variables';

export const PostHeader = styled.header`
    width: 100%;
    padding: 15px;
    box-shadow: 0 0 10px rgba(0,0,0,.3);
    background: ${color.light};
    margin-bottom: 15px;
`;
export const PostHeaderTitle = styled.div`
    width: 100%;
    font-size: 1.4em;
    text-align: left;
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 0.4px;
`;
export const CardUI = styled.div`
    flex-basis: 400px;
    flex-grow: 1;
    margin: 15px 10px 15px 10px;
    width: 100%;
    @media screen and (max-width: 720px) {
    margin: 7.5px;
}
`
export const PostHeaderNav = styled.nav`

`;

export const PostHeaderList = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const PostHeaderLink = styled.li`
    display: flex;
    align-items: center;
    font-size: 0.9em;
    padding: 5px 10px;
    margin: 0 7.5px;
    box-shadow: 0 0 5px rgba(0,0,0,.3);
    background: ${color.mainBackground};
    color: ${color.textColor};

    a {
        color: ${color.primary};
        cursor: pointer;
    }
    img {
        width: 1em;
        height: 1em;
        margin-right: 10px;
    }
`;

export const Post = styled.div`
    width: 100%;
    background: ${color.light}
`;

export const PostBody = styled.div`
    width: 100%;
    box-shadow: 0 0 10px rgba(0,0,0,.3);
    background: ${color.light};
`;

export const PostBodyImg = styled.img.attrs({
    src: props => props.img,
    alt: props => props.title,
})`
    width: 100%;
    max-height: 500px;
`

export const BodyShortDescription = styled.p`
    color: ${color.textColor};
    font-size: 0.9em;
`

export const PostBodyBottom = styled.div`
    padding: 15px;
`
