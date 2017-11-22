import React,{Component} from 'react';
import {View,Text } from 'react-native';


class Component1 extends Component{

    render(){
        return(
            <View>
                <Text> This is Comming from Component1.js</Text>
                <Text>{this.props.message}</Text>
            </View>
        );
    }
}


export default Component1;