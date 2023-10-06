import React, { Component, useState } from 'react'
import RestaurentEntry from './src/features/restaurent/screens/RestaurentEntry';
import { Provider } from 'react-redux';
import store from './store';


const App = () => {

    return (
        <>
            <Provider store={store}>
            <RestaurentEntry />
            </Provider>
        </>
    );
}
export default App;
