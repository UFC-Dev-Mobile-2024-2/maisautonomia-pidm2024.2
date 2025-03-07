import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import LoginScreen from './app/src/Components/Login/LoginScreen.jsx';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LoginScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
