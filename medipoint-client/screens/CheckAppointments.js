import React, { Component } from 'react'
import { Card } from 'react-native-elements'
import { View, Text, StyleSheet } from 'react-native'

const list = [
    {
        name: 'Dr. Maya Bose',
        timing: '11:00-11:30',
        hospital: 'Aaayu Hospital'
    }
]

class CheckAppointments extends Component {
    state = {
        name: '',
        pres: '',
        notes: '',
        medicines: list,
        show: false
    }
    static navigationOptions = {
        title: 'CheckAppointments'
    };

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
        this.setState({
            show: false
        });
    }
    handleDelete = (medicine, pres, notes) => {
        alert(medicine + pres + notes);
    }
    render() {
        return (
            <View style={styles.container}>

                {
                    list.map((l, i) => (
                        <Card>
                            <Card.Title>Hospital: {l.hospital}</Card.Title>
                            <Card.Divider />
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 5 }}>
                                    <Text style={{ marginBottom: 10 }}>
                                        Doctor Name: {l.name}
                                    </Text>
                                    <Text style={{ marginBottom: 10 }}>
                                        Timing: {l.timing}
                                    </Text>
                                </View>

                            </View>

                        </Card>

                    ))
                }

            </View>
        )
    }
}
export default CheckAppointments;

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