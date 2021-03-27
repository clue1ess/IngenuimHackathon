import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class MedicineLogger extends Component {
    state = {
        name: '',
        pres: '',
        notes: ''
    }
    handleName = (text) => {
        this.setState({ name: text })
    }
    handlePres = (text) => {
        this.setState({ pres: text })
    }
    handleNotes = (text) => {
        this.setState({ notes: text })
    }
    handleSubmit = (name, pres, notes) => {
        alert(name + pres + notes);
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Medicine Name"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleName} />
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Prescription"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handlePres} />
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Notes"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleNotes} />



                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={
                        () => this.handleSubmit(this.state.name, this.state.pres, this.state.notes)
                    }>
                    <Text style={styles.submitButtonText}> Add </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default MedicineLogger;

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white'
    }
})