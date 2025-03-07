import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Button, RadioButton } from "react-native-paper";

export default function AddMedicationScreen() {
  const [medicationName, setMedicationName] = useState("");
  const [frequency, setFrequency] = useState("daily");
  const [endOption, setEndOption] = useState("cartela");
  const [selectedHour, setSelectedHour] = useState("00");
  const [selectedMinute, setSelectedMinute] = useState("00");
  const [pillCount, setPillCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome do medicamento</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite aqui..."
        value={medicationName}
        onChangeText={setMedicationName}
      />

      <Text style={styles.label}>Com que frequência?</Text>
      <View style={styles.frequencyContainer}>
        <TouchableOpacity style={styles.frequencyButton} onPress={() => setFrequency("daily")}>
          <Text style={[styles.frequencyText, frequency === "daily" && styles.selectedText]}>Diariamente</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.frequencyButton} onPress={() => setFrequency("intercalado")}>
          <Text style={[styles.frequencyText, frequency === "intercalado" && styles.selectedText]}>Intercalado</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.disabledButton}>
          <Text style={styles.disabledText}>A cada 2 dias</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Quando finaliza o medicamento?</Text>
      <RadioButton.Group onValueChange={setEndOption} value={endOption}>
        <View style={styles.radioContainer}>
          <RadioButton value="cartela" />
          <Text>No fim da cartela</Text>
        </View>
        <View style={styles.radioContainer}>
          <RadioButton value="data" />
          <Text>No dia </Text>
          <TextInput style={styles.dateInput} placeholder="dd/mm/aaaa" />
        </View>
        <View style={styles.radioContainer}>
          <RadioButton value="continuo" />
          <Text>Tratamento contínuo</Text>
        </View>
      </RadioButton.Group>

      <View style={styles.timeContainer}>
        <Text style={styles.label}>Horário</Text>
        <View style={styles.timeBox}>
          <Text style={styles.timeText}>{selectedHour}</Text>
        </View>
        <Text>:</Text>
        <View style={styles.timeBox}>
          <Text style={styles.timeText}>{selectedMinute}</Text>
        </View>
      </View>

      <Text style={styles.label}>Quantos comprimidos tem sua cartela?</Text>
      <View style={styles.pillCounter}>
        <TouchableOpacity onPress={() => setPillCount(Math.max(0, pillCount - 1))} style={styles.counterButton}>
          <Text style={styles.counterText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.pillCountText}>{pillCount}</Text>
        <TouchableOpacity onPress={() => setPillCount(pillCount + 1)} style={styles.counterButton}>
          <Text style={styles.counterText}>+</Text>
        </TouchableOpacity>
      </View>

      <Button mode="contained" buttonColor="#007AFF" textColor="#FFF" style={styles.addButton}>
        Adicionar nova medicação
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  frequencyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  frequencyButton: {
    borderWidth: 1,
    borderColor: "#007AFF",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  frequencyText: {
    color: "#007AFF",
  },
  selectedText: {
    fontWeight: "bold",
  },
  disabledButton: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#E0E0E0",
  },
  disabledText: {
    color: "#888",
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  dateInput: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 5,
    padding: 5,
    width: 100,
    marginLeft: 10,
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  timeBox: {
    borderWidth: 1,
    borderColor: "#007AFF",
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5,
    minWidth: 40,
    alignItems: "center",
  },
  timeText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  pillCounter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  counterButton: {
    backgroundColor: "#007AFF",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
  counterText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  pillCountText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  addButton: {
    marginTop: 20,
    borderRadius: 5,
    paddingVertical: 10,
  },
});