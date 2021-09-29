import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { LightThemeProvider } from './hooks/useLightTheme';


ReactDOM.render(
  <React.StrictMode>
    <LightThemeProvider>
      <App />
    </ LightThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
