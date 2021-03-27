

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './Login';
import Register from './Register';
import Home from '../HomeComponent';


const Nav = ({ props }) => {
    localStorage.removeItem('token');
    localStorage.removeItem('creds');
    return props.navigation.navigate('Login');
};

export default class Logout extends React.Component {

    render() {
        return <Nav props={this.props} />;
    }
}



