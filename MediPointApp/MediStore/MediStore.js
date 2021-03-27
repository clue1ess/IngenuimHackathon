import React from 'react';
import { View, Button, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MedicineLogger from './MedicineLogger';
import DocumentsLogger from './DocumentsLogger';
// import { Container, Header, Title } from 'native-base';

const Stack = createStackNavigator();

const MediStoreHomePage = ({ navigation }) => {
    return (

        // <Container style={{ backgroundColor: '#ffff' }}>
        //     <Header style={{ backgroundColor: 'brown' }}>
        //         <Title style={{ textAlign: 'center', color: 'white', marginTop: 10, fontStyle: 'normal' }}>
        //             MediStore
        //         </Title>
        //     </Header>
        <View>
            {/* <Button
                title="Medicine Logger"
                onPress={() => navigation.navigate('MedicineLogger')}
            />
            <hr />
            <Button
                title="Documents Logger"
                onPress={() => navigation.navigate('DocumentsLogger')}
            /> */}
            <TouchableOpacity onPress={() => navigation.navigate('MedicineLogger')}>
                <Card>
                    <Card.Title>Medicine Logger</Card.Title>
                    
                </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('DocumentsLogger')}>
                <Card>
                    <Card.Title>Documents Logger</Card.Title>
                    
                </Card>
            </TouchableOpacity>
        </View>

    );
}


const MediStore = () => {
    return (
        <View>
            {<NavigationContainer>
                <Stack.Navigator initialRouteName="MediStore">
                    <Stack.Screen name="MediStore" component={MediStoreHomePage} />
                    <Stack.Screen name="MedicineLogger" component={MedicineLogger} />
                    <Stack.Screen name="DocumentsLogger" component={DocumentsLogger} />
                </Stack.Navigator>
            </NavigationContainer>}
            <MediStoreHomePage />
            {/* <MedicineLogger /> */}
        </View>
    );
}

export default MediStore;