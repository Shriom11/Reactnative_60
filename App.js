import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './App/Login'
import Signup from './App/Signup'
import List from './App/List'

export default class App extends React.Component {
  render() {
    const Routes = createStackNavigator({
      Login: {screen: Login},
      Signup: {screen: Signup},
      List: {screen: List}
    });
    
    const Root =  createAppContainer(Routes);
    return (
      <Root/>
    );
  }
}

