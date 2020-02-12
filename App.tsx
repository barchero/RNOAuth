import React from 'react';
import {Provider} from 'react-redux';
import {store} from './app/store/store';
import {Login} from './app/views/auth/Login';

export default function App() {

  return (
      <Provider store={store}>
        <Login/>
      </Provider>
  );
}
