import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Touchable } from 'react-native';
import { Card, Button, Input, Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/header'

const firstname = "Firstname"  
const lastname = "Lastname"  
const username = "Username"
const dob = "DOB"
const gender = "Gender"
const email = "email@address.com"
const city = "City"
const contact = "Contact"
const hospital = "Hospital"
const designation = "Designation"
export default class DoctorProfile extends React.Component{
    constructor(props){
        super(props);  
        this.state = {
            firstname: '',
            lastname: '',
            dob: '',
            city: '',
            contact: ''
        };  
    } 
    
    save=()=>{
        console.log("Saved")
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={{zIndex: 9}}>
                    <Header heading="Profile"/>
                </View>
                <View style={{top: 50}}>
                    <Avatar
                        size="large"
                        rounded
                        icon={{name: 'user', type: 'font-awesome', color: 'lightgray'}}
                        containerStyle={{alignSelf: 'center', backgroundColor: 'gray'}}
                    />
                </View>
                <View>
                    <Input
                        value={ firstname.concat(" ".concat(lastname)) }
                        onChangeText={(value) => {
                            res = value.split(" ");
                            this.setState({ firstname: res[0], lastname: res[1] })                            
                        }}
                        inputContainerStyle={{width: '70%', top: 80, alignSelf: 'center'}}
                    />
                </View>
                <View>
                    <Input
                        value={ username }
                        disabled 
                        inputContainerStyle={{width: '70%', top: 80, alignSelf: 'center'}}
                    />
                </View>
                <View>
                    <Input
                        value={ dob }
                        onChangeText={(value) => {
                            this.setState({ dob: value })                            
                        }}
                        inputContainerStyle={{width: '70%', top: 80, alignSelf: 'center'}}
                    />
                </View>
                <View>
                    <Input
                        value={ gender }
                        disabled 
                        inputContainerStyle={{width: '70%', top: 80, alignSelf: 'center'}}
                    />
                </View>
                <View>
                    <Input
                        value={ email }
                        disabled 
                        inputContainerStyle={{width: '70%', top: 80, alignSelf: 'center'}}
                    />
                </View> 
                <View>
                    <Input
                        value={ hospital }
                        disabled 
                        inputContainerStyle={{width: '70%', top: 80, alignSelf: 'center'}}
                    />
                </View>
                <View>
                    <Input
                        value={ designation }
                        disabled 
                        inputContainerStyle={{width: '70%', top: 80, alignSelf: 'center'}}
                    />
                </View>  
                <View>
                    <Input
                        value={ city }
                        onChangeText={(value) => {
                            this.setState({ city: value })                            
                        }}
                        inputContainerStyle={{width: '70%', top: 80, alignSelf: 'center'}}
                    />
                </View>
                <View>
                    <Input
                        value={ contact }
                        onChangeText={(value) => {
                            this.setState({ dob: value })                            
                        }}
                        inputContainerStyle={{width: '70%', top: 80, alignSelf: 'center'}}
                    />
                </View>                                   
                <View style={{top: 80}}>
                    <Button
                        title="Check Appointments"
                        onPress={() => this.props.navigation.navigate('CheckAppointments')} 
                        buttonStyle={styles.buttonStyle}
                        type='clear'
                    />
                </View>              
                <View style={{top: 90}}>
                    <Button
                        title="Save Changes"
                        onPress={this.save} 
                        buttonStyle={styles.loginbuttonStyle}
                    />
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
        alignSelf: 'center',
        marginBottom: 20
    },
    buttonStyle: {
        borderRadius: 10, 
        width: '90%', 
        alignSelf: 'center'
    }

})