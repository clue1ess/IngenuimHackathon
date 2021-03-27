import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MediPediaComponent from './MediPedia.js';



class MediPedia extends Component {
    static navigationOptions = {
        title: 'MediPedia'
    };
    render() {
        return (<MediPediaComponent />);
    }
}

const styles = {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
};


export default MediPedia;

// // import * as React from 'react';
// // import { Button, View, Text } from 'react-native';
// // import { createAppContainer } from 'react-navigation';
// // import { createStackNavigator } from 'react-navigation-stack';
// // import MediPediaComponent from './MediPedia';
// // import DiseasesInfoComponent from './DiseasesInfo';

// // const RootStack = createStackNavigator(
// //     {
// //         MediPedia: MediPediaComponent,
// //         DiseasesInfo: DiseasesInfoComponent,
// //     },
// //     {
// //         initialRouteName: 'MediPedia',
// //     }
// // );

// // const MediPediaContainer = createAppContainer(RootStack);

// // export default class MediPediaHome extends React.Component {
// //     render() {
// //         return <MediPediaContainer />;
// //     }
// // }



