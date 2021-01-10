import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import QueryProvider from './queryClient/QueryProvider';
import { Auth0Provider } from '@auth0/auth0-react'

//Agregamos los datos necesarios con los que nos enlazaremos a Auth0
const domain = 'dev-focus-react.us.auth0.com';
const clientId = 'H6dn6e0FW6frPtqoLE7uWVjp6VQQ8fXQ';
const redirectUri = window.location.origin;
const audience = "https://dev-focus-react.us.auth0.com/api/v2/";
const scope = "read:current_user update:current_user_metadata";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryProvider>
        <Auth0Provider domain={domain} clientId={clientId} redirectUri={redirectUri} audience={audience} scope={scope}>
          <App />
        </Auth0Provider>
      </QueryProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
