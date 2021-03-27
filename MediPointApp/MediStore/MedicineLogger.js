import React, { Component } from 'react'
import { Card, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

const list = [
    {
        medicine: 'Medicine1',
        prescription: 'Prescription1',
        notes: 'Notes1'
    },
    {
        medicine: 'Medicine2',
        prescription: 'Prescription2',
        notes: 'Notes2'
    },
    {
        medicine: 'Medicine3',
        prescription: 'Prescription3',
        notes: 'Notes3'
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
                    <Button
                        icon={{ type: 'font-awesome', name: 'plus', color: 'blue' }}
                        type='solid'
                        buttonStyle={{ backgroundColor: 'orange' }}
                        containerStyle={{alignSelf:'flex-end', borderRadius: 100, marginRight: 10}}
                        onPress={()=>{this.setState({show: true})}}
                    />
                    

                {
                    this.state.show &&
                    <View>
                        <TextInput style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="Medicine Name"
                            placeholderTextColor="#9a73ef"
                            autoCapitalize="none"
                            onChangeText={this.handleName} 
                        />
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
                }       
                {
                    list.map((l, i)=>(
                        <Card>
                            <Card.Title>Medicine: { l.medicine }</Card.Title>
                            <Card.Divider/>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{flex: 5}}>
                                        <Text style={{marginBottom: 10}}>
                                            Prescription: { l.prescription }
                                        </Text>
                                        <Text style={{marginBottom: 10}}>
                                            Notes: { l.notes }
                                        </Text>
                                    </View>
                                    <View style={{flex: 1}}>
                                        <Button
                                            icon={{ type: 'font-awesome', name: 'trash', color: 'red' }}
                                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                            type='clear'
                                            containerStyle={{alignSelf: 'flex-end'}}
                                            onPress={()=> this.handleDelete(l.medicine, l.prescription, l.notes)}
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