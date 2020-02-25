import React from 'react';
import {Provider} from 'react-redux';
import {store} from './app/store/store';
import {Login} from './app/views/auth/Login';
import * as Font from 'expo-font';

export default class App extends React.Component {
    state = {
        fontLoaded: false,
    };

    async componentWillMount() {
        await Font.loadAsync({
            'Roboto_medium': require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
        });
        this.setState({ fontLoaded: true });
    }

    render() {
        return (
            <Provider store={store}>
                {
                    this.state.fontLoaded ? (
                        <Login/>
                    ) : null
                }
            </Provider>
        );
    }
}
