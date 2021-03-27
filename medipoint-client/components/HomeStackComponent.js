// import React, { Component } from 'react';
// // import { Text, View } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import MediPedia from './MediPedia/Home';
// import MediAppoint from './MediAppoint/Home';
// import MediCure from './MediCure/Home';
// import MediPredict from './MediPredict/Home';
// import Login from './Auth/Login';
// import Register from './Auth/Register';
// import DiseasesInfo from './MediPedia/DiseasesInfo';
// import Home from './HomeComponent';

// const RootStack = createStackNavigator(
//     {
//         Login: Login,
//         Register: Register,
//         Home: Home,
//         MediAppoint: MediAppoint,
//         MediCure: MediCure,
//         MediPedia: MediPedia,
//         MediPredict: MediPredict,
//         DiseasesInfo: DiseasesInfo
//     },
//     {
//         initialRouteName: 'Login',
//     }
// );

// const HomeContainer = createAppContainer(RootStack);
// class HomeStack extends Component {
//     render() {
//         return <HomeContainer />;
//     }
// }

// const styles = {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
// };

// export default HomeStack;