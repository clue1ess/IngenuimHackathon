import React from 'react';
import MainComponent from './components/MainComponent';
import Auth from './components/Auth/Home';
import 'localstorage-polyfill';
// import Loading from './screens/Loading';

export default function App() {
  return (
    <MainComponent />
  );
}

const styles = {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',

};
