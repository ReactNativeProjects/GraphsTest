/*
Use this command for debugging : react-native log-android
STAY ON C: AND THEN USE THIS COMMAND : cd Users/vamshi/AppData/Local/Android/sdk/tools
TO START EMULATOR : emulator -avd Nexus_6_API_23
STAY ON C:/Users/vamshi AND THEN USE THIS COMMAND :project creation : react-native init AwesomeProject
cd AwesomeProject
launch project on android device : react-native run-android
*/
//npm install --save react-native-form
//npm i apsl-react-native-button --save
//https://github.com/APSL/react-native-button
import React, { Component } from 'react';
import Button from 'apsl-react-native-button'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';
import Form from 'react-native-form'
var FloatingLabel = require('react-native-floating-labels');
export default class LoginPage extends Component {
    
  render() {
    return (
      <View>
        <Form ref="form">
          <View>
            <View style={styles.formHolder}>
              <Image 
                source={require('../../../Images/haldiramsLogo.png')}
                style={styles.imageStyle}
              />
              <FloatingLabel 
                    labelStyle={styles.labelInput}
                    inputStyle={styles.input}
                    style={styles.floatInputStyle}
                    underlineColorAndroid='transparent'
                    keyboardType="email-address"
                    multiline={false}
              >User Name</FloatingLabel>
              <FloatingLabel 
                    labelStyle={styles.labelInput}
                    inputStyle={styles.input}
                    style={styles.floatInputStyle}
                    underlineColorAndroid='transparent'
                    multiline={false}
                    secureTextEntry={true}
                    clearTextOnFocus={true}
              >Password</FloatingLabel>
              <Button
                style={styles.buttonStyle}
                textStyle={styles.buttonTextStyle}
                onPress={()=>{}}
              >Login</Button>
              
            </View>
          </View>
        </Form>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  formHolder : {
    flexDirection : 'column',
  },
  imageStyle : {
    alignSelf:'center',
    marginTop : 150,
  },
  textInputStyle : {
    borderColor: 'red',
    borderWidth: 1,
    margin: 25,
    marginBottom :0,
    padding : 10,
    height : 45,
    borderRadius : 5,
  },
  floatInputStyle : {
    borderColor: 'red',
    margin: 25,
    marginTop :2,
    marginBottom :0,
    borderBottomWidth: 1, 
  },
  buttonStyle : {
    borderWidth : 0,
    margin: 25,
    backgroundColor:'red',
    height : 45,
    alignSelf:'center',
    marginTop : 35,
    borderRadius : 10,
  },
  buttonTextStyle :{
    color : 'white'
  },
  footer:{
    flexDirection : 'row',
    margin: 25,
  },
  forgotPwd : {
    flex:1,
    textAlign :'right'
  },
  resetPwd : {
    flex:1,
    color:'red'
  },
  labelInput: {
    color: 'black',
  },
  input: {
    borderWidth: 0
  }
});

AppRegistry.registerComponent('LoginPage', () => LoginPage);
