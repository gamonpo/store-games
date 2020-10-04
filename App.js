import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Routes from './src/routes' 
import { LogBox } from 'react-native';

export default function App() {
  return (
    <>
      {LogBox.ignoreAllLogs(true)}
      <StatusBar backgroundColor="#000014"/>
      <Routes/>
    </>
  )
}

