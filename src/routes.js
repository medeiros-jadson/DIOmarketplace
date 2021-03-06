import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Catalog from './pages/Catalog';
import Header from './components/header';
import Cart from './pages/Cart';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();

const routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          cardStyle: { backgroundColor: '#313746' },
        }}
        initialRouteName="Catalog"
      >
        <Stack.Screen
          name="Catalog"
          component={Catalog}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: () => <Header />,
          }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: () => <Header />,
            headerBackTitleVisible: false,
            headerLeftContainerStyle: {
              marginLeft: 20,
            },
            headerBackImage: () => (
              <FeatherIcon name="chevron-left" size={24} color="#f3f9ff" />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default routes;
