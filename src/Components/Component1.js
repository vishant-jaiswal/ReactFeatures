import React,{Component} from 'react';
import {View,Text } from 'react-native';


class Component1 extends Component{

    constructor(props){
        super(props);
        this.state = {
            name:'Component1',
            message : this.props.message
        }
    }

    render(){
        return(
            <View>
                <Text> {this.state.name}</Text>
                <Text> This is Comming from Component1.js</Text>
                <Text>{this.state.message}</Text>
            </View>
        );
    }
}


export default Component1;