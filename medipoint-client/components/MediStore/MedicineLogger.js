import React, { Component } from 'react'
import { Card, Button } from 'react-native-elements'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

const list = [
    {
        medicine: 'Paracetamol',
        prescription: 'Fever and common cold',
        notes: 'After lunch and dinner'
    },
    {
        medicine: 'Dextromethorphan',
        prescription: 'Cough',
        notes: 'Three times a day'
    },
    {
        medicine: 'Azithromycin',
        prescription: 'Bacterial Oral infection',
        notes: 'After Lunch'
    },
]

class MedicineLogger extends Component {
    state = {
        name: '',
        pres: '',
        notes: '',
        medicines: list,
        show: false
    }
    static navigationOptions = {
        title: 'MedicineLogger'
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
        var medicine = {
            medicine: name,
            prescription: pres,
            notes: notes

        }
        this.setState({ medicines: [...this.state.medicines, medicine] })
        this.setState({
            show: false
        });
    }
    handleDelete = (medicine, pres, notes) => {
        const newList = this.state.medicines.filter((item) => item.medicine !== medicine);
        // alert(newList.json());
        this.setState({
            medicines: newList
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <Button
                    icon={{ type: 'font-awesome', name: 'plus', color: 'white' }}
                    type='solid'
                    buttonStyle={{ backgroundColor: 'green' }}
                    containerStyle={{ alignSelf: 'flex-end', borderRadius: 100, marginRight: 10 }}
                    onPress={() => { this.setState({ show: true }) }}
                />


                {
                    this.state.show &&
                    <View>
                        <TextInput style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="Medicine Name"
                            placeholderTextColor="grey"
                            autoCapitalize="none"
                            onChangeText={this.handleName}
                        />
                        <TextInput style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="Prescription"
                            placeholderTextColor="grey"
                            autoCapitalize="none"
                            onChangeText={this.handlePres} />
                        <TextInput style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="Notes"
                            placeholderTextColor="grey"
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
                }
                {
                    this.state.medicines.map((l, i) => (
                        <Card>
                            <Card.Title>Medicine: {l.medicine}</Card.Title>
                            <Card.Divider />
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 5 }}>
                                    <Text style={{ marginBottom: 10 }}>
                                        Prescription: {l.prescription}
                                    </Text>
                                    <Text style={{ marginBottom: 10 }}>
                                        Notes: {l.notes}
                                    </Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Button
                                        icon={{ type: 'font-awesome', name: 'trash', color: 'red' }}
                                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                                        type='clear'
                                        containerStyle={{ alignSelf: 'flex-end' }}
                                        onPress={() => this.handleDelete(l.medicine, l.prescription, l.notes)}
                                    />
                                </View>
                            </View>

                        </Card>

                    ))
                }

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
        borderColor: 'black',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#b7410e',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white'
    }
})