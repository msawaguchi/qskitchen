import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background: ${(props) => props.theme.background};
    color:  ${(props) => props.theme['base-title']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    border: 0;
    cursor: pointer;
    padding: 0.6rem;
    border-radius: 0.6rem;
  }

  h1, h2, h3 {
    font-family: 'Baloo 2', sans-serif;
  }

  h2 {
    ${(props) => props.theme['base-subtitle']};
  }

  svg {
    font-size: 1.4rem;
  }

  ::-webkit-scrollbar {
    width: 0.45rem;
    height: 0.35rem;
  }

  ::-webkit-scrollbar-track {
    box-shadow: none; 
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme['base-hover']};
    border-radius: 10px;
  }
`
