'use strict';

var React = require('react-native');

var chartStyles = React.StyleSheet.create({
   chartHolder : {
        backgroundColor : 'white',
        alignItems:'center',
        borderRadius:10,
        shadowColor: '#000000',
        shadowOffset: {
                width: 0,
                height: 3
            },
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
    fullChart:{
        marginRight :20,
        marginLeft :20,
        marginTop :10,
        marginBottom :10,
    },
    leftChart:{
        marginRight :10,
        marginLeft :20,
        marginTop :10,
        marginBottom :10,
        flex:1
    },
    rightChart:{
        marginRight :20,
        marginLeft :10,
        marginTop :10,
        marginBottom :10,
        flex:1
    },
   chartHeading:{
        color:'black',
        fontSize:20,
        marginTop:10
    },
    progressStyle:{
        margin:25,
        marginTop:10,
    },
    pieChart:{
        height: 300,
        width: 300,
        margin:25,
        marginTop:10
    },
    barChart: {
        height: 300,
        width: 300,
        margin:25,
        marginTop:10
    },
});

module.exports = chartStyles;