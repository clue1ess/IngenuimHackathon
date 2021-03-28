import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableHighlight } from 'react-native';

function Item({ item, props }) {
    return (
        <View style={styles.listItem}>
            <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => props.navigation.navigate(item.id)}>
                <View style={styles.container}>
                    <Image style={{ width: 70, height: 70 }} source={item.photo} resizeMode={'cover'} />
                    <Text style={styles.title}>{item.name}</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
}

export default class Home extends React.Component {
    state = {
        data: [
            {
                "name": "MediCure",
                "id": "MediCure",
                "photo": require('../assets/MediCure.jpg')
            },
            {
                "name": "MediPredict",
                "id": "MediPredict",
                "photo": require('../assets/MediPredict.png')
            },
            {
                "name": "MediPedia",
                "id": "MediPedia",
                "photo": require('../assets/MediPedia.jpg')
            },
            {
                "name": "MediAppoint",
                "id": "MediAppoint",
                "photo": require('../assets/MediAppoint.png')
            },
            {
                "name": "MediStore",
                "id": "MediStore",
                "photo": require('../assets/MediStore.png')
            }
        ]
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#954535', alignSelf: 'center', marginBottom: 10 }}>MediPoint</Text>

                <FlatList
                    vertical
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    style={{ flex: 1 }}
                    data={this.state.data}
                    renderItem={({ item }) => <Item item={item} props={this.props} />}
                    keyExtractor={item => item.id}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
    },
    listItem: {
        margin: 10,
        padding: 10,
        width: "80%",
        flex: 1,
        backgroundColor: '#edc9af',
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        borderRadius: 5
    }
});