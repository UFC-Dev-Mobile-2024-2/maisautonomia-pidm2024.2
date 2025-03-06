import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const InputMedicamento = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome do medicamento</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite aqui..."
        placeholderTextColor="#A0A0A0"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontFamily: "Roboto", 
    fontSize: 16,
    fontWeight: "medium",
    color: "#001133",
    marginBottom: 5,
    lineHeight: 24,
    letterSpacing: 0.15,
    
  },
  input: {
    width: 380,
    height:56,
    boxSizing: "border-box",
    borderWidth: 1,
    borderColor: "#001133",
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
  },
});

export default InputMedicamento;