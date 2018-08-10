import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  Button
} from "react-native";


import {createBottomTabNavigator} from 'react-navigation'

class HomeScreen extends Component {
  render(){
    return (
      <View>
        <Text> This is the Home Screen </Text>
      </View>
    );
  }
}
// Home

class Home extends Component {
  render(){
    return(
      <View>
      <Text> This is the Home Screen </Text>
      <Button onPress={() => this.props.navigation.navigate('Course1Screen')} title="Go to the Course1Screen Screen"/>
      <Button onPress={() => this.props.navigation.navigate('Course2Screen')} title="Go to the Course2Screen Screen"/>

      </View>
    );
  }
}
// Account Screen

class Account extends Component {
  render(){
    return(
      <View>
      <Text> This is the Account Screen </Text>
      </View>
    );
  }
}

// Upload Task Screen
class UploadTask extends Component {
  render(){
    return(
      <View>
      <Text> This is the UploadTask Screen </Text>
      <Button onPress={() => this.props.navigation.navigate('TaskScreen')} title="Go to the Task Screen"/>

      </View>
    );
  }
}


// Skills Screen
class Skills extends Component {
  render(){
    return(
      <View>
      <Text> This is the Skills Screen </Text>
      </View>
    );
  }
}



const HomeScreenTabNavigator = createBottomTabNavigator ({
  Home: {
    screen: Home
  },
  Account:{
    screen: Account
  },
  UploadTask: {
    screen: UploadTask
  },
  Skills: {
    screen: Skills
  }
}
, {
  animationEnabled: true
}
)

export default HomeScreenTabNavigator;
