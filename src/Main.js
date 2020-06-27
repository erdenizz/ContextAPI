import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Facts, Login, VoteFilter } from './pages'

import Provider from './context/Provider'

const Stack = createStackNavigator();

function Main() {
    return (
        <Provider>
            <NavigationContainer>
                <Stack.Navigator>

                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Facts" component={Facts} options={{ headerShown: false }} />
                    <Stack.Screen name="Votes" component={VoteFilter} />

                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default Main;