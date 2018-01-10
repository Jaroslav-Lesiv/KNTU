import styled, { injectGlobal } from 'styled-components';
import { CardMedia } from 'material-ui/Card';
export default injectGlobal`
  @font-face {
    font-family: 'OpenSans';
    src: url('./fonts/OpenSans-Regular.ttf');
  }

  @font-face {
    font-family: 'Satisfy';
    src: url('./fonts/Satisfy-Regular.ttf');
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  
  html,
  body {
    height: 100%;
  }

  body {
    overflow: hidden;
  }

  p,
  div,
  span {
      font-family: OpenSans;
  }

`;

export const Line = styled.hr`
  width: 100%;
`

export const PostImage = styled(CardMedia)`
  width: 100%;
  min-height: 330px;
  margin: 10px auto;
  border-radius: 4px;
`