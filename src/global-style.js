import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    // 1rem === 10px
    // font-size: 62.5%;
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`;
