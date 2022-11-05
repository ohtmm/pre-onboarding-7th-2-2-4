import { createGlobalStyle } from "styled-components";
import ResetStyle from "./ResetStyle";

const GlobalStyle = createGlobalStyle`
    ${ResetStyle};

    body {
        font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    *{
        box-sizing:border-box ;
    }
    a {
        text-decoration:none ;
        color:inherit;
    }
    img, svg {
        vertical-align:middle ;
    }
`;
export default GlobalStyle;
