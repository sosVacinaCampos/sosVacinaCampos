import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: white;
    transition: all 0.50s linear;
  }
  html, body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box
  }


`;
