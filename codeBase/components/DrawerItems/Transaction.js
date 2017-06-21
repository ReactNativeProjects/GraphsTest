/*
https://github.com/itinance/react-native-fs
npm install react-native-fs --save
android/settings.gradle
...
include ':react-native-fs'
project(':react-native-fs').projectDir = new File(settingsDir, '../node_modules/react-native-fs/android')


android/app/build.gradle
...
dependencies {
    ...
    compile project(':react-native-fs')
}


For react-native 0.29.0 and higher ( in MainApplication.java )
import com.rnfs.RNFSPackage; // <------- add package

public class MainApplication extends Application implements ReactApplication {
   // ...
    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
        new MainReactPackage(), // <---- add comma
        new RNFSPackage() // <---------- add package
      );
    }
*/



/*
https://github.com/luisfuertes/react-native-file-picker
npm install react-native-file-picker@latest --save
// file: android/settings.gradle
...

include ':react-native-file-picker'
project(':react-native-file-picker').projectDir = new File(settingsDir, '../node_modules/react-native-file-picker/android')


// file: android/app/build.gradle
...

dependencies {
    ...
    compile project(':react-native-file-picker')
}





<!-- file: android/src/main/AndroidManifest.xml -->
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.myApp">

    <uses-permission android:name="android.permission.INTERNET" />

    <!-- add following permissions -->
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
    <!-- -->
    ...




// file: MainApplication.java
...

import com.filepicker.FilePickerPackage; // import package

public class MainApplication extends Application implements ReactApplication {

    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new FilePickerPackage() // Add package
        );
    }
...
}
*/
import React, { Component } from 'react';
import {
  AppRegistry,//JavaScript entrypoint to run all the react native code
  StyleSheet,
  Text, //similar to span in html
  View, //Similar to div in html
  Button,
  ScrollView,
  TouchableHighlight
} from 'react-native';
var RNFS = require('react-native-fs');
const FilePickerManager = require('NativeModules').FilePickerManager;
export default class Transaction extends Component {
    //To set state use constructor
    constructor(props){
        super(props);//should always be first statement in constructor when using react native
        this.state={
            file:'',
            content:'',
            fileStatus:this.props.fileStatus
        }
    }
    static defaultProps={
        fileStatus:'No file chosen'
    }
    ComponenetDidMount(){
        this.setState({fileStatus:this.props.fileStatus});
    }
    ComponenetWillMount(){
        this.setState({fileStatus:this.props.fileStatus});
    }
    csvJSON(csv){
        var lines=csv.split("\r\n");
        var result = [];
        var headers=lines[0].split(",");
        for(var i=1;i<lines.length;i++){
            var obj = {};
            var currentline=lines[i].split(",");
            for(var j=0;j<headers.length;j++){
                obj[headers[j]] = currentline[j];
            }
            result.push(obj);
        }
        return JSON.stringify(result);
    }
    selectFile(){
        FilePickerManager.showFilePicker(null, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled file picker');
            }
            else if (response.error) {
                console.log('FilePickerManager Error: ', response.error);
            }
            else {
                console.log('Yoo awsome');
                console.log('response:'+response);
                this.setState({
                    file: JSON.stringify(response)
                });

                var path = response.path;
                RNFS.readFile(path, 'utf8')
                .then(
                    (success)=>
                    {
                        console.log("Content:"+this.csvJSON(success));
                        this.setState({
                            content: this.csvJSON(success)
                        })
                    }
                )
                .catch((err)=>console.log("Error :"+err))
            }
        });
    }
    render() {
        var path = 'storage/emulated/0/Download/test.txt';

        // write the file
        RNFS.writeFile(path, 'This file is created', 'utf8')
        .then((success) => {
            console.log('FILE WRITTEN! SUCCESSFUL');
        })
        .catch((err) => {
            console.log('ERROR',err.message);
        });
        return (
        <View style={styles.mainDiv}>
            <Text style={{fontSize:30,color:'white',textAlign:'center'}}>TRANSACTION</Text>
            <View style={styles.uploadFilesContainer}>
                <TouchableHighlight onPress={()=>this.selectFile()} style={styles.chooseFileButton}><Text style={styles.chooseFileText}>UPLOAD NEW FILE</Text></TouchableHighlight>
                <View style={styles.fileStatusContainer}><Text style={styles.fileStatusText}>{this.state.fileStatus}</Text></View>
            </View>
            <Text>{this.state.file}</Text>
            <ScrollView><Text>{this.state.content}</Text></ScrollView>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    mainDiv:{
        backgroundColor:'#808080',
        flex:1,
        paddingBottom:10,
    },
    uploadFilesContainer:{
        margin:10,
        paddingTop:180
    },
    uploadFileText:{
        fontSize:18,
        color:'#808080',
        alignSelf:'center'
    },
    chooseFileButton:{
        backgroundColor:'#00aced',
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        borderColor:'white',
        flexDirection:'row',
        height:35
    },
    chooseFileText:{
        fontSize:15,
        color:'white',
        textAlign:'center',
        fontWeight:'bold',
        flex:1,
        alignSelf:'center'
    },
    fileStatusContainer:{
        backgroundColor:'white',
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        borderColor:'white',
        flexDirection:'row',
        height:35,
    },
    fileStatusText:{
        fontSize:15,
        color:'#00aced',
        textAlign:'center',
        fontWeight:'bold',
        flex:1,
        alignSelf:'center'
    }
});
AppRegistry.registerComponent('Transaction', () => Transaction);

/*
        // get a list of files and directories in the main bundle
        RNFS.readDir(RNFS.DocumentDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
        .then((result) => {
            console.log('GOT RESULT', result);

            // stat the first file
            return Promise.all([RNFS.stat(result[0].path), result[0].path]);
        })
        .then((statResult) => {
            if (statResult[0].isFile()) {
            // if we have a file, read it
            return RNFS.readFile(statResult[1], 'utf8');
            }

            return 'no file';
        })
        .then((contents) => {
            // log the file contents
            console.log("////////////////////////////////////////////contents");
            console.log(contents);
            console.log("////////////////////////////////////////////contents");
        })
        .catch((err) => {
            console.log(err.message, err.code);
        });

        
        
        // create a path you want to write to
        var path = RNFS.DocumentDirectoryPath + '/test.txt';

        // write the file
        RNFS.writeFile(path, 'This file is created', 'utf8')
        .then((success) => {
            console.log('FILE WRITTEN! SUCCESSFUL');
        })
        .catch((err) => {
            console.log('ERROR',err.message);
        });

        */
