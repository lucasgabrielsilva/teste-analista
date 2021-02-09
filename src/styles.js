import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body {
        background-color: white;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
    }

    input{
        ::before{
            color: #002e54;
            content: attr(placeholder) !important;
        }
        :focus::before{
            content: '' !important;
        }
        border: none;
    }

    button {
        cursor: pointer;
        border: none;
    }

`;

export default globalStyle;
