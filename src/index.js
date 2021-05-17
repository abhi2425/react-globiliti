import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './utilities.css'
import App from './App'
import { SignupContextProvider } from './Context/SignupContext'

ReactDOM.render(
  <React.StrictMode>
    <SignupContextProvider>
      <App />
    </SignupContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
