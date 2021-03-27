import React from 'react';
import MainComponent from './components/MainComponent';
// import Auth from './components/Auth/Home';
import { View, Text } from 'react-native';
import 'localstorage-polyfill';
// import Loading from './screens/Loading';

export default function App() {
  return (
    <MainComponent />
    // <View><Text>Hi</Text></View>
  );
}

const styles = {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',

};
// console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];