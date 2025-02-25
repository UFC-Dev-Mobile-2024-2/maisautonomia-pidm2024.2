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

const Counter = () => {
    const [count, setCount] = useState(0);
  
    const increment = (value = 1) => {
      setCount((prev) => prev + value);
    };
  
    const decrement = (value = 1) => {
      setCount((prev) => (prev - value < 0 ? 0 : prev - value));
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Quantos comprimidos tem sua cartela?</Text>

        <View style={styles.counterRow}>
          <Button
            mode="contained"
            onPress={() => decrement()}
            style={styles.circleButton}
            contentStyle={styles.buttonContent}
            icon={() => <Icon name="minus" size={24} color="#FFF" />}
          />
  
          <View style={styles.countDisplay}>
            <Text style={styles.countText}>{count}</Text>
            <Text style={styles.countLabel}>comprimido(s)</Text>
          </View>
  
          <Button
            mode="contained"
            onPress={() => increment()}
            style={styles.circleButton}
            contentStyle={styles.buttonContent}
            icon={() => <Icon name="plus" size={24} color="#FFF" />}
          />
        </View>
      </View>
    );
  };
  