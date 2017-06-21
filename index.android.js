/*
Use this command for debugging : react-native log-android
STAY ON C: AND THEN USE THIS COMMAND : cd Users/vamshi/AppData/Local/Android/sdk/tools
TO START EMULATOR : emulator -avd Nexus_6_API_23
STAY ON C:/Users/vamshi AND THEN USE THIS COMMAND :project creation : react-native init AwesomeProject
cd AwesomeProject
launch project on android device : react-native run-android
*/
//npm install --save react-navigation
//npm install --save react-native-form
//npm i apsl-react-native-button --save
//https://github.com/APSL/react-native-button
//npm install react-native-floating-labels --save
//npm i react-native-chart --save
//npm install react-native-pie-chart --save
//npm install react-native-svg react-native-svg-circular-progress --save then run next command
//react-native link
//npm i --save react-native-accordion

import React, { Component } from 'react';
import Button from 'apsl-react-native-button'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
} from 'react-native';
import Form from 'react-native-form'
import {StackNavigator} from 'react-navigation';
import LoginPage from './codeBase/pages/LoginPage/LoginPage'
import DetailsPage from './codeBase/pages/DetailsPage/DetailsPage'
import HomePage from './codeBase/components/DrawerItems/DashBoard'
//import HomePage from './codeBase/pages/HomePage/HomePage'
import ExpandableListView from './codeBase/components/ExpandableListView/ExpandableListView'
export default class GraphsTest extends Component {
//<LoginPage/>
//<HomePage navigate={ navigate } component={component} text='vamshi'/>
//<ExpandableListView/>
  render() {
    const { navigate } = this.props.navigation;
    return(
        <HomePage navigate={ navigate }/>
    );
  }
}
const ActivityNavigator = StackNavigator({
    GraphsTest: { screen: GraphsTest ,
      navigationOptions: {
      header: null
    }},
    DetailsPage: { screen: DetailsPage ,
      navigationOptions: {
      header: null
    }}
    
});
AppRegistry.registerComponent('GraphsTest', () => ActivityNavigator);