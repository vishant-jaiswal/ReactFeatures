import React from 'react';
import {View, Button,Text} from 'react-native';

const util = require('util');


export default class HomeScreen extends React.Component{
    static navigationOptions = {
        title : "First Screen"
    };

    render() {
        console.log("this.props.navigation = " + util.inspect(this.props.navigation,false,null));
        var {navigate} = this.props.navigation
        return (
            <View>
                <Text>This is Screen 1</Text>
                <Button
                    onPress = {
                        () => navigate("SecondScreen",{name:"Vishant"})
                    }
                    title = "go to screen 2"
                />
            </View>
        );
    }
}
