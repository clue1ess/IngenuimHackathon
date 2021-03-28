import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Avatar } from 'react-native-elements'

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "Enter Name",
            lastname: "",
            dob: "Enter DOB",
            city: "Enter City",
            contact: "Enter Contact No.",
            gender: "Enter Gender",
            email: "gouri@gmail.com",
            username: "gmn79"
        };
    }

    static navigationOptions = {
        title: 'Profile'
    };

    save = () => {
        console.log("Saved")
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ top: 50 }}>
                    <Avatar
                        size="large"
                        rounded
                        icon={{ name: 'user', type: 'font-awesome', color: 'lightgray' }}
                        containerStyle={{ alignSelf: 'center', backgroundColor: 'gray' }}
                    />
                </View>
                <View>
                    <Input
                        value={this.state.firstname + " " + this.state.lastname}
                        onChangeText={(value) => {
                            res = value.split(" ");
                            this.setState({ firstname: res[0], lastname: res[1] })
                        }}
                        inputContainerStyle={{ width: '70%', top: 80, alignSelf: 'center' }}
                    />
                </View>
                <View>
                    <Input
                        value={this.state.username}
                        disabled
                        inputContainerStyle={{ width: '70%', top: 80, alignSelf: 'center' }}
                    />
                </View>
                <View>
                    <Input
                        value={this.state.dob}
                        onChangeText={(value) => {
                            this.setState({ dob: value })
                        }}
                        inputContainerStyle={{ width: '70%', top: 80, alignSelf: 'center' }}
                    />
                </View>
                <View>
                    <Input
                        value={this.state.gender}
                        disabled
                        inputContainerStyle={{ width: '70%', top: 80, alignSelf: 'center' }}
                    />
                </View>
                <View>
                    <Input
                        value={this.state.email}
                        disabled
                        inputContainerStyle={{ width: '70%', top: 80, alignSelf: 'center' }}
                    />
                </View>
                <View>
                    <Input
                        value={this.state.city}
                        onChangeText={(value) => {
                            this.setState({ city: value })
                        }}
                        inputContainerStyle={{ width: '70%', top: 80, alignSelf: 'center' }}
                    />
                </View>
                <View>
                    <Input
                        value={this.state.contact}
                        onChangeText={(value) => {
                            this.setState({ dob: value })
                        }}
                        inputContainerStyle={{ width: '70%', top: 80, alignSelf: 'center' }}
                    />
                </View>

                <View style={{ top: 80 }}>
                    <Button
                        title="Check Appointments"
                        onPress={() => this.props.navigation.navigate('CheckAppointments')}
                        buttonStyle={styles.buttonStyle}
                        type='clear'
                    />
                </View>
                {/* <View style={{ top: 90 }}>
                    <Button
                        title="Save Changes"
                        onPress={this.save}
                        buttonStyle={styles.loginbuttonStyle}
                    />
                </View> */}
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
        alignSelf: 'center',
        backgroundColor: "#e7feff"
    }

})