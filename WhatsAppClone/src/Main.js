import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Router from './Router';
import reducers from './reducers';

export default class Main extends Component {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyCOMVSFKGJxurZOn-v9o7ADz23EiDgI3ps",
            authDomain: "reactnative-58359.firebaseapp.com",
            databaseURL: "https://reactnative-58359.firebaseio.com",
            projectId: "reactnative-58359",
            storageBucket: "reactnative-58359.appspot.com",
            messagingSenderId: "444919186695"
        }; 

        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router />
            </Provider>
        );
    }
}
