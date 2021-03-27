

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default class Loading extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../assets/load.png')} style={{ width: 30, height: 30 }} />
                <Text>Loading...</Text>
            </View>
        );

    }
}
