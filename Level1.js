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

import Level2 from './Level2';

import Timer from './Timer';
import Counter from './Counter';
import Element from './Element';

const h =8;
const w= 8;
let counter = 0;

export default class Level1 extends Component {
    constructor(props) {
       super(props);
      this.state = {
           grid: []
    }
   };

   componentWillMount=()=> {
      this.props.countf(0);
      this.ElementsArr();
    }

    level1Click = (props) => {
        if (props.color && props.color == '#9acd32'){
              // console.warn('2222')
                this.props.countf(this.props.counter + 1)
                this.ElementsArr();
          }
      }
   timeCallback = () => {
       if (this.props.counter >= 10) {
           this.props.nextLevel();
       }
       else {
           this.props.previousLevel();
       }
   }
 render() {
   return (
  <View style={styles.container}>
     <View style= {{justifyContent: 'space-between', flexDirection: 'row' }}>     
     <Timer TimeCallback={this.timeCallback} />
     <Counter count={this.props.counter}/>  
     </View>
     {this.state.grid.map((line, key) => {
                    return (
                        <View key={key} style={{flexDirection: 'row', flex: 1,justifyContent: 'space-between'}}>
                            {
                                line.map(element => <Element callback={this.level1Click} key={element.id}
                                                             color={element.color || ''} text= {element.text}/>)
                            }
                        </View>)
                })
                }
</View> 
   );
 }

 ElementsArr() {
    let results = []

    for (let i = 0; i < 7; i++) {
        results.push([]);
        for (let j = 0; j < 5; j++)
            results[i].push({id: j, color: 'transparent', text: ''});
    }
    results[Math.floor(Math.random() *  6)][Math.floor(Math.random() * 4)].color = '#9acd32';

    this.setState({grid: results});
}
}

const styles = StyleSheet.create({

    container: {
        marginRight: 10,
        justifyContent: 'space-between',
        flex: 1,
        
      }
    });