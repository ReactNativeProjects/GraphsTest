import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text, 
  View,
  Button,
  DrawerLayoutAndroid,
  ScrollView,
  ListView
} from 'react-native';
var Accordion = require('react-native-accordion');
const Data =[
                {name:'Dashboard'},
                {name:'Masters'},
                {name:'Transaction'},
                {name:'Report'},
                {name:'Tools'},
                {name:'Tables'}
            ];
export default class ExpandableListView extends Component {
    //To set state use constructor
    constructor(props){
        super(props);//should always be first statement in constructor when using react native
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.state = {
            dataSource: ds.cloneWithRows(Data),
        };
    }
    static defaultProps={
    }
    renderRow() {
        var header = (
            <View>
                <Text>Click to Expand</Text>
            </View>
        );
    
        var content = (
            <View>
                <Text>This content is hidden in the accordion</Text>
            </View>
        );
    
        return (
            <Accordion
                header={header}
                content={content}
            />
        );
    }
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}
const styles = StyleSheet.create({
});
AppRegistry.registerComponent('ExpandableListView', () => ExpandableListView);










/* 
var YourComponent = React.createClass({
 
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
      />
    );
  },
 
  _renderRow() {
    var header = (
      <View>
        <Text>Click to Expand</Text>
      </View>
    );
 
    var content = (
      <View>
        <Text>This content is hidden in the accordion</Text>
      </View>
    );
 
    return (
      <Accordion
        header={header}
        content={content}
        easing="easeOutCubic"
      />
    );
  }
});*/