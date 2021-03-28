import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements'
import { baseUrl } from '../../config';


export default class Login extends React.Component {
    state = {
        username: '',
        password: ''
    };
    login = () => {
        let valid = false
        valid = this.validate(this.state.username, this.state.password);
        if (valid === false) {
            return false
        }
        else {
            this.props.navigation.navigate('Home');
        }
    }
    getResponseFromServer(uname, pwd) {
        console.log("login");
        var creds = {
            "username": uname,
            "password": pwd
        }

        return fetch(baseUrl + 'users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(creds)
        })
            .then(response => response.json())
            .then(response => {
                if (response.success) {
                    console.log("success");
                    localStorage.setItem('token', response.token);
                    localStorage.setItem('creds', JSON.stringify(creds));
                    console.log(localStorage.getItem('token'));
                    return true;
                }
                else {
                    var error = new Error('Error ' + response.status);
                    error.response = response;
                    console.log(error);
                    throw error;
                }
            })

            .catch((err) => console.log(err));

    }

    validate(uname, pwd) {

        if (uname == "") {
            alert("Please provide username!");
            return false;
        }
        if (pwd == "") {
            alert("Please provide password!");
            return false;
        }
        if (pwd.length < 2 || uname.length < 3) {
            alert("Please provide valid username or password!");
            return false;
        }
        return this.getResponseFromServer(uname, pwd);
    }
    componentDidMount() {
        this.setState({
            username: '',
            password: ''
        })
    }
    render() {

        return (
            <View style={styles.container}>

                <View style={{ flex: 1, top: '5%' }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#954535', alignSelf: 'center' }}>MediPoint</Text>

                    <View>
                        <Input
                            placeholder='Username'
                            leftIcon={{ type: 'font-awesome', name: 'user', color: 'gray' }}
                            onChangeText={value => this.setState({ username: value })}
                            containerStyle={{ width: '80%', alignSelf: 'center', top: '35%' }}

                        />
                    </View>
                    <View>
                        <Input
                            placeholder='Password'
                            leftIcon={{ type: 'font-awesome', name: 'lock', color: 'gray' }}
                            secureTextEntry={true}
                            onChangeText={value => this.setState({ password: value })}
                            containerStyle={{ width: '80%', alignSelf: 'center', top: '30%' }}
                        />
                    </View>
                    <View style={{ top: '10%' }}>
                        <Button
                            title="LOGIN"
                            onPress={this.login}
                            buttonStyle={styles.loginbuttonStyle}
                        />
                    </View>
                    <View style={{ top: '15%' }}>
                        <Button
                            title="REGISTER"
                            onPress={() => this.props.navigation.navigate('Register')}
                            buttonStyle={styles.registerbuttonStyle}
                            type="outline"
                        />
                    </View>
                    <View>

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