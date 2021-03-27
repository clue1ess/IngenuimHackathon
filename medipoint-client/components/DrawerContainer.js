import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import MenuButton from './MenuButton';

export default class DrawerContainer extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.content}>
                <View style={styles.container}>
                    <MenuButton
                        title="Home"
                        source={require('../assets/Home.png')}
                        onPress={() => {
                            navigation.navigate('Home');
                            navigation.closeDrawer();
                        }}
                    />
                    <MenuButton
                        title="User Proile"
                        source={require('../assets/Profile.jpeg')}
                        onPress={() => {
                            navigation.navigate('Profile');
                            navigation.closeDrawer();
                        }}
                    />
                    <MenuButton
                        title="MediPedia"
                        source={require('../assets/MediPedia.jpg')}
                        onPress={() => {
                            navigation.navigate('MediPedia');
                            navigation.closeDrawer();
                        }}
                    />
                    <MenuButton
                        title="MediCure"
                        source={require('../assets/MediCure.jpg')}
                        onPress={() => {
                            navigation.navigate('MediCure');
                            navigation.closeDrawer();
                        }}
                    />
                    <MenuButton
                        title="MediPredict"
                        source={require('../assets/MediPredict.png')}
                        onPress={() => {
                            navigation.navigate('MediPredict');
                            navigation.closeDrawer();
                        }}
                    />
                    <MenuButton
                        title="MediStore"
                        source={require('../assets/MediStore.png')}
                        onPress={() => {
                            navigation.navigate('MediPredict');
                            navigation.closeDrawer();
                        }}
                    />
                    <MenuButton
                        title="MediAppoint"
                        source={require('../assets/MediAppoint.png')}
                        onPress={() => {
                            navigation.navigate('MediAppoint');
                            navigation.closeDrawer();
                        }}
                    />
                    <MenuButton
                        title="Logout"
                        source={require('../assets/Logout.jpg')}
                        onPress={() => {
                            navigation.navigate('Logout');
                            navigation.closeDrawer();
                        }}
                    />
                </View>
            </View>
        );
    }
}

DrawerContainer.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired
    })
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 20,
        // alignItems: 'flex-start',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        // alignItems: 'flex-start',
        paddingHorizontal: 20,
        backgroundColor: "#f7e7ce"
    }
});