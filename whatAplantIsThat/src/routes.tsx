import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import SearchPage from './pages/searchPage';
import PlantListPage from './pages/plantListPage';
import DetailsPage from './pages/detailsPage';

const Stack = createStackNavigator();

function MyRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SearchPage" screenOptions={{headerShown: false}}>
        <Stack.Screen name="SearchPage" component={SearchPage} />
        <Stack.Screen name="PlantListPage" component={PlantListPage} />
        <Stack.Screen name="DetailsPage" component={DetailsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyRoutes;