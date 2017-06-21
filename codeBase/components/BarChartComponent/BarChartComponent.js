import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text, 
  View
} from 'react-native';
import {BarChart} from 'react-native-mp-android-chart';
export default class GraphsTest extends Component {
    constructor(props){
        super(props);
        this.state={
                      legend: {
                        enabled: false,
                        textSize: 14,
                        form: 'SQUARE',
                        formSize: 14,
                        xEntrySpace: 10,
                        yEntrySpace: 5,
                        formToTextSpace: 5,
                        wordWrapEnabled: true,
                        maxSizePercent: 0.5
                      },
                      data: {
                              datasets: [{
                                          yValues: [100, 105, 102, 110, 114, 109, 105, 99, 95],
                                          label: 'Bar dataset',
                                          config: {
                                                    color: 'teal',
                                                    barSpacePercent: 40,
                                                    barShadowColor: 'lightgrey',
                                                    highlightAlpha: 90,
                                                    highlightColor: 'red'
                                                  }
                                        }],
                              xValues: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
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
    render() {
        var chartStyles = require('../../styles/chartStyles');
        return (          
            <View style={chartStyles.chartHolder}>
                <Text style={chartStyles.chartHeading}>BAR CHART</Text>
                <BarChart
                    style={chartStyles.barChart}
                    data={this.state.data}
                    animation={{durationX: 2000}}
                    legend={this.state.legend}
                    gridBackgroundColor={'#ffffff'}
                    description={this.state.description}
                    drawBarShadow={false}
                    drawValueAboveBar={true}
                    drawHighlightArrow={true}
                />
            </View>                      
        )
    }
}
AppRegistry.registerComponent('GraphsTest', () => GraphsTest);