/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  TextInput,
  Text,
  View,
  Switch
} from 'react-native';


export default class TextInputComponent extends Component{
    constructor(){
        super();
        this.state = {
            textValue :'hello',
            switchValue : false,
        }
    }

    onChangeText(value){
        this.setState({
            textValue:value
        })
    }

    onSubmit(){
        console.log("onSubmit");
    }

    onSwitchCLicked(value){
        this.setState({
            switchValue:value
        })
    }


  render() {
    return (
      <View>
        <TextInput 
            placeholder = "Enter Name"
            value = {this.state.textValue}
            onChangeText = {(value) => this.onChangeText(value)}
            onSubmitEditing = {this.onSubmit}
            
        />
        <Text>{this.state.textValue}</Text>

        <Switch
            value = {this.state.switchValue}
            onValueChange = {(value) =>this.onSwitchCLicked(value)}
        />
      </View>
    );
  }
}
