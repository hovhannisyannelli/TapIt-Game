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
import Counter from './Counter';


export default class Between extends Component {
 render() {
   return (   
       <View>
       <Text style={styles.between}>
         Game Over 
       </Text>
       <Text style={styles.instructions}>
         Sorry you are not qualified for Round 2, play Level 1 one more time. Your previous score was
       </Text>
       <View style= { {marginLeft: 185} }>
       <Counter count={this.props.counter}/> 
           </View>
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
 between: {
   fontSize: 30,
   textAlign: 'center',
   margin: 10,
   color: '#841584',
   fontFamily: 'Permanent Marker',
 },
 instructions: {
   fontSize: 23,
   textAlign: 'center',
   color: '#333333',
   marginBottom: 5,
   fontFamily: 'Permanent Marker',
 },
});