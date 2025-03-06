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
        <View style={styles.quickButtonsContainer}>
        <Button
          mode="contained"
          onPress={() => increment(5)}
          style={styles.quickButton}
          labelStyle={styles.quickButtonLabel}
        >
          +5
        </Button>
        <Button
          mode="contained"
          onPress={() => increment(10)}
          style={styles.quickButton}
          labelStyle={styles.quickButtonLabel}
        >
          +10
        </Button>
        <Button
          mode="contained"
          onPress={() => increment(15)}
          style={styles.quickButton}
          labelStyle={styles.quickButtonLabel}
        >
          +15
        </Button>
        <Button
          mode="contained"
          onPress={() => increment(30)}
          style={styles.quickButton}
          labelStyle={styles.quickButtonLabel}
        >
          +30
        </Button>
      </View>

      <Button
        mode="contained"
        onPress={() => {
        }}
        style={styles.addMedicationButton}
        labelStyle={styles.addMedicationButtonLabel}
      >
        Adicionar nova medicação
      </Button>
      </View>
    );
  };

  const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#F2F2F2',
      padding: 16,
    },
    container: {
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
      padding: 16,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 2 },
      elevation: 2,
      alignItems: 'center',
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 16,
      textAlign: 'center',
    },
    counterRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    circleButton: {
      backgroundColor: '#0597F2',
      borderRadius: 50,
      width: 50,
      height: 50,
      marginHorizontal: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContent: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    countDisplay: {
      alignItems: 'center',
      marginHorizontal: 8,
    },
    countText: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#333',
    },
    countLabel: {
      fontSize: 14,
      color: '#666',
    },
    quickButtonsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: 16,
    },
    quickButton: {
      backgroundColor: '#0597F2',
      borderRadius: 20,
      width: 40,
      height: 40,
      margin: 4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    quickButtonLabel: {
      color: '#FFF',
      fontSize: 12,
      fontWeight: '600',
    },
    addMedicationButton: {
      backgroundColor: '#0061A8',
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 16,
      marginTop: 8,
      alignSelf: 'center',
    },
    addMedicationButtonLabel: {
      color: '#FFF',
      fontSize: 16,
      fontWeight: '600',
    },
  });
  
  