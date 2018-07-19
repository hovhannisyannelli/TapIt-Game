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
import CountdownCircle from 'react-native-countdown-circle'

import Button from './Button';
import Timer from './Timer';
import Welcome from './Welcome';
import Level1 from './Level1';
import Between from './Between';
import BetweenW from './BetweenW';
import Level2 from './Level2';
import Congrats from './Congrats';
import GameOver from './GameOver';

const State = {
  Welcome: 'Welcome',
  Level1: 'Level1',
  Level2: 'Level2',
  Between: 'Between',
  BetweenW: 'BetweenW',
  GameOver: 'GameOver',
  Congrats: 'Congrats',
}

export default class App extends Component {
     constructor(props) {
        super(props);
       this.state = {
           current: State.Welcome,
           count: 0   
        };
    };
    
    changingcounter = (newCount) => {
         this.setState({ count: newCount }); 
    }


    next = () => {
      //console.warn("Here");
      if(this.state.current === State.Welcome ){
      this.setState({current: State.Level1})}
      else if (this.state.current === State.Level1){
       this.setState({current: State.BetweenW}) 
      }
      else if (this.state.current === State.BetweenW){
        this.setState({current: State.Level2}) 
       }
       else if (this.state.current === State.Level2){
        this.setState({current: State.Congrats}) 
    }
       else if (this.state.current === State.Congrats || this.state.current === State.GameOver){
        this.setState({current: State.Welcome}) 
    }
    }
    previous = () => {
      //console.warn("Here");
      if(this.state.current === State.Level1){
      this.setState({current: State.Between})}
      else if (this.state.current === State.Between){
        this.setState({current: State.Level1}) 
    }
    else if (this.state.current === State.Level2){

      this.setState({current: State.GameOver}) 
  }
  }
  render() {
      
      if(this.state.current === State.Welcome){ 
      return (
           <View style={styles.container}>
             <Welcome />
             <Button callback = {this.next} text="Start the Game"/> 
          </View> );      
          }
      else if (this.state.current === State.Level1){
        return(
          <View style={{flex: 1}}>
             <Level1 nextLevel={this.next}
                     previousLevel ={this.previous}
                     counter = {this.state.count} 
                     countf = {this.changingcounter}>
            </Level1>  
        </View>)}
      else if (this.state.current === State.Between){
            return(
              <View style={styles.container}>
                 <Between counter = {this.state.count} />
                 <Button callback = {this.previous} text="Play Level 1" />                   
              </View>
        )
      }  
      else if (this.state.current === State.BetweenW){
        return(
          <View style={styles.container}>
             <BetweenW counter = {this.state.count}  />
             <Button callback = {this.next} text="Play Level 2" />                   
          </View>
    )
  }   

  else if (this.state.current === State.Level2){
    return(
      <View style={styles.container}>
        <Level2 nextLevel={this.next}
                     previousLevel={this.previous}
                     counter = {this.state.count} 
                     countf = {this.changingcounter} >
            </Level2>     
      </View>
)}

else if (this.state.current === State.Congrats){
  return(
    <View style={styles.container}>
       <Congrats counter = {this.state.count}  />
       <Button callback = {this.next} text="Play Again" />                   
    </View>
)
}  
else if (this.state.current === State.GameOver){
return(
<View style={styles.container}>
   <GameOver counter = {this.state.count}  />
   <Button callback = {this.next} text="Play Again" />                   
</View>
      )
    }   
  }      
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})


 
 

    
