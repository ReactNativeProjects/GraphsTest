/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/*
Use this command for debugging : react-native log-android
STAY ON C: AND THEN USE THIS COMMAND : cd Users/vamshi/AppData/Local/Android/sdk/tools
TO START EMULATOR : emulator -avd Nexus_6_API_23
STAY ON C:/Users/vamshi AND THEN USE THIS COMMAND :project creation : react-native init AwesomeProject
cd AwesomeProject
launch project on android device : react-native run-android
*/
import React, { Component } from 'react';
import {
  AppRegistry,//JavaScript entrypoint to run all the react native code
  StyleSheet,
  Text, //similar to span in html
  View, //Similar to div in html
  Slider,
  Picker,
  Button,
  ScrollView,
  Switch,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  StatusBar,
  ToolbarAndroid,
  ListView,
  AsyncStorage,
  TextInput,
  Share,
  Dimensions
} from 'react-native';

export default class BasicFile extends Component {
    //To set state use constructor
    constructor(props){
        super(props);//should always be first statement in constructor when using react native
        this.state={
        }
    }
    static defaultProps={
    }
    render() {
        return (
        <View>
            <Text>BasicFile!</Text>
        </View>
        );
    }
}
const styles = StyleSheet.create({
});
AppRegistry.registerComponent('BasicFile', () => BasicFile);