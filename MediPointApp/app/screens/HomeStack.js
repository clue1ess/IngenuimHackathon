import * as React from 'react';
import { View, Text, BackHandler, TouchableOpacity } from 'react-native';
import { Button, Card } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MediPredict from './MediPredict';
import MediPedia from './MediPedia';
import DiseasesInfo from './DiseasesInfo';
import Register from './Register';
import Login from './Login';
import CheckAppointments from './CheckAppointments';
import Profile from './Profile';

class HomeScreen extends React.Component {
    componentWillMount(){
        BackHandler.addEventListener('hardwareBackPress', function () {
            return true;
          });
    }
    render(){
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                
                <View style={{width:'90%', flex: 2}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MediPedia')}>
                        <Card containerStyle={{backgroundColor: 'blue'}}>
                            <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold', alignSelf: 'center'}}>MediAppoint</Text>
                        </Card>
                    </TouchableOpacity>
                </View>      
                <View style={{width:'90%', flex: 2}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MediPredict')}>
                        <Card containerStyle={{backgroundColor: 'orange'}}>
                            <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold', alignSelf: 'center'}}>MediPredict</Text>
                        </Card>
                    </TouchableOpacity>
                </View>
                <View style={{width:'90%', flex: 2}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MediPedia')}>
                        <Card containerStyle={{backgroundColor: 'green'}}>
                            <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold', alignSelf: 'center'}}>MediCure</Text>
                        </Card>
                    </TouchableOpacity>
                </View>      
                <View style={{width:'90%', flex: 2}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MediPedia')}>
                        <Card containerStyle={{backgroundColor: 'pink'}}>
                            <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold', alignSelf: 'center'}}>MediPedia</Text>
                        </Card>
                    </TouchableOpacity>
                </View>       
            </View>
        );
    }    
}

const Stack = createStackNavigator();
function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
            name="Profile" 
            component={Profile} 
            options={{
                title: "Profile",
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold'
                },
                headerLeft: null,
            }}
        />
        <Stack.Screen 
            name="Login" 
            component={Login} 
            options={{
                title: 'Login',
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold'
                },
            }}
        />
        <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
                title: 'Home',
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold'
                },
                headerLeft: null,
            }}
        />
        <Stack.Screen 
            name="CheckAppointments" 
            component={CheckAppointments} 
            options={{
                title: "Appointments",
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold'
                },
                headerLeft: null,
            }}
        />
        <Stack.Screen 
            name="Register" 
            component={Register} 
            options={{
                title: 'Register',
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold'
                },
            }}
        />
        <Stack.Screen 
            name="MediPredict" 
            component={MediPredict} 
            options={{
                title: 'MediPredict',
                headerStyle: {
                  backgroundColor: '#f4511e',
                  position: 'fixed',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold'
                },
            }}
        />
        <Stack.Screen 
            name="MediPedia" 
            component={MediPedia} 
            options={{
                title: 'MediPedia',
                headerStyle: {
                  backgroundColor: '#f4511e',
                  position: 'fixed',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold'
                },
            }}
        />
        <Stack.Screen 
            name="DiseasesInfo" 
            component={DiseasesInfo} 
            options={{
                title: 'MediPedia',
                headerStyle: {
                  backgroundColor: '#f4511e',
                  position: 'fixed',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold'
                },
            }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default HomeStack;