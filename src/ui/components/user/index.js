import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const size = {
    colSize: '300'
}

const Block = styled.div`
    padding: 15px;
`

export const UserInformUI = styled(Paper)`
    width: 100%;
    min-height: ${size.colSize};
    height: min-content;
    display: flex;
    justify-content: space-beetwen;
    align-items: 'center';
    flex-wrap: wrap;
    border: 1px solid red;
`

export const UserLogoUI = Block.extend`
    flex-grow: 1;
    flex-basis: ${size.colSize}px;
    min-height: ${size.colSize}px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
`

export const UserInformHeader = styled.header`
    width: 100%;
    margin-bottom: 15px;
`

export const UserShortInform = Block.extend`
    flex-grow: 2;
    flex-basis: ${size.colSize * 2}px;
    min-height: ${size.colSize}px;
`

// ul 
export const InformList = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0;
`

export const InformListItem = styled.li`
    width: 100%;
    listStyle: none;
`

export const SmallBlock = styled(Paper)`
    padding: 15px;
    flex-basis: ${size.colSize}px;
    min-height: ${size.colSize}px;
    flex-grow: 1;
    margin: 15px;
`

export const LogoWrap = styled.div`
    flex-basis: 150px;
    height: 300px;
`