import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    *{
      color: #333;
      box-sizing: border-box;
    }
    html, body, #__next{
      height: 100%;
    }
    a {
      text-decoration: none; 
      outline: none;
      &:hover, a:active, a:visited{
        text-decoration: none;
      }
    }
    h2, h3{
      scroll-margin-top: 72px;
    }
    li, ul{
      list-style: none;
      margin: 0; 
      padding: 0;
    }
    input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button { 
      -webkit-appearance: none; 
      -moz-appearance: none; 
      appearance: none; 
    }
    button{
      background: inherit;
      border:none; 
      box-shadow:none; 
      border-radius:0; 
      padding:0; 
      overflow:visible; 
      cursor:pointer;
    }
`;

export default GlobalStyles;
