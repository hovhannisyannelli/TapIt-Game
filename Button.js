import React,{ Component }  from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <View>
                <TouchableOpacity
                    // style={[styles.button, {}]}
                    style={styles.button}
                    onPress={this.props.callback}
                >
                    <Text style={styles.text}> {this.props.text || ''} </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#841584',
        padding: 4,
        width:200,
        height: 50,
        borderRadius: 50/2
    },
    text:{
        alignItems:'center',
        fontSize:25
    }
});
