
// import React, { Component } from 'react';
// import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
// import TimeSlotBooking from './TimeSlotBooking';
// import DoctorsList from './DoctorDetails';


// class MediAppoint extends Component {
//     static navigationOptions = {
//         title: 'MediAppoint'
//     };
//     render() {
//         return (<DoctorsList />);
//     }
// }



// export default MediAppoint;
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import DoctorsList from './DoctorDetails';
import TimeSlotBooking from './TimeSlotBooking';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const StackNavigator = createStackNavigator({
    MediAppointHome: DoctorsList,
    TimeSlotBooking: TimeSlotBooking,
}, {
    navigationOptions: {
        header: null,
    },
    initialRouteName: 'MediAppointHome',

});

const AppContainer = createAppContainer(StackNavigator);

class MediAppoint extends Component {
    static navigationOptions = {
        title: 'MediAppoint'
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


export default MediAppoint;

