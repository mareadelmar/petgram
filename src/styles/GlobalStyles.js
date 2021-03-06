import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html{
        margin: 0;
	    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        box-sizing: border-box;
    }

    *, *:before, *:after{
        box-sizing: inherit;
    }

    ul, li, h1, h2, h3, p, button {
        padding: 0;
        margin: 0
    }

    ul {
        list-style: none;
    }

    button{
        background: transparent;
        border: 0;
        outline: 0;
    }

    body{
        background: #fefefe;
        width: 100%;
        margin: 0 auto;
        max-width: 500px;
        overscroll-behavior: none;
    }

    .App {
        box-shadow: 0 0 10px rgba(0, 0, 0, .05);
        overflow-x: hidden;
        min-height: 98vh;
        padding-bottom: 10px;
    }
`;
