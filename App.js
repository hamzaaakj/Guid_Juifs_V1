import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home'; // Adjust the path as needed
import Events from './screens/Events';
import Info from './screens/Info';
import MapScreen from './screens/MapScreen';

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="Events" component={Events} />
        <Stack.Screen name="Info" component={Info} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
