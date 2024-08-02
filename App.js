/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/layouts/Home';
import { List } from './src/layouts/Detalis';
import { List100 } from './src/layouts/Detalis100';
import { List200 } from './src/layouts/Detalis200';
import { List300 } from './src/layouts/Detalis300';
import { List400 } from './src/layouts/Detalis400';
import { List500 } from './src/layouts/Detalis500';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    // es un div por defecto es flex
 
    <NavigationContainer   >
    <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle: {
          backgroundColor: '#D0342F',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Home" component={Home} options={{ title: 'HTTP Cats' }}/>
        <Stack.Screen name="List" component={List} options={{ title: 'Tipos de HTTPS' }}/>
        <Stack.Screen name="Code100" component={List100} options={{ title: 'Tipos de Codigo 1xx'}}/>
        <Stack.Screen name="Code200" component={List200} options={{ title: 'Tipos de Codigo 2xx'}}/>
        <Stack.Screen name="Code300" component={List300} options={{ title: 'Tipos de Codigo 3xx'}}/>
        <Stack.Screen name="Code400" component={List400} options={{ title: 'Tipos de Codigo 4xx'}}/>
        <Stack.Screen name="Code500" component={List500} options={{ title: 'Tipos de Codigo 5xx'}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}


