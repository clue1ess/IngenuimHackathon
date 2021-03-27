import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, TouchableHighlight } from 'react-native';

function Item({ item, props }) {
    return (
        <View style={styles.listItem}>
            <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => props.navigation.navigate(item.id)}>
                <View style={styles.container}>
                    <Image style={styles.photo} source={{ uri: item.photo }} />
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
                "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6"
            },
            {
                "name": "MediPredict",
                "id": "MediPredict",
                "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg"
            },
            {
                "name": "MediPedia",
                "id": "MediPedia",
                "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/68.jpg"
            },
            {
                "name": "MediAppoint",
                "id": "MediAppoint",
                "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/65.jpg"
            }
        ]
    }


    render() {
        return (
            <View style={styles.container}>
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
        backgroundColor: '#F7F7F7',
        marginTop: 60
    },
    listItem: {
        margin: 10,
        padding: 10,
        backgroundColor: "#FFF",
        width: "80%",
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: 5
    }
});