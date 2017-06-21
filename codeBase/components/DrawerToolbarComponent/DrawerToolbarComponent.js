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
//npm install react-native-textinput-effects --save
import React, { Component } from 'react';
import {
  AppRegistry,//JavaScript entrypoint to run all the react native code
  StyleSheet,
  Text, //similar to span in html
  View, //Similar to div in html
  Button,
  DrawerLayoutAndroid,
  ToolbarAndroid,
  TextInput,
  Image
} from 'react-native';
import MenuComponent from '../MenuComponent/MenuComponent';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import { Kohana } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Makiko } from 'react-native-textinput-effects';

export default class DrawerToolbarComponent extends Component {
    //To set state use constructor
    constructor(props){
        super(props);//should always be first statement in constructor when using react native
        this.state={
            text:this.props.text,
            component:this.props.defaultComponent,
            defaultComponent:this.props.defaultComponent
        }
    }
    static defaultProps={
        component:(<Text>Default component</Text>)
    }
    componentDidMount(){
        this.setState({text:this.props.text,component:this.props.defaultComponent})
    }
    componentWillMount(){
        this.setState({text:this.props.text,component:this.props.defaultComponent})
    }
    openDrawerLayout(){
        this.refs['DRAWER_REF'].openDrawer();
    }
    closeDrawerLayout(){
        this.refs['DRAWER_REF'].closeDrawer();
    }
    updateState(parentComponent){
        this.setState({component:parentComponent})
    }
    render() {
        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <MenuComponent component={this.state.component} 
                    defaultComponent={this.state.defaultComponent} 
                    updateState={this.updateState.bind(this)}
                    closeSideBar={this.closeDrawerLayout.bind(this)}
                />
            </View>
        );
        return (
            <DrawerLayoutAndroid
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    renderNavigationView={() => navigationView}
                    ref={'DRAWER_REF'}
                    >
                    <ToolbarAndroid
                        style={styles.toolbar}
                        navIcon={require('../../../Images/sandwich.png')}
                        logo={require('../../../Images/haldiramsLogo.png')}
                        actions={toolbarActions}
                        onIconClicked={()=>{this.openDrawerLayout()}}
                    />
                    
                    {this.state.component}
            </DrawerLayoutAndroid>
        );
    }
}
const toolbarActions = [
    {title: 'Notification', icon: require('../../../Images/notification.png'), show: 'always'},
    {title: 'Message', icon: require('../../../Images/message.png'), show: 'always'},
    {title: 'Profile', icon: require('../../../Images/profile.png'), show: 'always'},
]
{/*<View style={styles.searchOuterView}>
                        <View style={styles.searchInnerView}>
                            <Image source={require('../../../Images/searchIcon.png')} style={styles.iconStyle}/>
                            <TextInput 
                                underlineColorAndroid='blue'
                                placeholder='Search'
                                placeholderTextColor='white'
                                style={styles.searchBox}
                            />
                        </View>
                    </View>*/}
const styles = StyleSheet.create({
    toolbar: {
        height: 50,
        backgroundColor: 'black'
    },
    mainText: {
        padding:20
    },
    searchOuterView:{
        backgroundColor:'#808080',
        padding:4,
        paddingLeft:6,
        paddingRight:6,
        height:45,
    },
    searchInnerView:{
        backgroundColor:'white',
        flexDirection:'row',
        borderRadius:5
    },
    searchBox:{
        backgroundColor:'white',
        height:36,
        width:365
    },
    iconStyle:{
        width:23,
        height:23,
        marginLeft:5,
        alignSelf:'center'
    }
});
AppRegistry.registerComponent('DrawerToolbarComponent', () => DrawerToolbarComponent);