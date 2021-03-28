import React from 'react';
import MainComponent from './components/MainComponent';
import 'localstorage-polyfill';

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