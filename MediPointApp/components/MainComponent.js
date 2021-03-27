import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import MediPedia from './MediPedia/Home';
import MediPredict from './MediPredict/Home.js';
import MediCure from './MediCure/MediCure.js'
import MediAppoint from './MediAppoint/Home.js';
import Home from './HomeComponent';
import WelcomeScreen from '../screens/WelcomeScreen';
import AuthHome from './Auth/Login';
import Register from './Auth/Register';
import DiseasesInfo from './MediPedia/DiseasesInfo.js';
import CureInfo from './MediCure/CureInfo';
import Logout from './Auth/Logout';


const HomeStackNavigator = createStackNavigator(
    {
        MediPoint: Home
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerRight: (
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
        MediAppoint: MediAppoint
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerRight: (
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
        MediCure: MediCure
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
        MediPredict: MediPredict
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
        Login: AuthHome
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerRight: (
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
        Logout: Logout
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


const DiseasesInfoStackNavigator = createStackNavigator(
    {
        DiseasesInfo: DiseasesInfo
    }
);

const CureInfoStackNavigator = createStackNavigator(
    {
        CureInfo: CureInfo
    }
);

const RegisterStackNavigator = createStackNavigator(
    {
        Register: Register
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
    DiseasesInfo: { screen: DiseasesInfoStackNavigator },
    CureInfo: { screen: CureInfoStackNavigator },
    Register: { screen: RegisterStackNavigator },

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