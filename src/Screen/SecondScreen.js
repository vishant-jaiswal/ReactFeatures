import React from 'react';
import {View, Button,Text} from 'react-native';

const util = require('util');


export default class SecondScreen extends React.Component{
    static navigationOptions = {
        title : "Second Screen"
    };

    render() {
        console.log("Second Screen this.props.navigation = " + util.inspect(this.props.navigation,false,null));
        var {params} = this.props.navigation.state;
        return (
            <View>
                <Text>This is Screen 2</Text>
                <Text>Name : {params.name}</Text>
            </View>
        );
    }
}
