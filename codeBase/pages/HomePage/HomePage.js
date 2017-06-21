import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text, 
  View,
  Button,   
  ScrollView
} from 'react-native';
import DrawerToolbarComponent from '../../components/DrawerToolbarComponent/DrawerToolbarComponent'
import ProgessChartComponent from '../../components/ProgessChartComponent/ProgessChartComponent'
import PieChartComponent from '../../components/PieChartComponent/PieChartComponent'
import BarChartComponent from '../../components/BarChartComponent/BarChartComponent'
export default class HomePage extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    render() {
        var fetchedData = require('../../dataProvider/DataPull/DataPull');
        var chartStyles = require('../../styles/chartStyles');
        var progressData = fetchedData.progressData;
        var defaultComponent=  <View style={styles.mainDiv}>
                            <Button
                                onPress={() =>{this.props.navigate('DetailsPage',{navigate: this.props.navigate})}}
                                title="Go to DetailsPage"/>
                            <ScrollView>
                                <View style={{flexDirection:'row'}}>
                                    <View style={[chartStyles.leftChart]}><ProgessChartComponent percentage={progressData[0]}/></View>
                                    <View style={[chartStyles.rightChart]}><ProgessChartComponent percentage={progressData[1]}/></View>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <View style={[chartStyles.leftChart]}><ProgessChartComponent percentage={progressData[2]}/></View>
                                    <View style={[chartStyles.rightChart]}><ProgessChartComponent percentage={progressData[3]}/></View>
                                </View>
                                <View style={chartStyles.fullChart}><PieChartComponent progressData={progressData}/></View>
                                <View style={chartStyles.fullChart}><BarChartComponent/></View>
                                <View style={chartStyles.fullChart}><ProgessChartComponent/></View>
                            </ScrollView>
                        </View>;
        return (
           <DrawerToolbarComponent defaultComponent={defaultComponent}/>
        )
    }
}
const styles = StyleSheet.create({
    mainDiv:{
        backgroundColor:'#808080',
        flex:1,
        paddingBottom:10
    }
});
AppRegistry.registerComponent('HomePage', () => HomePage);