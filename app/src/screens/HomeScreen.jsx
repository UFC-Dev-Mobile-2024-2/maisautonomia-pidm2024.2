import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import MedicationCard from '../Components/CardMedicamento/index';

export default function HomeScreen() {
  const [medications, setMedications] = useState([]);

  useEffect(() => {
    fetch('https://67ca653d102d684575c534c5.mockapi.io/medications')
      .then((response) => response.json())
      .then((data) => setMedications(data))
      .catch((error) => console.error('Erro ao buscar medicamentos:', error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página Inicial</Text>

      <FlatList
        data={medications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MedicationCard
            name={item.name}
            remainingPills={item.remainingPills}
            onEditPress={() => console.log(`Editar ${item.name}`)}
          />
        )}
      />

      <Button
        mode="contained"
        buttonColor="#007AFF"
        textColor="#FFF"
        style={styles.addButton}
        icon="plus"
      >
        Adicionar medicamento
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
});
