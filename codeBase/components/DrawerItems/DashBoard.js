import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text, 
  View,
  Button,   
  ScrollView,
  TouchableHighlight
} from 'react-native';
import DrawerToolbarComponent from '../../components/DrawerToolbarComponent/DrawerToolbarComponent'
import ProgessChartComponent from '../../components/ProgessChartComponent/ProgessChartComponent'
import PieChartComponent from '../../components/PieChartComponent/PieChartComponent'
import BarChartComponent from '../../components/BarChartComponent/BarChartComponent'
export default class DashBoard extends Component {
    constructor(props){
        super(props);
        this.state={
            DetailsComponent1:this.props.DetailsComponent1,
            text:this.props.text
        }
        this.showDetails=this.showDetails.bind(this)
    }
    static defaultProps={
        DetailsComponent1:<Text>Haha!</Text>,
        text:'lol'
    }
    showDetails(){
        console.log('I am here!')
        var DC1=<Text>Hello Vamshi!</Text>
        this.setState({DetailsComponent1:DC1,text:'lollll'})
    }
    render() {
        var fetchedData = require('../../dataProvider/DataPull/DataPull');
        var chartStyles = require('../../styles/chartStyles');
        var count = fetchedData.count;
        var color = fetchedData.color;
        var name = fetchedData.name;
        var defaultComponent=  <View style={styles.mainDiv}>
                                    <ScrollView>
                                        <View style={{flexDirection:'row'}}>
                                            <View style={[chartStyles.leftChart]}><ProgessChartComponent count={count[0]} color={color[0]} name={name[0]}/></View>
                                            <View style={[chartStyles.rightChart]}><ProgessChartComponent count={count[1]} color={color[1]} name={name[1]}/></View>
                                        </View>
                                        <View style={{flexDirection:'row'}}>
                                            <View style={[chartStyles.leftChart]}><ProgessChartComponent count={count[2]} color={color[2]} name={name[2]}/></View>
                                            <View style={[chartStyles.rightChart]}><ProgessChartComponent count={count[3]} color={color[3]} name={name[3]}/></View>
                                        </View>
                                        <View style={chartStyles.fullChart}><PieChartComponent count={count} color={color} name={name}/></View>
                                        <View style={chartStyles.fullChart}><BarChartComponent/></View>
                                        <View style={chartStyles.fullChart}><ProgessChartComponent/></View>
                                    </ScrollView>
                                    <Button
                                        onPress={() =>{this.props.navigate('DetailsPage',{navigate: this.props.navigate})}}
                                        title="Go to DetailsPage"/>
                                </View>;
            console.log('render called!')
        //<DrawerToolbarComponent defaultComponent={defaultComponent}/>
        //defaultComponent
        return (
                <DrawerToolbarComponent defaultComponent={defaultComponent}/>
        )
        
    }
}
                                            {/*<TouchableHighlight onPress={this.showDetails}>
                                                <View style={[chartStyles.leftChart]}><ProgessChartComponent count={count[0]} color={color[0]} name={name[0]}/></View>
                                            </TouchableHighlight>*/}
                                        // <View>{this.state.DetailsComponent1}</View>
                                        // <Text>{this.state.text}</Text>
const styles = StyleSheet.create({
    mainDiv:{
        backgroundColor:'#808080',
        flex:1,
        paddingBottom:10
    }
});
AppRegistry.registerComponent('DashBoard', () => DashBoard);