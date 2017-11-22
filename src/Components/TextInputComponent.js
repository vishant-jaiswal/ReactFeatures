/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  TextInput,
  Text,
  View
} from 'react-native';


export default class TextInputComponent extends Component{
    constructor(){
        super();
        this.state = {
            textValue :'hello'
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


  render() {
    return (
      <View >
        <TextInput 
            placeholder = "Enter Name"
            value = {this.state.textValue}
            onChangeText = {(value) => this.onChangeText(value)}
            onSubmitEditing = {this.onSubmit}
            
        />
        <Text>{this.state.textValue}</Text>
      </View>
    );
  }
}
