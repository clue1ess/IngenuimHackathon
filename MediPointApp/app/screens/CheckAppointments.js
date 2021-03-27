import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Touchable } from 'react-native';
import { Card, Button, Input, Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/header'

export default class CheckAppointments extends React.Component{
    constructor(props){
        super(props);  
    } 
    
    save=()=>{
        console.log("Saved")
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={{zIndex: 9}}>
                    <Header heading="Appointments"/>
                </View>
                <View>
                    <Card>
                        <Card.Title>Dr. Name</Card.Title>
                        <Card.Divider/>
                        <Text>Appointment Time: </Text>
                    </Card>
                </View>
                <View>
                    <Card>
                        <Card.Title>Dr. Name</Card.Title>
                        <Card.Divider/>
                        <Text>Appointment Time: </Text>
                    </Card>
                </View>
            </View>        
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center'
    },
    loginbuttonStyle: {
        borderRadius: 10, 
        width: 150, 
        alignSelf: 'center'
    },
    buttonStyle: {
        borderRadius: 10, 
        width: '90%', 
        alignSelf: 'center'
    }

})