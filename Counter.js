import React,{ Component }  from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Counter extends Component{
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
       // console.warn('Warn')
        return (
            <View style={styles.container}>
                <Text style={styles.countText}>
                    {this.props.count}
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    container: {
         width: 100,
         height:100,
         flexDirection: 'row',
        //  marginTop: -5,
         justifyContent: "space-between",
         alignItems: 'center',
    
    },
    countText: {
        color: '#841584',
        fontSize: 60,
        fontStyle: 'italic'
    }
});