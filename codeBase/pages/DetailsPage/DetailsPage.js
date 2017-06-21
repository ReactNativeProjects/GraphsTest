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
  Button,
  DrawerLayoutAndroid
} from 'react-native';
import DrawerToolbarComponent from '../../components/DrawerToolbarComponent/DrawerToolbarComponent'
export default class DetailsPage extends Component {
    //To set state use constructor
    constructor(props){
        super(props);//should always be first statement in constructor when using react native
        this.state={
        }
    }
    static defaultProps={
    }
    render() {
        var defaultComponent=  <View>
                            <Button
                                onPress={() =>{params.navigate('GraphsTest')}}
                                title="Go to HomePage"
                            />
                        </View>;
        const { params } = this.props.navigation.state;
        return (
           <DrawerToolbarComponent defaultComponent={defaultComponent}/>
        )
    }
}
/*var navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
            </View>
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>
                    <ToolbarAndroidComponent/>
                <Text>NewActivity2</Text>
                <Button
                    onPress={() =>{params.navigate('HldrmsProj')}}
                    title="Go to NewActivity"
                />
            </DrawerLayoutAndroid>
        );*/
const styles = StyleSheet.create({
});
AppRegistry.registerComponent('DetailsPage', () => DetailsPage);