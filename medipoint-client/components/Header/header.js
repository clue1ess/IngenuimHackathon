import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';


function Header(props) {

    return (
        <View style={styles.headerStyle}>
            <Image style={{ width: 70, height: 70 }} source={require('../../assets/Logo/MediPoint.png')} resizeMode={'cover'} />
        </View>
    );
}

const styles = StyleSheet.create({
    headerStyle: {
        // backgroundColor: '#ee561f',
        // height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        // position: 'fixed',
        left: 0,
        right: 0,
        top: 0
    }
    // },
    // title: {
    //     color: '#fff',
    //     fontSize: 18,
    //     fontWeight: 'bold'
    // }
})

export default Header;