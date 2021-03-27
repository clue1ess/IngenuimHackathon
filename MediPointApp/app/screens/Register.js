import React from 'react';
import { StyleSheet, Text, SectionList, View, ScrollView, TouchableOpacity } from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react';
import { Card, Button, Input, ButtonGroup } from 'react-native-elements'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { render } from 'react-dom';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Register extends React.Component{
    constructor(props){
        super(props);  
        this.state = {
            email: '',
            username: '',
            firstname: '',
            lastname: '',
            city: '',
            dob: '',
            contact: '',
            genderIndex: 0,
            password: '',
            confirmPassword: '',
            selectedIndex: 0,            
            isDatePickerVisible: true
        };  
    } 

    
    register=()=>{
        let valid = false
        valid = this.validate(this.state.email, this.state.username, this.state.password, this.state.confirmPassword,
            this.state.dob, this.state.contact, );
        if(valid === false){
            return false
        }
        else{
            this.props.navigation.navigate('Home');
        }
    }
    validate(emailID, uname, pwd, cpwd, dob, contact) {
        if( emailID == "" ) {
            alert( "Please provide email!" );
            return false;
         }      
        if( uname == "" ) {
           alert( "Please provide username!" );
           return false;
        }
        if( pwd == "" ) {
           alert( "Please provide password!" );
           return false;
        }
        if( cpwd == "" ) {
           alert( "Please confirm password!" );
           return false;
        }
        if( contact == "" ) {
           alert( "Please provide contact number!" );
           return false;
        }
        atpos = emailID.indexOf("@");
        dotpos = emailID.lastIndexOf(".");
        
        if (atpos < 1 || ( dotpos - atpos < 2 )) {
           alert("Please enter correct email ID")
           return false;
        }
        if( contact.length < 10 || contact.length > 12) {
            alert( "Please provide valid contact number!" );
            return false;
        }
        if( pwd.length < 8 || uname.length < 8) {
            alert( "Please provide valid username or password!" );
            return false;
        }
        if( pwd != cpwd) {
            alert( "Password and confirm password not matching!" );
            return false;
        }
        return( true );
     }
    
    render() {  
        const buttons = ['Doctor', 'User']        
        const gender = ['Male', 'Female']
                       
        return (
            <View style={styles.container}>
                
                <View style={{flex: 1, top: '5%'}}>
                    <Text style={{fontSize: 30, fontWeight: 'bold', color: '#f4511e', alignSelf: 'center'}}>MediPoint</Text>
                                
                        <View>
                            <Input
                                placeholder='First name'
                                onChangeText={value => this.setState({ firstname: value })}
                                containerStyle={{width: '80%', alignSelf: 'center', top: '35%'}}
                            />
                        </View>                 
                        <View>
                            <Input
                                placeholder='Last name'
                                onChangeText={value => this.setState({ lastname: value })}
                                containerStyle={{width: '80%', alignSelf: 'center', top: '35%'}}
                            />
                        </View>    
                        <View>
                            <Input
                                placeholder='email'
                                onChangeText={value => this.setState({ email: value })}
                                containerStyle={{width: '80%', alignSelf: 'center', top: '35%'}}
                            />
                        </View>   
                        <View>
                            <Input
                                placeholder='Contact no.'
                                onChangeText={value => this.setState({ contact: value })}
                                containerStyle={{width: '80%', alignSelf: 'center', top: '35%'}}
                                keyboardType='numeric'
                            />
                        </View>        
                        <View>
                            <Input
                                placeholder='Date of Birth'
                                onFocus={() => {
                                    this.setState({ isDatePickerVisible: true })
                                    console.log('Pressed')
                                }}
                                containerStyle={{width: '80%', alignSelf: 'center', top: '35%'}}
                            />
                            <DateTimePickerModal
                                isVisible={this.state.isDatePickerVisible}
                                mode="date"
                                onConfirm={(date) => {
                                    console.warn("A date has been picked: ", date);
                                    () => {
                                        this.setState({ isDatePickerVisible: true })
                                    };
                                }}
                                onCancel={() => {
                                    this.setState({ isDatePickerVisible: true })
                                }}
                            />
                        </View>
                        <View>
                            <Input
                                placeholder='City (Optional)'
                                onChangeText={value => this.setState({ city: value })}
                                containerStyle={{width: '80%', alignSelf: 'center', top: '35%'}}
                            />
                        </View>   
                        <View>                            
                            <ButtonGroup
                                onPress={(selectedIndex) => {
                                    this.setState({genderIndex: selectedIndex})
                                    console.log(selectedIndex)
                                    console.log(gender[selectedIndex])
                                }}
                                selectedIndex={this.state.selectedIndex}
                                buttons={gender}
                                containerStyle={{height: 30, width: '60%', alignSelf: 'center'}}
                            />
                        </View>              
                        <View>
                            <Input
                                placeholder='Create username'
                                onChangeText={value => this.setState({ username: value })}
                                containerStyle={{width: '80%', alignSelf: 'center', top: '35%'}}
                            />
                        </View>
                        <View>
                            <Input
                                placeholder='Create Password'
                                secureTextEntry={true}
                                onChangeText={value => this.setState({ password: value })}
                                containerStyle={{width: '80%', alignSelf: 'center', top:'30%'}}
                            />
                        </View>
                        <View>
                            <Input
                                placeholder='Confirm Password'
                                secureTextEntry={true}
                                onChangeText={value => this.setState({ password: value })}
                                containerStyle={{width: '80%', alignSelf: 'center', top:'30%'}}
                            />
                        </View>
                        <View>                            
                            <ButtonGroup
                                onPress={(selectedIndex) => {
                                    this.setState({selectedIndex: selectedIndex})
                                    console.log(selectedIndex)
                                    console.log(buttons[selectedIndex])
                                }}
                                selectedIndex={this.state.selectedIndex}
                                buttons={buttons}
                                containerStyle={{height: 30, width: '60%', alignSelf: 'center'}}
                            />
                        </View>
                        <View style={{top: '10%'}}>
                            <Button
                                title="REGISTER"
                                onPress={this.register} 
                                buttonStyle={styles.registerbuttonStyle}
                                type="outline"
                            />
                        </View>                      
                    
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
    registerbuttonStyle: {
        borderRadius: 10, 
        width: 150, 
        alignSelf: 'center'
    }

})