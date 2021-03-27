import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MediCureComp from './MediCure';
import CureInfo from './CureInfo';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const StackNavigator = createStackNavigator({
    MediCureHome: MediCureComp,
    CureInfo: CureInfo,
}, {
    navigationOptions: {
        header: null,
    },
    initialRouteName: 'MediCureHome',

});

const AppContainer = createAppContainer(StackNavigator);

class MediCure extends Component {
    static navigationOptions = {
        title: 'MediCure'
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


export default MediCure;

