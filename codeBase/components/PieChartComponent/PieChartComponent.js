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
  AppRegistry,
  StyleSheet,
  Text, 
  View
} from 'react-native';
import {PieChart} from 'react-native-mp-android-chart';
export default class GraphsTest extends Component {
    constructor(props){
        super(props);
        this.state={
                legend: {
                                enabled: false,
                                textSize: 14,
                                form: 'CIRCLE',
                                position: 'RIGHT_OF_CHART',
                                fontFamily: 'monospace',
                                wordWrapEnabled: true
                            },
                            data: {
                                datasets: [{
                                    yValues: this.props.count,
                                    label: 'Pie dataset',
                                    config: {
                                        colors: this.props.color,
                                        selectionShift: 13
                                    }
                                }],
                                xValues: this.props.name
                            },
                            description: {
                                text: '',
                                textSize: 15,
                                textColor: 'darkgray',
                                fontFamily: 'monospace',
                                fontStyle: 2
                            }

                    };
    }
    static defaultProps={
        count:[1,1,1,97],
        color:['#C0FF8C', '#FFF78C', '#FFD08C', '#8CEAFF'],
        name:['Sandwiches', 'Salads', 'Soup', 'Beverages']
    }
    fetchData(){
        var UpdatedDataSets=this.state.data.datasets;
        UpdatedDataSets[0].yValues=this.props.count;
        UpdatedDataSets[0].config.colors=this.props.color;
        var dataUpdated=this.state.data;
        dataUpdated.datasets=UpdatedDataSets;
        dataUpdated.xValues=this.props.name;
        this.setState({data:dataUpdated});
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
                        <Text style={chartStyles.chartHeading}>PIE CHART</Text>
                        <PieChart
                            style={chartStyles.pieChart}
                            logEnabled={true}
                            description={this.state.description}
                            data={this.state.data}
                            legend={this.state.legend}
                            drawSliceText={true}
                            usePercentValues={false}
                            centerText={'Pie center text!'}
                            centerTextRadiusPercent={100}
                            holeRadius={50}
                            transparentCircleRadius={40}
                            transparentCircleAlpha={50}
                            maxAngle={360}
                        />
                    </View>
        )
    }
}
AppRegistry.registerComponent('GraphsTest', () => GraphsTest);