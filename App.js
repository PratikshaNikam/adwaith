
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen  from './screens/HomeScreen';
import React from "react";
import {SafeAreaProvider} from "react-native-safe-area-context";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';


export default class App extends React.Component {
  render(){
  return (
    <SafeAreaProvider>
    <View style={styles.container}>
      <AppContainer/>
    </View>
    </SafeAreaProvider>
  );
  }
}


var AppNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  HomeScreen: { screen: HomeScreen },
})


const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
