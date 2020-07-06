import React, { Component } from 'react';
import Welcome from './Welcome';
import ChatbotComp from './ChatbotComp';
import { Provider } from 'react-redux';
import store from '../Store/ReduxStore';

class Main extends Component {

    render() {
        return (
            <Provider store={store}>
                <Welcome></Welcome>
                <ChatbotComp></ChatbotComp>
            </Provider>
        );
    }
}

export default Main;
