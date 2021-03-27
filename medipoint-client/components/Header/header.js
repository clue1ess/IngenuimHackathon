import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';


function Header(props) {
    const [title, settitle] = useState('MediPoint')
    return (
        <View style={styles.headerStyle}>
            <Text style={styles.title}>{props.heading}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#ee561f',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        // position: 'fixed',
        left: 0,
        right: 0,
        top: 0
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default Header;