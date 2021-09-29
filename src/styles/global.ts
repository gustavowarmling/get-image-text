import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --main: #B69DFF;

  --white: #FFFFFF;

  --gray-50: #e1e1e6;
  --gray-300: #a8a8b3;
  --gray-700:#323238;
  --gray-800: #29292e;
  --gray-850: #1f2729;
  --gray-900: #121214;
}

body { 
  background-color: ${({ theme }: any) => theme.body};
  color: ${({ theme }: any) => theme.font};
}

@media(max-width:1080px) {
  html {
    font-size: 93.75%;
  }
}

@media(max-width:720px) {
  html {
    font-size: 87.5%;
  }
}

body, input, textarea, select, button {
  font: 400 1rem "Roboto", sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}`