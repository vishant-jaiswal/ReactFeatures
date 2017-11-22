import React,{Component} from 'react';
import {View,Text,StyleSheet } from 'react-native';


class Component1 extends Component{

    constructor(props){
        super(props);
        this.state = {
            name:'Component1',
            message : this.props.message
        }
    }

    static defaultProps ={
        message : 'Hi There'
    }

    render(){
        return(
            <View style={styles.myView}>
                <Text style={styles.myText}> {this.state.name}</Text>
                <Text style={{ color:'red' }}> This is Comming from Component1.js</Text>
                <Text>{this.state.message}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    myText:{
        color:'white'
    },

    myView:{
        backgroundColor: 'blue'
    }
});


export default Component1;