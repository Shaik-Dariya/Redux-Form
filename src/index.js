import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './app/reducer/rootReducers';

import store from './app/store/configureStore';
const StoreContext = React.createContext(null);


ReactDOM.render(<Provider store={store}>
    <ConnectedRouter history={history}>
       <App />
    </ConnectedRouter>        
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

