import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import {HomeScreen} from './screens/HomeScreen';
import {DetailScreen} from './screens/DetailScreen';
import {InfoScreen} from './screens/InfoScreen';

//const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {

  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Info" component={InfoScreen} />
        <Tab.Screen name="Detail" component={DetailScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})