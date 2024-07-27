/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/layouts/Home';
import { List } from './src/layouts/Detalis';
import Cards from './src/components/card';
import { List100 } from './src/layouts/Detalis100';
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
        <Stack.Screen name="Code100" component={List100} options={{ title: 'Codigo 100'}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}


