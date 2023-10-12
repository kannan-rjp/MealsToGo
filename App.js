import React, { Component, useState } from 'react'
// import RestaurentEntry from './src/features/restaurent/screens/RestaurentEntry';
import RestaurentScreenStack from './src/features/restaurent/screens/RestaurentNavigator';
import { Provider } from 'react-redux';
import store from './store';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {

    return (
        <>
            <Provider store={store}>
                <NavigationContainer>
                    <RestaurentScreenStack />
                </NavigationContainer>
            </Provider>
        </>
    );
}
export default App;
