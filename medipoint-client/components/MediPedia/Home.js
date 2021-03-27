// import React, { Component } from 'react';
// import { Text, View } from 'react-native';
// import MediPediaComponent from './MediPedia.js';



// class MediPedia extends Component {
//     static navigationOptions = {
//         title: 'MediPedia'
//     };
//     render() {
//         return (<MediPediaComponent />);
//     }
// }

// const styles = {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
// };


// export default MediPedia;

import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MediPediaComponent from './MediPedia';
import DiseasesInfoComponent from './DiseasesInfo';



const StackNavigator = createStackNavigator({
    MediPediaHome: MediPediaComponent,
    DiseasesInfo: DiseasesInfoComponent,
}, {
    navigationOptions: {
        header: null,
    },
    initialRouteName: 'MediPediaHome',

});

const AppContainer = createAppContainer(StackNavigator);

class MediPedia extends Component {
    static navigationOptions = {
        title: 'MediPedia'
    };
    render() {
        return (<AppContainer />);
    }
}

// const styles = {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
// };

// export default MediCure;


export default MediPedia;



