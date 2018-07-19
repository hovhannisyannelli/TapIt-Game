import React, { Component } from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  AlertAndroid,
  NativeModules,
  LayoutAnimation
} from 'react-native';

import Button from './Button';


export default class Welcome extends Component {
    constructor(props) {
       super(props);
      this.state = {
       }
   }
 render() {
   return (
      
     
       <View >
       <Text style={styles.welcome}>
         Welcome to Tapit!
       </Text>
       <Text style={styles.instructions}>
         Try to tap as many times the button as You can.
         To get started, click the Button
       </Text>
           
     </View>
      
   );
 }


}
const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#F5FCFF',
 },
 welcome: {
   fontSize: 30,
   textAlign: 'center',
   margin: 10,
   color: '#841584',
   fontFamily: 'Permanent Marker',
 },
 instructions: {
   fontSize: 25,
   textAlign: 'center',
   color: '#333333',
   marginBottom: 5,
   fontFamily: 'Permanent Marker',
 },

 box: {
   width: 200,
   height: 200,
   backgroundColor: 'red',
 },
});