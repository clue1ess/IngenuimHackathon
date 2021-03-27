import React, { Component } from 'react';
import { View, Button, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements'
import MedicineLogger from './MedicineLogger';
import DocumentsLogger from './DocumentsLogger';
// import { Container, Header, Title } from 'native-base';

// const Stack = createStackNavigator();




class MediStore extends Component {
    static navigationOptions = {
        title: 'MediPredict'
    };
    render() {
        return (
            <View>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('MedicineLogger')}>
                    <Card>
                        <Card.Title>Medicine Logger</Card.Title>

                    </Card>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DocumentsLogger')}>
                    <Card>
                        <Card.Title>Documents Logger</Card.Title>

                    </Card>
                </TouchableOpacity>
            </View>
        );
    }
}

export default MediStore;