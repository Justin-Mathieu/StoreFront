import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import store from './Store/index.jsx'
import cart from './Store/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} cart={cart}>
    <App />
    </Provider>
  </React.StrictMode>,
)
