// import React, { Component } from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import {
//     createSwitchNavigator,
//     createAppContainer
// } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
// import MediPedia from './MediPedia/Home';
// import MediPredict from './MediPredict/Home.js';
// import MediCure from './MediCure/Home.js'
// import MediAppoint from './MediAppoint/Home.js';
// import Home from './HomeComponent';
// import WelcomeScreen from '../screens/WelcomeScreen';
// // import AuthHome from './Auth/Login';
// import Register from './Auth/Register';
// import DiseasesInfo from './MediPedia/DiseasesInfo.js';
// // import CureInfo from './MediCure/CureInfo';
// import Logout from './Auth/Logout';
// import Profile from '../screens/ProfilePage';

// const HomeStackNavigator = createStackNavigator(
//     {
//         MediPoint: Home
//     },
//     {
//         defaultNavigationOptions: ({ navigation }) => {
//             return {
//                 headerLeft: (
//                     <Icon
//                         style={{ paddingLeft: 10 }}
//                         onPress={() => navigation.openDrawer()}
//                         name="md-menu"
//                         size={30}
//                     />
//                 )
//             };
//         }
//     }
// );

// const MediAppointStackNavigator = createStackNavigator(
//     {
//         MediAppoint: MediAppoint
//     },
//     {
//         defaultNavigationOptions: ({ navigation }) => {
//             return {
//                 headerLeft: (
//                     <Icon
//                         style={{ paddingLeft: 10 }}
//                         onPress={() => navigation.openDrawer()}
//                         name="md-menu"
//                         size={30}
//                     />
//                 )
//             };
//         }
//     }
// );

// const MediCureStackNavigator = createStackNavigator(
//     {
//         MediCure: MediCure
//     },
//     {
//         defaultNavigationOptions: ({ navigation }) => {
//             return {
//                 headerLeft: (
//                     <Icon
//                         style={{ paddingLeft: 10 }}
//                         onPress={() => navigation.openDrawer()}
//                         name="md-menu"
//                         size={30}
//                     />
//                 )
//             };
//         }
//     }
// );


// const MediPredictStackNavigator = createStackNavigator(
//     {
//         MediPredict: MediPredict
//     },
//     {
//         defaultNavigationOptions: ({ navigation }) => {
//             return {
//                 headerLeft: (
//                     <Icon
//                         style={{ paddingLeft: 10 }}
//                         onPress={() => navigation.openDrawer()}
//                         name="md-menu"
//                         size={30}
//                     />
//                 )
//             };
//         }
//     }
// );


// const MediPediaStackNavigator = createStackNavigator(
//     {
//         MediPedia: MediPedia
//     },
//     {
//         defaultNavigationOptions: ({ navigation }) => {
//             return {
//                 headerLeft: (
//                     <Icon
//                         style={{ paddingLeft: 10 }}
//                         onPress={() => navigation.openDrawer()}
//                         name="md-menu"
//                         size={30}
//                     />
//                 )
//             };
//         }
//     }
// );

// const ProfileStackNavigator = createStackNavigator(
//     {
//         MyProfile: Profile
//     },
//     {
//         defaultNavigationOptions: ({ navigation }) => {
//             return {
//                 headerLeft: (
//                     <Icon
//                         style={{ paddingLeft: 10 }}
//                         onPress={() => navigation.openDrawer()}
//                         name="md-menu"
//                         size={30}
//                     />
//                 )
//             };
//         }
//     }
// );

// const LogoutStackNavigator = createStackNavigator(
//     {
//         Logout: Logout
//     },
//     {
//         defaultNavigationOptions: ({ navigation }) => {
//             return {
//                 headerLeft: (
//                     <Icon
//                         style={{ paddingLeft: 10 }}
//                         onPress={() => navigation.openDrawer()}
//                         name="md-menu"
//                         size={30}
//                     />
//                 )
//             };
//         }
//     }
// );


// const DiseasesInfoStackNavigator = createStackNavigator(
//     {
//         DiseasesInfo: DiseasesInfo
//     }
// );

// // const CureInfoStackNavigator = createStackNavigator(
// //     {
// //         CureInfo: CureInfo
// //     }
// // );

// // const RegisterStackNavigator = createStackNavigator(
// //     {
// //         Register: Register
// //     }
// // );


// const AppDrawerNavigator = createDrawerNavigator({
//     // Login: {
//     //     screen: AuthHomeStackNavigator
//     // },
//     Home: {
//         screen: HomeStackNavigator
//     },
//     MediPedia: {
//         screen: MediPediaStackNavigator
//     },
//     MediCure: {
//         screen: MediCureStackNavigator
//     },
//     MediPredict: {
//         screen: MediPredictStackNavigator
//     },
//     MediAppoint: {
//         screen: MediAppointStackNavigator
//     },
//     MyProfile: {
//         screen: ProfileStackNavigator
//     },
//     Logout: {
//         screen: LogoutStackNavigator
//     },
// });

// const AppSwitchNavigator = createSwitchNavigator({
//     Dashboard: { screen: AppDrawerNavigator },
//     Welcome: { screen: WelcomeScreen },
//     DiseasesInfo: { screen: DiseasesInfoStackNavigator },
//     // CureInfo: { screen: CureInfoStackNavigator },
//     // Register: { screen: RegisterStackNavigator },

// });

// const AppContainer = createAppContainer(AppSwitchNavigator);

// class Main extends Component {
//     static navigationOptions = {
//         title: 'Main'
//     };
//     render() {
//         return (<AppContainer />);
//     }
// }


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });

// export default Main;



import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import MediPedia from './MediPedia/MediPedia';
import MediPredict from './MediPredict/MediPredict';
import MediCure from './MediCure/MediCure'
import MediAppoint from './MediAppoint/DoctorDetails';
import Home from './HomeComponent';
import DiseasesInfo from './MediPedia/DiseasesInfo';
import CureInfo from './MediCure/CureInfo';
import TimeSlotBooking from './MediAppoint/TimeSlotBooking';
import DrawerContainer from './DrawerContainer';
import Logout from './Auth/Logout';
import Profile from '../screens/ProfilePage';
import Login from './Auth/Login';
import Register from './Auth/Register';
import MediStore from './MediStore/MediStore';
import MedicineLogger from './MediStore/MedicineLogger';
import DocumentsLogger from './MediStore/DocumentsLogger';
import CheckAppointments from '../screens/CheckAppointments';



const MainNavigator = createStackNavigator(
    {
        Home: Home,
        MediPedia: MediPedia,
        MediCure: MediCure,
        MediPredict: MediPredict,
        MediAppoint: MediAppoint,
        DiseasesInfo: DiseasesInfo,
        CureInfo: CureInfo,
        TimeSlotBooking: TimeSlotBooking,
        Profile: Profile,
        Logout: Logout,
        Login: Login,
        Register: Register,
        MediStore: MediStore,
        MedicineLogger: MedicineLogger,
        DocumentsLogger: DocumentsLogger,
        CheckAppointments: CheckAppointments
    },
    {
        initialRouteName: 'Login',
        // headerMode: 'float',
        defaultNavigationOptions: ({ navigation }) => ({
            headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
                alignSelf: 'center',
                flex: 1,
                fontSize: 25,
                color: "white"
            },
            headerStyle: {
                backgroundColor: "#954535"
            }
        })
    }
);



const DrawerStack = createDrawerNavigator(
    {
        Main: MainNavigator
    },
    {
        drawerPosition: 'left',
        initialRouteName: 'Main',
        drawerWidth: 250,
        contentComponent: DrawerContainer
    }
);




const AppContainer = createAppContainer(DrawerStack);
export default AppContainer;
console.disableYellowBox = true;