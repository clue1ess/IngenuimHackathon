import { StyleSheet, TextInput, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { baseUrl } from '../../config';
import { withNavigationFocus } from 'react-navigation';


class DiseasesInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: ""
        };
    }

    static navigationOptions = {
        title: 'DiseasesInfo'
    };

    fetchDesc(id) {
        const token = "Bearer " + localStorage.getItem('token');
        return fetch(baseUrl + 'diseases/' + id, {
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
            })
    }
    render() {
        const disease = this.props.navigation.getParam('disease', '');
        const description = this.fetchDesc(disease);
        return (
            !this.props.isFocused ? null : (
                <View style={{ flex: 1, overflow: 'hidden' }}>
                    <View style={styles.headerStyle}>
                        <Text style={styles.title}>
                            {this.state.description.name}
                        </Text>
                    </View>
                    <View style={styles.cardContainer}>
                        <View style={{ paddingBottom: 50, paddingTop: 10 }}>
                            <Text style={{ paddingTop: 30, textAlign: 'justify' }}>
                                {this.state.description.info}
                            </Text>
                        </View>
                    </View>
                </View>
            )
        );
    }

}

const styles = StyleSheet.create({
    cardContainer: {
        top: 1,
        padding: 20,
        width: '100%',
        overflow: 'hidden'
    },
    headerStyle: {

        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        left: 0,
        right: 0,
        top: 20,
        zIndex: 9
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#954535'
    }
})
export default withNavigationFocus(DiseasesInfo);
