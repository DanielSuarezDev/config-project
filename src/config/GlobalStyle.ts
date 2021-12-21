import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Nunito Sans', Helvetica, sans-serif, Arial;
    min-height: 100vh;
  }

  ul {
    list-style: none;
    margin: 0;
  }

  ul li {
    list-style: none;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
`;
