import React, { useState} from 'react';
import { View, Text } from 'react-native';
import {Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';

export default function App() {
    return (
      <View style={styles.appContainer}>
        <Counter />
      </View>
    );
} 
