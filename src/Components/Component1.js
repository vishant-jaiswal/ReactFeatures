import React,{Component} from 'react';
import {View,Text } from 'react-native';


class Component1 extends Component{

    constructor(){
        super();
        this.state = {
            name:'Component1',
        }
    }

    render(){
        return(
            <View>
                <Text> {this.state.name}</Text>
                <Text> This is Comming from Component1.js</Text>
                <Text>{this.props.message}</Text>
            </View>
        );
    }
}


export default Component1;