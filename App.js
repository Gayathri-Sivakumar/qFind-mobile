import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AllTickets from './src/screens/AllTickets';
import SellTicket from './src/screens/SellTicket';
import YourTickets from './src/screens/YourTickets';
import Example from './src/screens/Example';
import Settings from './src/screens/Settings';
import Account from './src/screens/Account';
import Details from './src/screens/Details';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AllTickets"
          component={AllTickets}
          options={{title: '', headerShown: true}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerStyle: {
              backgroundColor: '#fff',
            },
            title: '',
            headerBackImage: () => (
              <View style={{marginLeft: 5}}>
                <Icon
                  name="keyboard-arrow-left"
                  size={35}
                  color="rgba(0, 0, 0, 0.40)"
                />
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="SellTicket"
          component={SellTicket}
          options={{
            headerStyle: {
              backgroundColor: '#fff',
            },
            title: '',
            headerBackImage: () => (
              <View style={{marginLeft: 5}}>
                <Icon
                  name="keyboard-arrow-left"
                  size={35}
                  color="rgba(0, 0, 0, 0.40)"
                />
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="YourTickets"
          component={YourTickets}
          options={{
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerBackImage: () => (
              <View style={{marginLeft: 5}}>
                <Icon
                  name="keyboard-arrow-left"
                  size={35}
                  color="rgba(0, 0, 0, 0.40)"
                />
              </View>
            ),
            title: '', // Custom title for the header
          }}
        />
        <Stack.Screen
          name="Example"
          component={Example}
          options={{
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerBackImage: () => (
              <View style={{marginLeft: 5}}>
                <Icon
                  name="keyboard-arrow-left"
                  size={35}
                  color="rgba(0, 0, 0, 0.40)"
                />
              </View>
            ),
            title: '', // Custom title for the header
          }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            headerStyle: {
              backgroundColor: '#fff',
            },
            title: '',
            headerBackImage: () => (
              <View style={{marginLeft: 5}}>
                <Icon
                  name="keyboard-arrow-left"
                  size={35}
                  color="rgba(0, 0, 0, 0.40)"
                />
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Account"
          component={Account}
          options={{
            headerStyle: {
              backgroundColor: '#fff',
            },
            title: '',
            headerBackImage: () => (
              <View style={{marginLeft: 5}}>
                <Icon
                  name="keyboard-arrow-left"
                  size={35}
                  color="rgba(0, 0, 0, 0.40)"
                />
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
