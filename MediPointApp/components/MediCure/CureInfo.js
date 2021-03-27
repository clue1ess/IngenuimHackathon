import { StyleSheet, TextInput, Text, View, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { useState } from 'react';
import React from 'react';
import Header from '../Header/header';
import { render } from 'react-dom';


export default class CureInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: ""
        };
    }

    static navigationOptions = {
        title: 'CureInfo'
    };

    fetchDesc({ id }) {
        const token = "Bearer " + localStorage.getItem('token');
        return fetch('http://localhost:3000/cures/' + `${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": token
            },
            credentials: "same-origin"
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                this.setState({ description: response })
                // this.setState({ filteredDiseases: response })
            })
    }
    render() {
        const disease = JSON.stringify(this.props.navigation.getParam('disease', ''));
        const description = this.fetchDisc(this.props);
        return (
            <View style={{ flex: 1, overflow: 'hidden' }}>
                <View style={{ zIndex: 9 }}>
                    <Header heading="MediPedia" />
                </View>
                <View style={styles.headerStyle}>
                    <Text style={styles.title}>{this.state.description.name}</Text>
                </View>
                <View style={styles.cardContainer}>
                    <View style={{ paddingBottom: 50, paddingTop: 10 }}>
                        <Text style={{ paddingTop: 30, textAlign: 'justify' }}>
                            {this.state.description.cure} </Text>
                    </View>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    cardContainer: {
        top: 20,
        padding: 20,
        width: '100%',
        overflow: 'hidden'
    },
    headerStyle: {
        backgroundColor: '#fff',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        left: 0,
        right: 0,
        top: 60,
        zIndex: 9
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'cambria'
    }
})
