import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Store from './Redux/Store.js'
import {Provider} from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-l6868cw7ci2ac8h8.us.auth0.com"
    clientId="W0L0a5Mjk84CFrjZk9NBRawcfVQO5xjq"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <Provider store = {Store}>
          <App />
      </Provider>
  </Auth0Provider>
  
)
