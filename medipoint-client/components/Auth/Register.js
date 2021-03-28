import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input, ButtonGroup } from 'react-native-elements'
import { Alert } from 'react-native';


export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
            selectedIndex: 1
        };
        this.updateIndex = this.updateIndex.bind(this);
    }
    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
        console.log(this.state.selectedIndex)
    }
    register = () => {
        let valid = false
        valid = this.validate(this.state.email, this.state.username, this.state.password, this.state.confirmPassword);
        if (valid === false) {
            return false
        }
        else {
            Alert.alert("Registration Successful!");
            this.props.navigation.navigate('Login');
        }
    }
    validate(emailID, uname, pwd, cpwd) {
        if (emailID == "") {
            alert("Please provide email!");
            return false;
        }
        if (uname == "") {
            alert("Please provide username!");
            return false;
        }
        if (pwd == "") {
            alert("Please provide password!");
            return false;
        }
        if (cpwd == "") {
            alert("Please confirm password!");
            return false;
        }
        var atpos = emailID.indexOf("@");
        var dotpos = emailID.lastIndexOf(".");

        if (atpos < 1 || (dotpos - atpos < 2)) {
            alert("Please enter correct email ID")
            return false;
        }
        if (pwd.length < 2 || uname.length < 3) {
            alert("Please provide valid username or password!");
            return false;
        }
        if (pwd != cpwd) {
            alert("Password and confirm password not matching!");
            return false;
        }
        return (true);
    }

    render() {
        const buttons = ['Doctor', 'User']
        return (
            <View style={styles.container}>

                <View style={{ flex: 1, top: '5%' }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#954535', alignSelf: 'center' }}>MediPoint</Text>
                    <View>
                        <Input
                            placeholder='Email'
                            onChangeText={value => this.setState({ email: value })}
                            containerStyle={{ width: '80%', alignSelf: 'center', top: '35%' }}
                        />
                    </View>
                    <View>
                        <Input
                            placeholder='Username'
                            onChangeText={value => this.setState({ username: value })}
                            containerStyle={{ width: '80%', alignSelf: 'center', top: '35%' }}
                        />
                    </View>
                    <View>
                        <Input
                            placeholder='Password'
                            secureTextEntry={true}
                            onChangeText={value => this.setState({ password: value })}
                            containerStyle={{ width: '80%', alignSelf: 'center', top: '30%' }}
                        />
                    </View>
                    <View>
                        <Input
                            placeholder='Confirm Password'
                            secureTextEntry={true}
                            onChangeText={value => this.setState({ confirmPassword: value })}
                            containerStyle={{ width: '80%', alignSelf: 'center', top: '30%' }}
                        />
                    </View>
                    <View>
                        <ButtonGroup
                            onPress={this.updateIndex}
                            selectedIndex={this.state.selectedIndex}
                            buttons={buttons}
                            containerStyle={{ height: 30, top: 30, width: '60%', alignSelf: 'center' }}
                        />
                    </View>
                    <View style={{ top: '10%' }}>
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