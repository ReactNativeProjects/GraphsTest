import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text, 
  View,
} from 'react-native';
import {CircularProgress} from 'react-native-svg-circular-progress'
export default class ProgessChartComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            count:this.props.count,
            color:this.props.color,
            name:this.props.name
        };
    }
    static defaultProps={
        count:40,
        color:'red',
        name:'Progress'
    }
    fetchData(){
        this.setState(  {
                            count:this.props.count,
                            color:this.props.color,
                            name:this.props.name,
                        });
    }
    ComponentDidMount(){
        this.fetchData();
    }
    ComponentWillMount(){
        this.fetchData();
    }
    render() {
        var chartStyles = require('../../styles/chartStyles');
        return (
                    <View style={chartStyles.chartHolder}>
                        <Text style={chartStyles.chartHeading}>{this.state.name}</Text>
                        <View
                            style={chartStyles.progressStyle}> 
                            <CircularProgress 
                                percentage={this.state.count}
                                blankColor="#eaeaea"
                                donutColor ={this.state.color}>
                                <View>
                                    <Text>{this.state.count}</Text>
                                </View>
                            </CircularProgress>
                        </View>
                    </View>
        )
    }
}
AppRegistry.registerComponent('ProgessChartComponent', () => ProgessChartComponent);