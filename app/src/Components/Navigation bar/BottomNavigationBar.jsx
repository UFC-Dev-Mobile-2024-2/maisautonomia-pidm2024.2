import * as React from 'react';
import { BottomNavigation, Text, useTheme } from 'react-native-paper';

const HomeScreen = () => <Text>Home</Text>;
const ReportScreen = () => <Text>Relatório</Text>;
const ArchivedScreen = () => <Text>Arquivados</Text>;

const BottomNavigationBar = () => {
    const [activeTab, setActiveTab] = React.useState(0);

    const routes = [
        { key: 'home', title: 'Home', icon: 'home'},
        { key: 'relatorio', title: 'Relatório', icon: 'file-documente'},
        { key: 'arquivados', title: 'Arquivados', icon: 'archive'},
    ];

    const renderScene = BottomNavigation.SceneMap({
        home: HomeScreen,
        relatorio: ReportScreen,
        arquivados: ArchivedScreen,
    });

    const theme = useTheme();

    return (
        <BottomNavigation
        navigationState = {{ index: activeTab, routes}}
        onIndexChange = {setActiveTab}
        renderScene = {renderScene}
        barStyle = {{ backgroundColor: '#E7F5FE' }}
        theme = {{
            ...theme,
            colors: {
                ...theme.colors,
                primary: '#0597F2',
                accent: '#0597F2', 
            },
            }}
        />
    );
};