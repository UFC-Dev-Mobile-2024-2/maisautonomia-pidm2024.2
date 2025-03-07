import * as React from 'react';
import { BottomNavigation, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

export default function BottomNavigationBar() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = React.useState(0);
  const theme = useTheme();

  const routes = [
    { key: 'Home', title: 'Home', icon: 'home' },
    { key: 'relatorio', title: 'Relatório', icon: 'file-document' },
    { key: 'arquivados', title: 'Arquivados', icon: 'archive' },
  ];

  const handleIndexChange = (index) => {
    setActiveTab(index);
    navigation.navigate(routes[index].key);
  };

  return (
    <View style={{
      height: 60, 
      width: '100%',
      backgroundColor: '#007AFF', 
      zIndex: 10
    }}>
      <BottomNavigation
        navigationState={{ index: activeTab, routes }}
        onIndexChange={handleIndexChange}
        renderScene={() => null}
        barStyle={{ backgroundColor: '#007AFF' }} 
        activeColor="#FFFFFF" 
        inactiveColor="#888888" 
        theme={{
          ...theme,
          colors: {
            ...theme.colors,
            primary: '#FFFFFF', 
            secondaryContainer: '#000000',
          },
        }}
      />
    </View>
  );
}
