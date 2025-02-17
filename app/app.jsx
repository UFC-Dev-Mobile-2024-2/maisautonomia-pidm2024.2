import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import PaginaInicial from './src/screens/PaginaInicial';

export default function App() {
  return (
    <PaperProvider>
      <PaginaInicial />
    </PaperProvider>
  );
}
