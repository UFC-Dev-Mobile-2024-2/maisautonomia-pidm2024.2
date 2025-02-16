import React from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {
  // Função que será chamada ao pressionar o botão
  const handleButtonPress = () => {
    console.log('Botão pressionado!'); // Log no console
  };

  //oioioioi
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Exemplo de console.log</Text>
      <Button
        title="Clique aqui"
        onPress={handleButtonPress
} // Chama a função ao pressionar o botão
      />
    </View>
  );
};

export default App;