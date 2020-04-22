import React, { Component } from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';



const Stack = createStackNavigator();


class AppNavigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="HomeScreen">

                    <Stack.Screen name="HomeScreen" component={HomeScreen}
                        options={({ navigation, route }) => ({
                            headerShown: false
                        })}
                    />
                    <Stack.Screen name="LoginScreen" component={LoginScreen}
                        options={({ navigation, route }) => ({
                            headerShown: false
                        })}
                    />
                    <Stack.Screen name="RegisterScreen" component={RegisterScreen}
                        options={({ navigation, route }) => ({
                            headerShown: false
                        })} />
                    <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}
                        options={({ navigation, route }) => ({
                            headerShown: false
                        })} />

                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default AppNavigator

