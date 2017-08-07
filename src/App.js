import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

import Game from './components/Game';
import './App.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
    reducers, 
    composeEnhancers(applyMiddleware(
        thunkMiddleware
    ))
);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Game />
            </Provider>
        );
    }
}

export default App;