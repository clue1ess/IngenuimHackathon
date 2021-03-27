import React from 'react';
import { View, Button, Text } from 'react-native';
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
            <Text>Hi</Text>
        </View>

    );
}


const MediStore = () => {
    return (
        <View>
            {/* <NavigationContainer>
                <Stack.Navigator initialRouteName="MediStore">
                    <Stack.Screen name="MediStore" component={MediStoreHomePage} />
                    <Stack.Screen name="MedicineLogger" component={MedicineLogger} />
                    <Stack.Screen name="DocumentsLogger" component={DocumentsLogger} />
                </Stack.Navigator>
            </NavigationContainer> */}
            <MediStoreHomePage />
            {/* <MedicineLogger /> */}
        </View>
    );
}

export default MediStore;