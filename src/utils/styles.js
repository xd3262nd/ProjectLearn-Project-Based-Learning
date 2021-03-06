import css from "styled-jsx/css";

export default css.global`
  :root {
    --button-blue: #3040c4;
    --theme-pink: #f9d9eb;
    --theme-blue: #aac6fc;
    --theme-green: #7fd6c2;
    --theme-yellow: #f6e049;
    --theme-red: #ff8578;
    --theme-red-alt: #e6a29a;
    --theme-grey: #586069;
    --dashboard-purple: #8d8eee;
    --theme-blue-alt: #aac6fc;
    --dashboard-purple-alt: #6b6be5;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: "Lato", "sans-serif" !important;
    background: var(--mainWhite) !important;
    color: var(--mainDark) !important;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: initial;
  }
`;
