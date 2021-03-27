
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Login from './Login';
import Register from './Register';
// import Logout from './Logout';
import Main from '../MainComponent';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const StackNavigator = createStackNavigator({
    Login: Login,
    Register: Register,
    Main: Main
    // ,
    // Logout: Logout
}, {
    navigationOptions: {
        header: null,
    },
    initialRouteName: 'Login',

});

const AppContainer = createAppContainer(StackNavigator);

class Auth extends Component {
    render() {
        return (<AppContainer />);
    }
}


export default Auth;

