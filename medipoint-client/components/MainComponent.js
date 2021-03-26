import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';

import Home from './HomeComponent';


const HomeStackNavigator = createStackNavigator(
    {
        MediPoint: Home
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="md-menu"
                        size={30}
                    />
                )
            };
        }
    }
);

const MediAppointStackNavigator = createStackNavigator(
    {
        MediAppoint: Home
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="md-menu"
                        size={30}
                    />
                )
            };
        }
    }
);

const MediCureStackNavigator = createStackNavigator(
    {
        MediCure: Home
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="md-menu"
                        size={30}
                    />
                )
            };
        }
    }
);


const MediPredictStackNavigator = createStackNavigator(
    {
        MediPredict: Home
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="md-menu"
                        size={30}
                    />
                )
            };
        }
    }
);


const MediPediaStackNavigator = createStackNavigator(
    {
        MediPedia: MediPedia
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="md-menu"
                        size={30}
                    />
                )
            };
        }
    }
);

const AuthHomeStackNavigator = createStackNavigator(
    {
        Login: Home
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="md-menu"
                        size={30}
                    />
                )
            };
        }
    }
);

const LogoutStackNavigator = createStackNavigator(
    {
        Logout: Home
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="md-menu"
                        size={30}
                    />
                )
            };
        }
    }
);




const AppDrawerNavigator = createDrawerNavigator({
    Login: {
        screen: AuthHomeStackNavigator
    },
    Home: {
        screen: HomeStackNavigator
    },
    MediPedia: {
        screen: MediPediaStackNavigator
    },
    MediCure: {
        screen: MediCureStackNavigator
    },
    MediPredict: {
        screen: MediPredictStackNavigator
    },
    MediAppoint: {
        screen: MediAppointStackNavigator
    },
    Logout: {
        screen: LogoutStackNavigator
    },
});

const AppSwitchNavigator = createSwitchNavigator({
    Dashboard: { screen: AppDrawerNavigator },
    Welcome: { screen: WelcomeScreen },
    

});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default AppContainer;
