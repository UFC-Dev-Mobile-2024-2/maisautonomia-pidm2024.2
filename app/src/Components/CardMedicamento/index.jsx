import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { Counter } from '../CounterQuantidadeComprimidos/Counter';

export default function MedicationCard({ name, onEditPress }) {
  return (
    <Card style={styles.medicationCard}>
      <Card.Content>
        <View style={styles.cardHeader}>
          <Text style={styles.medicationTitle}>{name}</Text>
          <Button
            mode="contained"
            buttonColor="#FF9800"
            textColor="#FFF"
            compact
            style={styles.editButton}
            icon="pencil"
            onPress={onEditPress}
          >
            Editar
          </Button>
        </View>

        <View style={styles.infoRow}>
          <Button icon="calendar-clock" mode="outlined" textColor="#000" style={styles.whiteButton}>
            Frequência
          </Button>
          <Button icon="clock-outline" mode="outlined" textColor="#000" style={styles.whiteButton}>
            Horário
          </Button>
        </View>

        <Counter />
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  medicationCard: {
    backgroundColor: '#0057FF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  medicationTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  editButton: {
    borderRadius: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  whiteButton: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#000',
  },
});