import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import App from './App'
import { BrowserRouter, Router } from 'react-router-dom'
import {createHashHistory} from 'history'

ReactDOM.render(
  <BrowserRouter >
   <App />
  </BrowserRouter>,
  document.getElementById('root')
)
