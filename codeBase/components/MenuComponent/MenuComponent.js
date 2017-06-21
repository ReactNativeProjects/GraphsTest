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
  View, //Similar to div in htmls
  TouchableHighlight,
  Image,
  ListView,
  Switch
} from 'react-native';
import HomePage from '../DrawerItems/DashBoard'
import Masters from '../DrawerItems/Masters'
import Transaction from '../DrawerItems/Transaction'
import Report from '../DrawerItems/Report'
import Tools from '../DrawerItems/Tools'
import Tables from '../DrawerItems/Tables'
const Data =[
            {name:'Dashboard',  imageSrc:require('../../../Images/dashboard.png')},
            {name:'Masters',    imageSrc:require('../../../Images/sandwich.png')},
            {name:'Transaction',imageSrc:require('../../../Images/transaction.png')},
            {name:'Report',     imageSrc:require('../../../Images/report.png')},
            {name:'Tools',      imageSrc:require('../../../Images/tools.png')},
            {name:'Tables',     imageSrc:require('../../../Images/tables.png')}
    ];
export default class MenuComponent extends Component {
    //To set state use constructor
    constructor(props){
        super(props);//should always be first statement in constructor when using react native
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.state = {
            dataSource: ds.cloneWithRows(Data),
        };
        this.onPressRow=this.onPressRow.bind(this);
        this.renderRow=this.renderRow.bind(this);
    }
    static defaultProps={
        
    }
    onPressRow(rowId, Item){
        console.log("'"+Item.name+"'");
        if (Item.name=='Dashboard'){
            parentComponent=this.props.defaultComponent;
            this.props.closeSideBar();
        }
        else if(Item.name=='Masters'){
            parentComponent=<Masters/>
            this.props.closeSideBar();
        }
        else if(Item.name=='Transaction'){
            parentComponent=<Transaction/>
            this.props.closeSideBar();
        }
        else if(Item.name=='Report'){
            parentComponent=<Report/>
            this.props.closeSideBar();
        }
        else if(Item.name=='Tools'){
            parentComponent=<Tools/>
            this.props.closeSideBar();
        }
        else if(Item.name=='Tables'){
            parentComponent=<Tables/>
            this.props.closeSideBar();
        }
        this.props.updateState(parentComponent);
    }
    renderRow(Item,sectionId,rowId,highlightRow){
        return(
            <TouchableHighlight onPress={()=>this.onPressRow(rowId, Item)}>
                <View style={styles.row}>
                    <Image style={styles.imageStyle} source={Item.imageSrc}/>
                    <Text style={styles.textStyle}>{Item.name}</Text>
                </View>
            </TouchableHighlight>
        )
    }     
    render() {
        return (
        <View style={styles.menuStyle}>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                style={styles.listViewStyle}
            />
        </View>
        );
    }
}
const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'center',
        padding:12,
        backgroundColor:'black',
        borderBottomWidth:2,
        borderBottomColor:'white'
    },
    textStyle:{
        flex:1,
        color:'white',
        alignSelf:'center',
        paddingLeft:15
    },
    menuStyle:{
        backgroundColor:'black',
        borderWidth:2,
        flexDirection:'column',
        flex:1
    },
    imageStyle:{
        width   :30,
        height  :30,
        alignSelf:'center'
    }
});
AppRegistry.registerComponent('MenuComponent', () => MenuComponent);