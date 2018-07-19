

// import React,{ Component }  from 'react';
// import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
// import CountdownCircle from 'react-native-countdown-circle'
// export default class Timer extends Component {
//   constructor(props) {
//     super(props);
//     this.props = props;}
//   render() {
//     return (
//       <View style={styles.container}>
//         <CountdownCircle
//             seconds={20}
//             radius={40}
//             borderWidth={8}
//             color="#841584"
//             bgColor="white"
//             textStyle={{ fontSize: 30 }}
//             onTimeElapsed={this.props.TimeCallback}
//             // onTimeElapsed={() => console.warn("Here")}
//         />     
//       </View>
//     );
//   }
  
// }


// const styles = StyleSheet.create({

//   container: {
//     justifyContent: "space-between",
//     width: 50,
//     height:50,
//     paddingLeft: 30,
//     flexDirection: 'row'}
//   });


import React, { Component } from 'react';


import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native'

export default class Timer extends Component{

 state = {
     time: 20
      }

  componentDidMount(){
    this.interval = setInterval(this.mili, 1000); 
  }
  mili = () => {
    const { time } = this.state;
    if (time === 1) {
      this.props.TimeCallback();
    } else {

      this.setState({ time: time - 1 });
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
     
     render(){
       return(
         <View style= {styles.container}>
           <Text style={styles.countText}>
           {this.state.time}
           </Text> 
           </View> 

       )
     }
    }

    const styles = StyleSheet.create({

      container: {
           width: 100,
           height:100,
           flexDirection: 'row',
           marginLeft: 10,
           justifyContent: "space-between",
      
      },
      countText: {
          color: '#841584',
          fontSize: 60,
          fontStyle: 'italic'
      }
  });
