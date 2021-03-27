import React, { Component } from 'react'
import { Card, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

const medicine="Medicine"
const pres="XYZ"
const notes="XYZ"

class MedicineLogger extends Component {
    state = {
        name: '',
        pres: '',
        notes: '',
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
    handleDelete = () => {
        alert('Delete');
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
                <Card>
                    <Card.Title>Medicine: { medicine }</Card.Title>
                    <Card.Divider/>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flex: 5}}>
                                <Text style={{marginBottom: 10}}>
                                    Prescription: {pres}
                                </Text>
                                <Text style={{marginBottom: 10}}>
                                    Notes: {notes}
                                </Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Button
                                    icon={{ type: 'font-awesome', name: 'trash', color: 'red' }}
                                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                    type='clear'
                                    containerStyle={{alignSelf: 'flex-end'}}
                                    onPress={
                                        this.handleDelete
                                    }
                                />
                            </View>
                        </View>                       
                        
                </Card>
                <Card>
                    <Card.Title>Medicine: { medicine }</Card.Title>
                    <Card.Divider/>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flex: 5}}>
                                <Text style={{marginBottom: 10}}>
                                    Prescription: {pres}
                                </Text>
                                <Text style={{marginBottom: 10}}>
                                    Notes: {notes}
                                </Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Button
                                    icon={{ type: 'font-awesome', name: 'trash', color: 'red' }}
                                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                    type='clear'
                                    containerStyle={{alignSelf: 'flex-end'}}
                                    onPress={
                                        this.handleDelete
                                    }
                                />
                            </View>
                        </View>                       
                        
                </Card>

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